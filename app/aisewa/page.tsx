'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getAIResponse } from '../actions/getAIResponse';

interface Message {
    role: 'user' | 'bot';
    text: string;
}

export default function AISewaPage() {
    const { t } = useTranslation();
    const [messages, setMessages] = useState<Message[]>([
        { role: 'bot', text: 'Hello! I am your SaralSewa Health Advisor. How can I help you today?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await getAIResponse(input);

            if (response.success && response.text) {
                setMessages(prev => [...prev, { role: 'bot', text: response.text }]);
            } else {
                throw new Error(response.text || 'Failed to get response from server');
            }
        } catch (error) {
            console.error('AI Error:', error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            setMessages(prev => [...prev, { role: 'bot', text: `System Alert: ${errorMessage}` }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-[100dvh] bg-slate-50 dark:bg-slate-950 py-2 sm:py-12 px-2 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="w-full max-w-4xl mx-auto h-[90vh] sm:h-[700px] bg-white dark:bg-slate-900 rounded-2xl shadow-xl flex flex-col border border-slate-200 dark:border-slate-800 overflow-hidden">
                {/* Chat Header */}
                <div className="bg-green-600 p-4 text-white flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Health Check</h1>
                            <p className="text-sm text-green-100 flex items-center">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                AI Health Assistant
                            </p>
                        </div>
                    </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div
                                className={`max-w-[80%] rounded-2xl px-4 py-2 ${msg.role === 'user'
                                    ? 'bg-green-600 text-white rounded-br-none shadow-md'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none border border-slate-200 dark:border-slate-700'
                                    }`}
                            >
                                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl px-4 py-2 rounded-bl-none border border-slate-200 dark:border-slate-700">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                    <div className="flex space-x-3">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder={t('ai.chatPlaceholder')}
                            className="flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-slate-900 dark:text-white lg:text-base text-sm"
                        />
                        <button
                            onClick={handleSend}
                            disabled={isLoading || !input.trim()}
                            className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-slate-400 text-white rounded-xl font-semibold transition-all shadow-md active:scale-95 whitespace-nowrap"
                        >
                            {t('ai.getAdvice')}
                        </button>
                    </div>
                    <p className="mt-3 text-[10px] text-center text-slate-400 uppercase tracking-widest">
                        Always consult a human doctor for medical emergencies.
                    </p>
                </div>
            </div>
        </div>
    );
}
