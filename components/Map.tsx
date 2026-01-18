'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';

// Fix for default marker icon not showing
const icon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Healthcare locations data
const locations = [
    {
        id: 1,
        name: "Bir Hospital",
        position: [27.7052, 85.3129] as [number, number],
        type: "Hospital",
        address: "Mahabouddha, Kathmandu",
        phone: "01-4221119"
    },
    {
        id: 2,
        name: "Patan Hospital",
        position: [27.6683, 85.3206] as [number, number],
        type: "Hospital",
        address: "Lagankhel, Lalitpur",
        phone: "01-5522295"
    },
    {
        id: 3,
        name: "Tribhuvan University Teaching Hospital",
        position: [27.7360, 85.3303] as [number, number],
        type: "Hospital",
        address: "Maharajgunj, Kathmandu",
        phone: "01-4412303"
    },
    {
        id: 4,
        name: "Civil Service Hospital",
        position: [27.6865, 85.3391] as [number, number],
        type: "Hospital",
        address: "Minbhawan, Kathmandu",
        phone: "01-4107000"
    },
    {
        id: 5,
        name: "Grande International Hospital",
        position: [27.7540, 85.3210] as [number, number],
        type: "Hospital",
        address: "Dhapasi, Kathmandu",
        phone: "01-5159266"
    },
    {
        id: 6,
        name: "Nepal Medical College",
        position: [27.7033, 85.3781] as [number, number],
        type: "Hospital",
        address: "Jorpati, Kathmandu",
        phone: "01-4911008"
    },
    {
        id: 7,
        name: "Kathmandu Clinic",
        position: [27.7120, 85.3200] as [number, number],
        type: "Doctor Clinic",
        address: "Lazimpat, Kathmandu",
        phone: "01-4422333"
    },
    {
        id: 8,
        name: "Healthy Life Clinic",
        position: [27.6920, 85.3150] as [number, number],
        type: "Doctor Clinic",
        address: "Tripureshwor, Kathmandu",
        phone: "01-5533444"
    },
    {
        id: 9,
        name: "City Care Center",
        position: [27.7200, 85.3400] as [number, number],
        type: "Private Health Center",
        address: "Chabahil, Kathmandu",
        phone: "01-4477888"
    },
    {
        id: 10,
        name: "Community Health Post",
        position: [27.6800, 85.3000] as [number, number],
        type: "Private Health Center",
        address: "Kalimati, Kathmandu",
        phone: "01-4277999"
    }
];

const facilityTypes = ["All", "Hospital", "Doctor Clinic", "Private Health Center"];

export default function Map() {
    // Center map on Kathmandu
    const center: [number, number] = [27.7172, 85.3240];
    const [selectedType, setSelectedType] = useState("All");

    useEffect(() => {
        // Fix Leaflet's default icon path issues
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
            iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        });
    }, []);

    const filteredLocations = selectedType === "All"
        ? locations
        : locations.filter(loc => loc.type === selectedType);

    return (
        <div className="space-y-4">
            {/* Filter UI */}
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-wrap gap-3 items-center">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Select Facility Type:</span>
                <div className="flex flex-wrap gap-2">
                    {facilityTypes.map((type) => (
                        <button
                            key={type}
                            onClick={() => setSelectedType(type)}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${selectedType === type
                                    ? 'bg-red-600 text-white shadow-md'
                                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            <div className="h-[600px] w-full rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                <MapContainer
                    center={center}
                    zoom={13}
                    scrollWheelZoom={true}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {filteredLocations.map((location) => (
                        <Marker
                            key={location.id}
                            position={location.position}
                            icon={icon}
                        >
                            <Popup>
                                <div className="p-2">
                                    <h3 className="font-bold text-lg text-slate-800">{location.name}</h3>
                                    <p className="text-sm font-semibold text-red-600 mt-1">{location.type}</p>
                                    <div className="mt-2 text-sm text-slate-600">
                                        <p className="flex items-center gap-2">
                                            <span className="font-medium">📍</span> {location.address}
                                        </p>
                                        <p className="flex items-center gap-2 mt-1">
                                            <span className="font-medium">📞</span> {location.phone}
                                        </p>
                                    </div>
                                    <button
                                        className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-1.5 rounded-md transition-colors"
                                        onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${location.position[0]},${location.position[1]}`, '_blank')}
                                    >
                                        Get Directions
                                    </button>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
}
