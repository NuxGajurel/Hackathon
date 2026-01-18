'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Hospital {
    id: number;
    name: string;
    location: string;
    image: string;
}

const HOSPITALS: Hospital[] = [
    {
        id: 1,
        name: 'B&B HOSPITAL',
        location: 'Gwarko, Lalitpur',
        image: '/images/hospitals/bnb.png'
    },
    {
        id: 2,
        name: 'Bir Hospital',
        location: 'Kanti Path, Kathmandu',
        image: '/images/hospitals/bir.png'
    },
    {
        id: 3,
        name: 'B.P. Koirala Lions Center For Ophthalmic Studies',
        location: 'Kathmandu',
        image: '/images/hospitals/bp_koirala.png'
    },
    {
        id: 4,
        name: 'Civil Service Hospital of Nepal',
        location: 'Minbhawan, Kathmandu',
        image: '/images/hospitals/civil.png'
    }
];

export default function HospitalsPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredHospitals = HOSPITALS.filter(hospital =>
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

                            {/* Sort/Filter Buttons */}
                            <button className="p-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                                </svg>
                            </button>
                            <button className="p-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredHospitals.map((hospital) => (
                        <div key={hospital.id} className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-md transition-shadow group">
                            {/* Image Container */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={hospital.image}
                                    alt={hospital.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <button className="absolute bottom-4 right-4 bg-emerald-600 p-2 rounded-lg text-white hover:bg-emerald-700 transition-colors shadow-lg">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-5">
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

                                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-between">
                                    <span>Book an Appointment</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}