'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Ambulance, ambulances as mockAmbulances } from '../data/ambulances';

interface AmbulanceContextType {
    ambulances: Ambulance[];
    userLocation: [number, number] | null;
    selectedAmbulance: Ambulance | null;
    setSelectedAmbulance: (ambulance: Ambulance | null) => void;
    loadingLocation: boolean;
    refreshLocation: () => void;
    filterStatus: string;
    setFilterStatus: (status: string) => void;
}

const AmbulanceContext = createContext<AmbulanceContextType | undefined>(undefined);

export function AmbulanceProvider({ children }: { children: React.ReactNode }) {
    const [ambulances, setAmbulances] = useState<Ambulance[]>(mockAmbulances);
    const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
    const [selectedAmbulance, setSelectedAmbulance] = useState<Ambulance | null>(null);
    const [loadingLocation, setLoadingLocation] = useState(false);
    const [filterStatus, setFilterStatus] = useState('All');

    // Simulate real-time movement
    useEffect(() => {
        const interval = setInterval(() => {
            setAmbulances(prev => prev.map(amb => {
                if (amb.status === 'Available') return amb; // Don't move if available (parked)

                // Add tiny random movement jitter for simulation
                const latJitter = (Math.random() - 0.5) * 0.001;
                const lngJitter = (Math.random() - 0.5) * 0.001;

                return {
                    ...amb,
                    position: [amb.position[0] + latJitter, amb.position[1] + lngJitter]
                };
            }));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const refreshLocation = () => {
        setLoadingLocation(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation([position.coords.latitude, position.coords.longitude]);
                    setLoadingLocation(false);
                },
                (error) => {
                    console.error("Location error:", error);
                    // Fallback to Itahari center if error
                    setUserLocation([26.6646, 87.2718]);
                    setLoadingLocation(false);
                }
            );
        } else {
            setUserLocation([26.6646, 87.2718]); // Fallback
            setLoadingLocation(false);
        }
    };

    useEffect(() => {
        refreshLocation();
    }, []);

    const filteredAmbulances = filterStatus === 'All'
        ? ambulances
        : ambulances.filter(a => a.status === filterStatus);

    return (
        <AmbulanceContext.Provider value={{
            ambulances: filteredAmbulances,
            userLocation,
            selectedAmbulance,
            setSelectedAmbulance,
            loadingLocation,
            refreshLocation,
            filterStatus,
            setFilterStatus
        }}>
            {children}
        </AmbulanceContext.Provider>
    );
}

export function useAmbulance() {
    const context = useContext(AmbulanceContext);
    if (context === undefined) {
        throw new Error('useAmbulance must be used within an AmbulanceProvider');
    }
    return context;
}
