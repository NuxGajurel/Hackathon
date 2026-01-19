'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getAppointments, updateAppointmentStatus } from '../../actions/adminActions';
import { useTranslation } from 'react-i18next';

interface Appointment {
    id: string;
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    symptoms: string;
    hospitalId: string;
    department: string | null;
    status: string;
    createdAt: Date;
}

export default function AdminDashboard() {
    const { t } = useTranslation();
    const router = useRouter();
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchAppointments = async () => {
        setIsLoading(true);
        const response = await getAppointments();
        if (response.success && response.appointments) {
            setAppointments(response.appointments);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        const isAdmin = localStorage.getItem('isAdmin');
        if (isAdmin !== 'true') {
            router.push('/admin/login');
        } else {
            fetchAppointments();
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        router.push('/admin/login');
    };

    const handleStatusUpdate = async (id: string, status: string) => {
        const response = await updateAppointmentStatus(id, status);
        if (response.success) {
            fetchAppointments();
        } else {
            alert('Failed to update status');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard - Appointments</h1>
                    <div className="flex space-x-4">
                        <Link href="/" className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors">
                            Back to Home
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-100">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Patient Name</th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date & Time</th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Contact</th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Symptoms</th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-200">
                                {isLoading ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                                            Loading appointments...
                                        </td>
                                    </tr>
                                ) : appointments.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                                            No appointments found.
                                        </td>
                                    </tr>
                                ) : (
                                    appointments.map((apt) => (
                                        <tr key={apt.id} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-slate-900">{apt.name}</div>
                                                <div className="text-sm text-slate-500">ID: {apt.id.slice(0, 8)}...</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-slate-900">{apt.date}</div>
                                                <div className="text-sm text-slate-500">{apt.time}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-slate-900">{apt.email}</div>
                                                <div className="text-sm text-slate-500">{apt.phone}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-slate-900 max-w-xs truncate" title={apt.symptoms}>{apt.symptoms}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${apt.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' :
                                                    apt.status === 'CANCELLED' ? 'bg-red-100 text-red-800' :
                                                        'bg-yellow-100 text-yellow-800'
                                                    }`}>
                                                    {apt.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                                {apt.status === 'PENDING' && (
                                                    <>
                                                        <button
                                                            onClick={() => handleStatusUpdate(apt.id, 'CONFIRMED')}
                                                            className="text-green-600 hover:text-green-900 font-semibold bg-green-50 px-3 py-1 rounded-md hover:bg-green-100 transition"
                                                        >
                                                            Confirm
                                                        </button>
                                                        <button
                                                            onClick={() => handleStatusUpdate(apt.id, 'CANCELLED')}
                                                            className="text-red-600 hover:text-red-900 font-semibold bg-red-50 px-3 py-1 rounded-md hover:bg-red-100 transition"
                                                        >
                                                            Reject
                                                        </button>
                                                    </>
                                                )}
                                                {apt.status !== 'PENDING' && (
                                                    <button onClick={() => handleStatusUpdate(apt.id, 'PENDING')} className="text-gray-400 hover:text-gray-600 text-xs">Reset</button>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
