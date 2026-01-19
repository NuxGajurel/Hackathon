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
        {
            role: 'bot',
            text: t('ai.initialMessage')
        }
    ]);

    // Update initial message when language changes
    useEffect(() => {
        setMessages(prev => {
            if (prev.length > 0 && prev[0].role === 'bot') {
                const newMessages = [...prev];
                newMessages[0] = { ...newMessages[0], text: t('ai.initialMessage') };
                return newMessages;
            }
            return prev;
        });
    }, [t]);

    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (text: string = input) => {
        if (!text.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', text: text };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await getAIResponse(text);

            if (response.success && response.text) {
                setMessages(prev => [...prev, { role: 'bot', text: response.text }]);
            } else {
                throw new Error(response.text || 'Failed to get response');
            }
        } catch (error) {
            console.error('AI Error:', error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            setMessages(prev => [...prev, { role: 'bot', text: `⚠️ ${t('ai.systemAlert')}: ${errorMessage}. ${t('ai.tryAgain')}.` }]);
        } finally {
            setIsLoading(false);
        }
    };

    const suggestions = [
        t('ai.suggestion1'),
        t('ai.suggestion2'),
        t('ai.suggestion3'),
        t('ai.suggestion4')
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col pt-20 pb-6 px-4 sm:px-6 lg:px-8">

            {/* Main Container */}
            <div className="flex-1 max-w-6xl mx-auto w-full bg-white dark:bg-slate-900 rounded-3xl shadow-2xl flex border border-slate-200 dark:border-slate-800 overflow-hidden relative">

                {/* Sidebar (Desktop) */}
                <div className="hidden md:flex w-72 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-col p-6">
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-green-600 p-2 rounded-xl text-white">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h2 className="font-bold text-lg text-slate-800 dark:text-white">{t('ai.disclaimerTitle')}</h2>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            <span dangerouslySetInnerHTML={{
                                __html: t('ai.disclaimerText')
                                    .replace('not a substitute', '<strong>not a substitute</strong>')
                                    .replace('व्यावसायिक चिकित्सा सल्लाह', '<strong>व्यावसायिक चिकित्सा सल्लाह</strong>')
                            }} />
                        </p>
                    </div>

                    <div className="mt-auto space-y-3">
                        <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-900/50">
                            <h3 className="text-red-700 dark:text-red-400 font-semibold text-sm mb-1 flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                {t('ai.emergencyTitle')}
                            </h3>
                            <p className="text-xs text-red-600 dark:text-red-300 mb-3">
                                {t('ai.emergencyText')}
                            </p>
                            <a href="tel:102" className="block w-full text-center bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2 rounded-lg transition-colors">
                                {t('ai.callAmbulance')}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col relative bg-[url('/grid.svg')] bg-center">

                    {/* Chat Header (Mobile Only / Integrated) */}
                    <div className="absolute top-0 left-0 right-0 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 z-10">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-full flex items-center justify-center text-white shadow-lg">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
                            </div>
                            <div>
                                <h1 className="font-bold text-slate-800 dark:text-white">{t('ai.assistantTitle')}</h1>
                                <p className="text-xs text-green-600 font-medium">{t('ai.assistantSubtitle')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Messages List */}
                    <div className="flex-1 overflow-y-auto pt-20 pb-24 px-4 sm:px-6 space-y-6">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`flex max-w-[85%] md:max-w-[75%] gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>

                                    {/* Avatar */}
                                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1 ${msg.role === 'user'
                                        ? 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                                        : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                                        }`}>
                                        {msg.role === 'user' ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                        )}
                                    </div>

                                    {/* Bubble */}
                                    <div className={`p-4 rounded-2xl text-sm sm:text-base leading-relaxed shadow-sm ${msg.role === 'user'
                                        ? 'bg-green-600 text-white rounded-tr-none'
                                        : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-tl-none'
                                        }`}>
                                        <p className="whitespace-pre-wrap font-sans">{msg.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex justify-start w-full">
                                <div className="flex max-w-[85%] gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                    </div>
                                    <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4 rounded-2xl rounded-tl-none flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-100"></div>
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-200"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur border-t border-slate-200 dark:border-slate-800 p-4">

                        {/* Suggestions (Horizontal Scroll) */}
                        {messages.length < 3 && (
                            <div className="flex gap-2 overflow-x-auto pb-3 mb-2 no-scrollbar">
                                {suggestions.map((sug, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSend(sug)}
                                        className="whitespace-nowrap px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-green-50 dark:hover:bg-green-900/20 text-slate-600 dark:text-slate-300 text-xs rounded-full border border-slate-200 dark:border-slate-700 transition-colors flex-shrink-0"
                                    >
                                        {sug}
                                    </button>
                                ))}
                            </div>
                        )}

                        <div className="flex gap-3 max-w-4xl mx-auto">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder={t('ai.chatPlaceholder', 'Describe your symptoms...')}
                                className="flex-1 bg-slate-100 dark:bg-slate-800 border-0 rounded-2xl px-5 py-3 focus:ring-2 focus:ring-green-500 dark:text-white transition-all outline-none"
                            />
                            <button
                                onClick={() => handleSend()}
                                disabled={isLoading || !input.trim()}
                                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md active:scale-95 flex items-center justify-center"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

// Add this to your globals.css or component styles if needed for smooth scrollbar hiding
// .no-scrollbar::-webkit-scrollbar { display: none; }
