const https = require('https');

// You can run this script with: node scripts/verify_models.js
// Make sure OPENROUTER_API_KEY is set in your environment or .env file
// If running locally without .env support in node, you might need to manually paste it or use dotenv
require('dotenv').config({ path: '.env.local' });

const API_KEY = process.env.OPENROUTER_API_KEY;

if (!API_KEY) {
    console.error("Error: OPENROUTER_API_KEY not found in .env.local");
    process.exit(1);
}

const MODELS = [
    'google/gemini-2.0-flash-exp:free',
];

async function checkModel(model) {
    return new Promise((resolve) => {
        const data = JSON.stringify({
            "model": model,
            "messages": [
                { "role": "user", "content": "Hi" }
            ]
        });

        const options = {
            hostname: 'openrouter.ai',
            path: '/api/v1/chat/completions',
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };

        const req = https.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                if (res.statusCode === 200) {
                    console.log(`[PASS] ${model}`);
                    resolve(true);
                } else {
                    console.error(`[FAIL] ${model} - Status: ${res.statusCode} - ${body.substring(0, 100)}...`);
                    resolve(false);
                }
            });
        });

        req.on('error', (error) => {
            console.error(`[ERROR] ${model} - ${error.message}`);
            resolve(false);
        });

        req.write(data);
        req.end();
    });
}

async function run() {
    console.log("Verifying models...");
    for (const model of MODELS) {
        await checkModel(model);
    }
}

run();
