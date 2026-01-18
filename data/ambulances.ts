export interface Ambulance {
    id: number;
    plateNumber: string;
    driverName: string;
    phone: string;
    hospital: string;
    status: 'Available' | 'Busy' | 'En Route' | 'Returning';
    position: [number, number];
    type: 'Advance Life Support' | 'Basic Life Support';
}

export const ambulances: Ambulance[] = [
    {
        id: 1,
        plateNumber: "Ko 1 Cha 4567",
        driverName: "Ram Bahadur",
        phone: "9841234567",
        hospital: "Itahari Hospital Pvt. Ltd.",
        status: "Available",
        position: [26.6660, 87.2720], // Near Itahari Hospital
        type: "Basic Life Support"
    },
    {
        id: 2,
        plateNumber: "Ko 2 Cha 8901",
        driverName: "Shyam Kumar",
        phone: "9852034567",
        hospital: "District Hospital Inaruwa",
        status: "Busy",
        position: [26.6034, 87.1618], // Moving near Inaruwa
        type: "Advance Life Support"
    },
    {
        id: 3,
        plateNumber: "Ko 1 Cha 2233",
        driverName: "Hari Krishna",
        phone: "9801234567",
        hospital: "Nobel Medical College",
        status: "Available",
        position: [26.6500, 87.2800], // Near Highway
        type: "Advance Life Support"
    },
    {
        id: 4,
        plateNumber: "Me 1 Cha 5566",
        driverName: "Sita Ram",
        phone: "9861234567",
        hospital: "Apex Hospital",
        status: "En Route",
        position: [26.6600, 87.2760],
        type: "Basic Life Support"
    },
    {
        id: 5,
        plateNumber: "Ko 3 Cha 1122",
        driverName: "Bishnu Prasad",
        phone: "9812345678",
        hospital: "Saptakoshi Hospital",
        status: "Available",
        position: [26.6720, 87.2650],
        type: "Basic Life Support"
    }
];

export const getStatusColor = (status: string) => {
    switch (status) {
        case 'Available': return 'bg-emerald-500';
        case 'Busy': return 'bg-red-500';
        case 'En Route': return 'bg-blue-500';
        case 'Returning': return 'bg-orange-500';
        default: return 'bg-slate-500';
    }
};
