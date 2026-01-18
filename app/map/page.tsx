'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../../components/Map'), {
    ssr: false,
    loading: () => (
        <div className="h-[600px] w-full rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse flex items-center justify-center">
            <span className="text-slate-400">Loading Map...</span>
        </div>
    )
});

export default function MapPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Accessible Healthcare Locations
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Find hospitals, clinics, and emergency centers near you. Click on any marker to see details and get directions.
                    </p>
                </div>

                <Map />
            </div>
        </div>
    );
}
