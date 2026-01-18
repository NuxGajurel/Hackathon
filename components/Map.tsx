'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';

// Fix for default marker icon not showing
let icon: L.Icon | undefined;
if (typeof window !== 'undefined') {
    icon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
}

// Healthcare locations data for Itahari, Sunsari
const locations = [
    {
        id: 1,
        name: "District Hospital Inaruwa",
        position: [26.6034, 87.1518] as [number, number],
        type: "Hospital",
        address: "Inaruwa, Sunsari",
        phone: "025-560144"
    },
    {
        id: 2,
        name: "Itahari Hospital Pvt. Ltd.",
        position: [26.6660, 87.2720] as [number, number],
        type: "Hospital",
        address: "Itahari-4, Sunsari",
        phone: "025-580123"
    },
    {
        id: 3,
        name: "Nobel Medical College Teaching Hospital",
        position: [26.6570, 87.2900] as [number, number],
        type: "Hospital",
        address: "Kanchanbari, Biratnagar (Near Itahari)",
        phone: "021-460736"
    },
    {
        id: 4,
        name: "Apex Hospital",
        position: [26.6620, 87.2750] as [number, number],
        type: "Hospital",
        address: "Itahari Chowk, Sunsari",
        phone: "025-586677"
    },
    {
        id: 5,
        name: "Saptakoshi Hospital",
        position: [26.6680, 87.2680] as [number, number],
        type: "Hospital",
        address: "Itahari-8, Sunsari",
        phone: "025-581010"
    },
    {
        id: 6,
        name: "Purbanchal Polyclinic",
        position: [26.6640, 87.2700] as [number, number],
        type: "Doctor Clinic",
        address: "Itahari, Sunsari",
        phone: "025-582233"
    },
    {
        id: 7,
        name: "Community Health Service Center",
        position: [26.6500, 87.2600] as [number, number],
        type: "Private Health Center",
        address: "Itahari-1, Sunsari",
        phone: "025-583344"
    }
];

const facilityTypes = ["All", "Hospital", "Doctor Clinic", "Private Health Center"];

export default function Map() {
    // Center map on Itahari
    const defaultCenter: [number, number] = [26.6646, 87.2718];
    const [center, setCenter] = useState<[number, number]>(defaultCenter);
    const [selectedType, setSelectedType] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
    const [loadingLocation, setLoadingLocation] = useState(false);

    // Fix for default marker icon not showing
    useEffect(() => {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
            iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        });

        // Auto-get location on mount
        handleGetLocation();
    }, []);

    // Custom icon for user location
    const userIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const hospitalIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const clinicIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const healthCenterIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const getIconForType = (type: string) => {
        switch (type) {
            case "Hospital": return hospitalIcon;
            case "Doctor Clinic": return clinicIcon;
            case "Private Health Center": return healthCenterIcon;
            default: return icon;
        }
    };

    // Haversine formula to calculate distance in km
    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distance in km
        return d;
    };

    const deg2rad = (deg: number) => {
        return deg * (Math.PI / 180);
    };

    const handleGetLocation = () => {
        setLoadingLocation(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const newLocation: [number, number] = [latitude, longitude];
                    setUserLocation(newLocation);
                    setCenter(newLocation);
                    setLoadingLocation(false);
                },
                (error) => {
                    console.error("Error getting location: ", error);
                    alert("Error getting your location. Please ensure location services are enabled.");
                    setLoadingLocation(false);
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
            setLoadingLocation(false);
        }
    };

    const getProcessedLocations = () => {
        let processed = [...locations];

        // 1. Filter by Type
        if (selectedType !== "All") {
            processed = processed.filter(loc => loc.type === selectedType);
        }

        // 2. Filter by Search Query (Name or Address)
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            processed = processed.filter(loc =>
                loc.name.toLowerCase().includes(query) ||
                loc.address.toLowerCase().includes(query)
            );
        }

        // 3. Add Distance and Sort if User Location exists
        if (userLocation) {
            processed = processed.map(loc => ({
                ...loc,
                distance: calculateDistance(userLocation[0], userLocation[1], loc.position[0], loc.position[1])
            })).sort((a, b) => (a.distance || 0) - (b.distance || 0));
        }

        return processed;
    };

    const filteredLocations = getProcessedLocations();

    // Re-center map component when center changes
    function ChangeView({ center }: { center: [number, number] }) {
        const map = useMap();
        map.setView(center);
        return null;
    }

    return (
        <div className="space-y-4">
            {/* Filter UI */}
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-wrap gap-3 items-center">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 hidden sm:inline">Select Facility Type:</span>
                <div className="flex flex-wrap gap-2">
                    {facilityTypes.map((type) => (
                        <button
                            key={type}
                            onClick={() => setSelectedType(type)}
                            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${selectedType === type
                                ? 'bg-green-600 text-white shadow-md'
                                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            <div className="h-[600px] w-full rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 relative z-0">
                <MapContainer
                    center={center}
                    zoom={13}
                    scrollWheelZoom={true}
                    style={{ height: '100%', width: '100%' }}
                >
                    <ChangeView center={center} />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* User Location Marker */}
                    {userLocation && (
                        <Marker position={userLocation} icon={userIcon}>
                            <Popup>
                                <div className="p-2">
                                    <h3 className="font-bold text-slate-800">Your Location</h3>
                                </div>
                            </Popup>
                        </Marker>
                    )}

                    {/* Hospital Markers */}
                    {filteredLocations.map((location) => (
                        <Marker
                            key={location.id}
                            position={location.position}
                            icon={getIconForType(location.type)}
                        >
                            <Popup>
                                <div className="p-2 min-w-[200px]">
                                    <h3 className="font-bold text-lg text-slate-800">{location.name}</h3>
                                    <div className="flex justify-between items-center mt-1">
                                        <p className="text-sm font-semibold text-green-600">{location.type}</p>
                                        {(location as any).distance && (
                                            <span className="text-xs font-bold bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                                                {((location as any).distance).toFixed(1)} km away
                                            </span>
                                        )}
                                    </div>
                                    <div className="mt-2 text-sm text-slate-600 space-y-1">
                                        <p className="flex items-start gap-2">
                                            <span className="shrink-0">📍</span>
                                            <span>{location.address}</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span className="shrink-0">📞</span>
                                            <span>{location.phone}</span>
                                        </p>
                                    </div>
                                    <button
                                        className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white text-sm py-1.5 rounded-md transition-colors flex items-center justify-center gap-2"
                                        onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${location.position[0]},${location.position[1]}`, '_blank')}
                                    >
                                        <span>🗺️</span> Get Directions
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
