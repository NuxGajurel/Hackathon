'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Hospital {
    id: number;
    name: string;
    location: string;
    image: string;
    lat: number;
    lng: number;
    distance?: number;
}

const HOSPITALS: Hospital[] = [
    {
        id: 1,
        name: 'B&B HOSPITAL',
        location: 'Gwarko, Lalitpur',
        image: '/images/hospital.jpg',
        lat: 27.6683,
        lng: 85.3347
    },
    {
        id: 2,
        name: 'Bir Hospital',
        location: 'Kanti Path, Kathmandu',
        image: '/images/hospital1.jpg',
        lat: 27.7052,
        lng: 85.3146
    },
    {
        id: 3,
        name: 'B.P. Koirala Lions Center For Ophthalmic Studies',
        location: 'Kathmandu',
        image: '/images/hospital2.jpg',
        lat: 27.7360,
        lng: 85.3298
    },
    {
        id: 4,
        name: 'Civil Service Hospital of Nepal',
        location: 'Minbhawan, Kathmandu',
        image: '/images/hospital3.jpg',
        lat: 27.6865,
        lng: 85.3392
    },
    {
        id: 5,
        name: 'BPKIHS',
        location: 'Dharan, Sunsari',
        image: '/images/hospital.jpg',
        lat: 26.8126,
        lng: 87.2835
    },
    {
        id: 6,
        name: 'Nobel Medical College',
        location: 'Biratnagar, Morang',
        image: '/images/hospital1.jpg',
        lat: 26.4766,
        lng: 87.2917
    },
    {
        id: 7,
        name: 'Birat Medical College',
        location: 'Biratnagar, Morang',
        image: '/images/hospital2.jpg',
        lat: 26.4851,
        lng: 87.2804
    },
    {
        id: 8,
        name: 'Itahari Community Hospital',
        location: 'Itahari, Sunsari',
        image: '/images/hospital3.jpg',
        lat: 26.6669,
        lng: 87.2797
    }
];

export default function HospitalsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [hospitals, setHospitals] = useState<Hospital[]>(HOSPITALS);
    const [isLocating, setIsLocating] = useState(false);
    const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

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

    const handleNearMe = () => {
        setIsLocating(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lng: longitude });

                    const sortedHospitals = [...HOSPITALS].map(hospital => ({
                        ...hospital,
                        distance: calculateDistance(latitude, longitude, hospital.lat, hospital.lng)
                    })).sort((a, b) => (a.distance || 0) - (b.distance || 0));

                    setHospitals(sortedHospitals);
                    setIsLocating(false);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setIsLocating(false);
                    // Don't alert on auto-fetch to avoid annoying users if denied
                }
            );
        } else {
            setIsLocating(false);
        }
    };

    useEffect(() => {
        handleNearMe();
    }, []);

    const filteredHospitals = hospitals.filter(hospital =>
        hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hospital.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-12">
            {/* Header Section */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                            Book An Appointment at Hospitals
                        </h1>

                        <div className="flex items-center gap-2 w-full md:w-auto">
                            {/* Search Bar */}
                            <div className="relative flex-1 md:w-80">
                                <input
                                    type="text"
                                    placeholder="Find Hospital"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-4 pr-10 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                                <button className="absolute right-0 top-0 h-full w-10 bg-emerald-600 rounded-r-lg flex items-center justify-center text-white hover:bg-emerald-700 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Near Me Button */}
                            <button
                                onClick={handleNearMe}
                                className={`flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${isLocating ? 'opacity-75 cursor-wait' : ''}`}
                                disabled={isLocating}
                            >
                                <svg className={`w-5 h-5 ${isLocating ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isLocating ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    )}
                                </svg>
                                <span className="hidden sm:inline">{isLocating ? 'Locating...' : 'Near Me'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredHospitals.map((hospital) => (
                        <div key={hospital.id} className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                            {/* Image Container */}
                            <div className="relative h-48 w-full overflow-hidden shrink-0">
                                <Image
                                    src={hospital.image}
                                    alt={hospital.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {hospital.distance && (
                                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                        <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        </svg>
                                        {hospital.distance.toFixed(1)} km
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 line-clamp-1" title={hospital.name}>
                                    {hospital.name}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center">
                                    <svg className="w-4 h-4 mr-1 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {hospital.location}
                                </p>

                                <div className="mt-auto">
                                    <Link
                                        href={`/hospitals/${hospital.id}`}
                                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-between"
                                    >
                                        <span>Book Appointment</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}