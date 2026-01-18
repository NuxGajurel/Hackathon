'use client';

import Link from 'next/link';
import { use } from 'react';

// Mock data for departments based on the screenshot
const DEPARTMENTS = [
    {
        id: 'neurology',
        name: 'NEUROLOGY',
        nepaliName: '(स्नायुशास्त्र)',
        doctorCount: 1,
        icon: (
            <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
        ),
        color: 'bg-blue-50 text-blue-600'
    },
    {
        id: 'orthopedic',
        name: 'ORTHOPEDIC',
        nepaliName: '(हाडजोर्नी सेवा)',
        doctorCount: 22,
        icon: (
            <svg className="w-12 h-12 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
            </svg>
        ),
        color: 'bg-slate-100 text-slate-700'
    },
    {
        id: 'general-surgery',
        name: 'GENERAL SURGERY',
        nepaliName: '(जनरल सर्जरी)',
        doctorCount: 8,
        icon: (
            <svg className="w-12 h-12 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        ),
        color: 'bg-rose-50 text-rose-600'
    },
    {
        id: 'urology',
        name: 'UROLOGY',
        nepaliName: '(युरोलोजी)',
        doctorCount: 5,
        icon: (
            <svg className="w-12 h-12 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        ),
        color: 'bg-amber-50 text-amber-800'
    },
    {
        id: 'medicine',
        name: 'MEDICINE',
        nepaliName: '(अन्तरिक चिकित्सा)',
        doctorCount: 8,
        icon: (
            <svg className="w-12 h-12 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
        ),
        color: 'bg-teal-50 text-teal-600'
    },
    {
        id: 'pediatric-surgery',
        name: 'PAEDIATRIC SURGERY',
        nepaliName: '(बाल शल्यक्रिया)',
        doctorCount: 1,
        icon: (
            <svg className="w-12 h-12 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: 'bg-pink-50 text-pink-600'
    },
    {
        id: 'neurosurgery',
        name: 'NEUROSURGERY',
        nepaliName: '(न्यूरो सर्जरी)',
        doctorCount: 2,
        icon: (
            <svg className="w-12 h-12 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        color: 'bg-indigo-50 text-indigo-600'
    },
    {
        id: 'gynaecology',
        name: 'GYNAECOLOGY / OBSTETRICS',
        nepaliName: '(स्त्री रोग सेवा)',
        doctorCount: 5,
        icon: (
            <svg className="w-12 h-12 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" />
            </svg>
        ),
        color: 'bg-pink-50 text-pink-400'
    }
];

export default function HospitalDepartmentsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 pb-12">
            {/* Header */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/hospitals"
                            className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <svg className="w-6 h-6 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </Link>
                        <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                            Select Department
                        </h1>
                    </div>
                </div>
            </div>

            {/* Grid Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {DEPARTMENTS.map((dept) => (
                        <div key={dept.id} className="flex flex-col items-center bg-white dark:bg-slate-900 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow border border-slate-100 dark:border-slate-800">
                            {/* Icon Circle */}
                            <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 ${dept.color.split(' ')[0]}`}>
                                {dept.icon}
                            </div>

                            {/* Name */}
                            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">
                                {dept.name}
                            </h3>
                            <span className="text-slate-500 dark:text-slate-400 font-medium mb-3">
                                {dept.nepaliName}
                            </span>

                            {/* Doctor Count */}
                            <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-6">
                                {dept.doctorCount} Doctors
                            </p>

                            {/* Button */}
                            <Link
                                href={`/hospitals/${id}/book?dept=${dept.id}`}
                                className="border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium py-2 px-6 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors w-full"
                            >
                                Consult Now
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
