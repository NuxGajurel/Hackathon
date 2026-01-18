'use server';

const GEN_AI_KEY = process.env.GEMINI_API_KEY;

const MODELS = ['gemini-1.5-flash', 'gemini-pro', 'gemini-2.0-flash-exp'];

export async function getGeminiResponse(message: string) {
    let lastError = '';

    for (const model of MODELS) {
        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEN_AI_KEY}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: `You are a helpful and expert health advisor for SaralSewa. Your role is unauthorized to provide medical diagnosis.
                        
                        Context: The user is describing health symptoms.
                        Task:
                        1.  Analyze the symptoms provided: "${message}".
                        2.  Suggest potential causes or conditions associated with these symptoms.
                        3.  If the symptoms are vague, ask clarifying questions.
                        4.  ALWAYS provide a clear DISCLAIMER that you are an AI and this is not a medical diagnosis. Advice them to visit a doctor using the Map feature if symptoms persist or are severe.
                        5.  Keep the answer concise and empathetic.` }]
                        }],
                    }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
                return { success: true, text: text || 'No response generated.' };
            } else {
                console.warn(`Model ${model} failed:`, data.error?.message);
                lastError = data.error?.message || response.statusText;
                // Continue to next model if 404 or 403 or 429
            }
        } catch (error) {
            console.error(`Network error with ${model}:`, error);
            lastError = error instanceof Error ? error.message : String(error);
        }
    }

    return { success: false, text: `AI Service Unavailable: ${lastError}` };
}
