'use server';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

// List of reliable free models to try in order
const MODELS = [
    'google/gemini-2.0-flash-exp:free',            // Newest & Fastest
    'mistralai/mistral-7b-instruct:free',          // Fallback
    'meta-llama/llama-3-8b-instruct:free',         // Fallback
];

export async function getAIResponse(message: string) {
    if (!OPENROUTER_API_KEY) {
        console.error('API Key is missing in environment variables');
        return { success: false, text: 'Configuration Error: API Key missing. Please check .env.local' };
    }

    let errorLog: string[] = [];

    for (const model of MODELS) {
        try {
            console.log(`[AI] Attempting model: ${model}`);

            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": "https://saralsewa.com",
                    "X-Title": "SaralSewa Health"
                },
                body: JSON.stringify({
                    "model": model,
                    "messages": [
                        {
                            "role": "system",
                            "content": `You are a helpful and expert health advisor for SaralSewa. 
                            
                            IMPORTANT GUIDELINES:
                            1. You are NOT a doctor. You cannot provide medical diagnoses.
                            2. Analyze the user's symptoms: "${message}".
                            3. Suggest potential causes (differential diagnosis) but use phrases like "might be", "could indicate".
                            4. If symptoms sound severe (chest pain, difficulty breathing, severe bleeding), IMMEDIATELY advise calling emergency services or visiting a hospital.
                            5. Keep response concise, formatted with bullet points if valid.
                            6. End with a clear disclaimer.`
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
                return { success: true, text: data.choices[0].message.content };
            } else {
                const errMsg = data.error?.message || response.statusText;
                console.warn(`[AI] Model ${model} failed: ${errMsg}`);
                errorLog.push(`${model}: ${errMsg}`);
            }
        } catch (error) {
            const errMsg = error instanceof Error ? error.message : String(error);
            console.error(`[AI] Network error with ${model}:`, error);
            errorLog.push(`${model}: ${errMsg}`);
        }
    }

    return {
        success: false,
        text: `All AI services are currently unavailable. Errors: ${errorLog.join(' | ')}`
    };
}
