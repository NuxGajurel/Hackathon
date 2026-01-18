'use server';

const GEN_AI_KEY = 'AIzaSyAn-3L9HXW6hRkzghyHXNapGc3lUBnyCOs';

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
                        contents: [{ parts: [{ text: `You are a helpful and expert health advisor for SaralSewa. Answer this health query concisely: ${message}` }] }],
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
