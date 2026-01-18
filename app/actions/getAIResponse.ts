'use server';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

// List of reliable free models to try in order
const MODELS = [
    'mistralai/mistral-7b-instruct:free',          // Reliable standard
    'meta-llama/llama-3-8b-instruct:free',         // Fast and responsive
    'google/gemini-2.0-flash-exp:free',            // Good but rate-limited
    'microsoft/phi-3-mini-128k-instruct:free',     // Backup
];

export async function getAIResponse(message: string) {
    if (!OPENROUTER_API_KEY) {
        console.error('API Key is missing in environment variables');
        return { success: false, text: 'Configuration Error: API Key missing.' };
    }

    // Debug log to confirm key is loaded (do not log full key)
    console.log(`API Key loaded: ${OPENROUTER_API_KEY.substring(0, 10)}...`);

    let lastError = '';

    for (const model of MODELS) {
        try {
            console.log(`Attempting to generate response with model: ${model}`);
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": "https://saralsewa.com", // Optional, for OpenRouter rankings
                    "X-Title": "SaralSewa Health" // Optional
                },
                body: JSON.stringify({
                    "model": model,
                    "messages": [
                        {
                            "role": "system",
                            "content": `You are a helpful and expert health advisor for SaralSewa. Your role is unauthorized to provide medical diagnosis.
                        
                        Context: The user is describing health symptoms.
                        Task:
                        1.  Analyze the symptoms provided: "${message}".
                        2.  Suggest potential causes or conditions associated with these symptoms.
                        3.  If the symptoms are vague, ask clarifying questions.
                        4.  ALWAYS provide a clear DISCLAIMER that you are an AI and this is not a medical diagnosis. Advice them to visit a doctor using the Map feature if symptoms persist or are severe.
                        5.  Keep the answer concise and empathetic.`
                        },
                        {
                            "role": "user",
                            "content": message
                        }
                    ]
                })
            });

            const data = await response.json();

            if (response.ok && data.choices?.[0]?.message?.content) {
                const text = data.choices[0].message.content;
                return { success: true, text: text };
            } else {
                console.warn(`Model ${model} failed:`, data.error?.message);
                lastError = data.error?.message || response.statusText;
                // Continue to next model
            }
        } catch (error) {
            console.error(`Network error with ${model}:`, error);
            lastError = error instanceof Error ? error.message : String(error);
        }
    }

    return { success: false, text: `AI Service Unavailable: ${lastError}` };
}
