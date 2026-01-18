'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface BookingData {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    symptoms: string;
    hospitalId: string;
    department?: string;
}

export async function bookAppointment(data: BookingData) {
    try {
        const appointment = await prisma.appointment.create({
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                date: data.date,
                time: data.time,
                symptoms: data.symptoms,
                hospitalId: data.hospitalId,
                department: data.department || '',
            },
        });

        return { success: true, appointment };
    } catch (error) {
        console.error('Failed to book appointment:', error);
        return { success: false, error: 'Failed to book appointment' };
    }
}
