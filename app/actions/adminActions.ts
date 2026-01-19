'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function getAppointments() {
    try {
        const appointments = await prisma.appointment.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        return { success: true, appointments };
    } catch (error) {
        console.error('Failed to get appointments:', error);
        return { success: false, error: 'Failed to fetch appointments' };
    }
}

export async function updateAppointmentStatus(id: string, status: string) {
    try {
        await prisma.appointment.update({
            where: { id },
            data: { status },
        });
        revalidatePath('/admin/dashboard');
        return { success: true };
    } catch (error) {
        console.error('Failed to update status:', error);
        return { success: false, error: 'Failed to update status' };
    }
}
