'use client';

import { useAmbulance } from '../context/AmbulanceContext';
import { getStatusColor } from '../data/ambulances';

export default function AmbulanceList() {
    const { ambulances, selectedAmbulance, setSelectedAmbulance, filterStatus, setFilterStatus, userLocation } = useAmbulance();

    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
        const R = 6371; // km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

    // Calculate distances and sort
    const ambulancesWithDistance = ambulances.map(amb => {
        const dist = userLocation
            ? calculateDistance(userLocation[0], userLocation[1], amb.position[0], amb.position[1])
            : 0;
        return { ...amb, distance: dist };
    }).sort((a, b) => a.distance - b.distance);

    return (
        <div className="flex flex-col h-full bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800">
                <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-3">Nearby Ambulances</h2>
                <div className="flex gap-2 overflow-x-auto pb-1">
                    {['All', 'Available', 'Busy', 'En Route'].map(status => (
                        <button
                            key={status}
                            onClick={() => setFilterStatus(status)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${filterStatus === status
                                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400'
                                }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {ambulancesWithDistance.length === 0 ? (
                    <div className="text-center py-8 text-slate-500">
                        No ambulances found nearby.
                    </div>
                ) : (
                    ambulancesWithDistance.map(amb => (
                        <div
                            key={amb.id}
                            onClick={() => setSelectedAmbulance(amb)}
                            className={`p-4 rounded-xl border transition-all cursor-pointer hover:shadow-md ${selectedAmbulance?.id === amb.id
                                ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/10 ring-1 ring-emerald-500'
                                : 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-slate-300'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">{amb.plateNumber}</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{amb.hospital}</p>
                                </div>
                                <div className="text-right">
                                    <span className={`block w-2.5 h-2.5 rounded-full ${getStatusColor(amb.status)} ml-auto mb-1`}></span>
                                    {userLocation && (
                                        <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                                            {amb.distance.toFixed(1)} km
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                                <div className="text-xs text-slate-500">
                                    <span className="block font-medium text-slate-700 dark:text-slate-300">{amb.driverName}</span>
                                    <span>{amb.phone}</span>
                                </div>
                                <a
                                    href={`tel:${amb.phone}`}
                                    onClick={(e) => e.stopPropagation()}
                                    className="px-3 py-1.5 bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 rounded-lg text-xs font-bold transition-colors shadow-sm"
                                >
                                    Call Driver
                                </a>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold shadow-lg shadow-red-500/30 transition-all flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    Emergency SOS
                </button>
            </div>
        </div>
    );
}
