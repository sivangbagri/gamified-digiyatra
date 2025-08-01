import React from 'react'
import PhoneScreenWrapper from '../components/PhoneWrapper'
import {
    Bell, Plus, Car, Building2, Home, FileText, Menu, X
} from 'lucide-react';
import { Link } from "react-router-dom"
import Footer from '../components/Footer';
type Trip = {
    airlineLogo: string;
    airlineName: string;
    from: string;
    to: string;
    pnr: string;
    date: string;
};
const trips: Trip[] = [
    {
        airlineLogo: "https://upload.wikimedia.org/wikipedia/en/9/9b/Air_India_Logo.svg", // Replace with actual image if needed
        airlineName: "Air India",
        from: "BLR",
        to: "DEL",
        pnr: "F27JUH",
        date: "05 Jul 2025",
    },
    {
        airlineLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/IndiGo_Logo.svg", // Replace with actual image if needed
        airlineName: "IndiGo",
        from: "VNS",
        to: "BLR",
        pnr: "K8CL4X",
        date: "10 May 2025",
    },
];
function PreviousTrips() {
    return (
        <PhoneScreenWrapper>
            <div className="bg-white min-h-screen text-black font-sans">
                <div className="flex items-center justify-between p-4 border-b text-sm font-semibold">
                    <button>{"<"}</button>
                    <span>Previous Trips</span>
                    <button className="text-blue-900">Select</button>
                </div>

                <div className="p-4 text-sm text-gray-700">
                    Boarding Passes Older than 2 or more days will appear here.
                </div>

                <div className="space-y-4 p-4">
                    {trips.map((trip, idx) => (
                        <div
                            key={idx}
                            className="border rounded-lg flex items-center justify-between px-4 py-3"
                        >
                            <div className="flex items-center space-x-4">
                                <img src={trip.airlineLogo} alt={trip.airlineName} className="h-10 w-10 object-contain" />
                                <div>
                                    <div className="flex items-center space-x-2 font-semibold text-lg">
                                        <span>{trip.from}</span>
                                        <span>✈️</span>
                                        <span>{trip.to}</span>
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">
                                        PNR <span className="font-bold text-black">{trip.pnr}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-500">{trip.date}</div>
                        </div>
                    ))}
                </div>


            </div>

            <Footer />

        </PhoneScreenWrapper>
    )
}

export default PreviousTrips
