import { useEffect, useState } from 'react';
import PhoneScreenWrapper from '../components/PhoneWrapper';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

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
        airlineLogo: "https://images.seeklogo.com/logo-png/0/2/air-india-logo-png_seeklogo-5113.png",
        airlineName: "Air India",
        from: "BLR",
        to: "DEL",
        pnr: "F26XUH",
        date: "25 Jul 2025",
    },
    // {
    //     airlineLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/IndiGo_Logo.svg",
    //     airlineName: "IndiGo",
    //     from: "VNS",
    //     to: "BLR",
    //     pnr: "K8CL4X",
    //     date: "10 May 2025",
    // },
];

const MapView = () => {
    return (
        <div className="flex flex-col items-center justify-between min-h-175 pt-10 pb-20 bg-[#f5f5f5] text-gray-800">
            <div className="flex-grow flex flex-col justify-center items-center">
                <img
                    src="/world-map.png"
                    alt="World Map"
                    className="w-full max-w-100 rounded-md"
                />
                <div className="flex space-x-6  text-gray-600 mt-4">
                    <div className="text-center">
                        <div className="text-orange-500 font-bold text-2xl">20%</div>
                        <div>of the world</div>
                    </div>
                    <div className="text-center">
                        <div className="text-orange-500 font-bold text-2xl">7</div>
                        <div>countries</div>
                    </div>
                    <div className="text-center">
                        <div className="text-orange-500 font-bold text-2xl">32</div>
                        <div>cities</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-around w-full border-t py-2">
                <div className="flex flex-col items-center text-sm">
                    <img src="https://static.vecteezy.com/system/resources/previews/042/148/632/non_2x/instagram-logo-instagram-social-media-icon-free-png.png" className='size-8' />
                    <span>Instagram</span>
                </div>
                <div className="flex flex-col items-center text-sm">
                    <div className="text-xl">⋯</div>
                    <span>More</span>
                </div>
            </div>
        </div>
    );
};

function PreviousTrips() {
    const [activeTab, setActiveTab] = useState<'trips' | 'map'>('trips');
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem('memories');
        if (stored) {
            setImages(JSON.parse(stored));
        }
    }, []);

    return (
        <PhoneScreenWrapper>
            <div className="bg-white min-h-screen text-black font-sans">
                {/* Tabs */}
                <div className="flex border-b">
                    <button
                        onClick={() => setActiveTab('trips')}
                        className={`cursor-pointer flex-1 text-center py-3 font-medium ${activeTab === 'trips' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'
                            }`}
                    >
                        Previous Trips
                    </button>
                    <button
                        onClick={() => setActiveTab('map')}
                        className={`cursor-pointer flex-1 text-center py-3 font-medium ${activeTab === 'map' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'
                            }`}
                    >
                        My Map
                    </button>
                </div>

                {/* Tab Content */}
                {activeTab === 'trips' ? (
                    <>
                        <div className="p-4 text-sm text-gray-700">
                            Boarding Passes Older than 2 or more days will appear here.
                        </div>

                        <div className="space-y-4 p-4">
                            {trips.map((trip, idx) => (
                                <Link key={idx} to="/boarding">
                                    <div className="relative overflow-hidden border border-gray-200 rounded-2xl px-4 py-5 min-h-40 mb-5 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">

                                        {/* Background Image Grid */}
                                        <div className="absolute inset-0 z-0 grid grid-cols-3 grid-rows-2 opacity-50 pointer-events-none">
                                            {images.slice(0, 5).map((src, i) => (
                                                <img
                                                    key={i}
                                                    src={src}
                                                    alt={`bg-${i}`}
                                                    className={`object-cover w-full h-full ${i === 0 ? 'col-span-1 row-span-2' : ''}`}
                                                />
                                            ))}
                                        </div>

                                        {/* Foreground Content */}
                                        <div className="relative z-10 flex items-center justify-between">

                                            {/* Airline + Route Info */}
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    src={trip.airlineLogo}
                                                    alt={trip.airlineName}
                                                    className="h-20 w-20 object-contain rounded-md shadow-sm"
                                                />
                                                <div>
                                                    <div className="flex items-center space-x-2 font-bold text-3xl text-gray-800">
                                                        <span>{trip.from}</span>
                                                        <span>✈️</span>
                                                        <span>{trip.to}</span>
                                                    </div>
                                                    <div className="text-md text-gray-500 mt-1">
                                                        PNR: <span className="font-bold text-gray-800">{trip.pnr}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Date */}
                                            <div className="text-md text-gray-800 font-medium">{trip.date}</div>

                                        </div>
                                    </div>
                                </Link>

                            ))}
                        </div>
                    </>
                ) : (
                    <MapView />
                )}
            </div>

            <Footer />
        </PhoneScreenWrapper>
    );
}

export default PreviousTrips;
