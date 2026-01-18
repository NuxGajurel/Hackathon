'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';
import { useAmbulance } from '../context/AmbulanceContext';

// Fix for default marker icon
let defaultIcon: L.Icon | undefined;
if (typeof window !== 'undefined') {
    defaultIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
}

const ambulanceIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const userIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

function ChangeView({ center }: { center: [number, number] }) {
    const map = useMap();
    map.setView(center, map.getZoom());
    return null;
}

export default function AmbulanceMap() {
    const { ambulances, userLocation, selectedAmbulance } = useAmbulance();

    // Default center (Itahari) if no user location
    const center: [number, number] = userLocation || [26.6646, 87.2718];

    // If an ambulance is selected, center on it
    const mapCenter = selectedAmbulance ? selectedAmbulance.position : center;

    useEffect(() => {
        // Fix Leaflet's default icon path issues
        if (typeof window !== 'undefined') {
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            delete (L.Icon.Default.prototype as any)._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
                shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
            });
        }
    }, []);

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

    return (
        <div className="h-full w-full rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 relative z-0">
            <MapContainer
                center={mapCenter}
                zoom={14}
                scrollWheelZoom={true}
                style={{ height: '100%', width: '100%' }}
            >
                <ChangeView center={mapCenter} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {userLocation && (
                    <Marker position={userLocation} icon={userIcon}>
                        <Popup>You are here</Popup>
                    </Marker>
                )}

                {ambulances.map((amb) => {
                    const distance = userLocation
                        ? calculateDistance(userLocation[0], userLocation[1], amb.position[0], amb.position[1])
                        : null;

                    return (
                        <Marker
                            key={amb.id}
                            position={amb.position}
                            icon={ambulanceIcon}
                        >
                            <Popup>
                                <div className="p-1">
                                    <h3 className="font-bold">{amb.plateNumber}</h3>
                                    <p className="text-sm">{amb.hospital}</p>
                                    <p className="text-xs text-slate-500 mt-1">{amb.status}</p>
                                    {distance && (
                                        <p className="text-xs font-bold text-green-600 mt-1 mb-2">
                                            {distance.toFixed(1)} km away
                                        </p>
                                    )}
                                    <div className="mt-2 text-xs text-slate-500 flex flex-col gap-1">
                                        <span className="font-semibold">{amb.driverName}</span>
                                        <span>{amb.phone}</span>
                                    </div>
                                    <a
                                        href={`tel:${amb.phone}`}
                                        className="block w-full mt-2 text-center px-3 py-1.5 bg-green-600 text-white hover:bg-green-700 rounded-lg text-xs font-bold transition-colors shadow-sm"
                                    >
                                        Call Driver
                                    </a>
                                </div>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </div>
    );
}
