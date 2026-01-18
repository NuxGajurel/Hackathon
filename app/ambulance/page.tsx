'use client';

import dynamic from 'next/dynamic';
import { AmbulanceProvider } from '../../context/AmbulanceContext';
import AmbulanceList from '../../components/AmbulanceList';

// Dynamically import map to avoid SSR issues
const AmbulanceMap = dynamic(() => import('../../components/AmbulanceMap'), {
    ssr: false,
    loading: () => <div className="h-full w-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 animate-pulse text-slate-400">Loading Map...</div>
});

export default function AmbulancePage() {
    return (
        <AmbulanceProvider>
            <div className="h-[calc(100vh-64px)] bg-slate-50 dark:bg-slate-950 flex flex-col md:flex-row overflow-hidden">

                {/* Sidebar (List) */}
                <div className="w-full md:w-96 flex-shrink-0 h-[40%] md:h-full p-4 z-10">
                    <AmbulanceList />
                </div>

                {/* Map Area */}
                <div className="flex-1 h-[60%] md:h-full p-4 pl-0 relative">
                    <AmbulanceMap />

                    {/* Overlay Info */}
                    <div className="absolute top-8 right-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 z-[1000] max-w-xs hidden md:block">
                        <h3 className="font-bold text-slate-800 dark:text-white mb-1">Live Tracking Active</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Real-time location updates for Itahari area. Priority routing enabled for emergency vehicles.</p>
                        <div className="flex items-center gap-2 mt-3">
                            <span className="flex h-3 w-3 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">System Online</span>
                        </div>
                    </div>
                </div>

            </div>
        </AmbulanceProvider>
    );
}
