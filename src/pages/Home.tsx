import React, { useState } from 'react';
import {
    Bell, Plus, Car, Building2, Home, FileText, Menu, X
} from 'lucide-react';

import { Link } from "react-router-dom"
import PhoneScreenWrapper from "../components/PhoneWrapper"
import Footer from '../components/Footer';
export const HomePage = () => {
    const [showPetCarousel, setShowPetCarousel] = useState(false);
    const [selectedPet, setSelectedPet] = useState('🐱');

    const pets = [
        { emoji: '🐱', name: 'Cat' },
        { emoji: '🐶', name: 'Dog' },
    ];

    const handlePetSelect = (pet: string) => {
        setSelectedPet(pet);
        setShowPetCarousel(false);
    };

    return (
        <PhoneScreenWrapper>

            {/* Scrollable Area */}
            <div className="h-full overflow-y-auto scroll-smooth pb-32">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-white">
                    <button className="bg-gray-100 px-4 py-2 rounded-full text-gray-700 text-sm font-medium">
                        Updates
                    </button>
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-gray-800">digiyatra</span>
                        <div className="w-3 h-3 bg-blue-500 rounded-full ml-1"></div>
                    </div>
                    <Bell className="w-6 h-6 text-gray-600" />
                </div>

                {/* Travel Card */}
                <div className="mx-6 mb-6">
                    <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-6 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    <div className="w-24 h-16 bg-blue-400 rounded-lg transform -rotate-12 shadow-lg" />
                                    <div className="absolute -bottom-1 -right-1 w-24 h-16 bg-red-400 rounded-lg shadow-lg" />
                                </div>
                            </div>

                            {/* Flight Info */}
                            <div className="text-right mb-6">
                                <div className="text-xs text-white opacity-75 mb-1">DATE</div>
                                <div className="text-sm mb-2">Seat#</div>
                                <div className="text-2xl font-light mb-2">-</div>
                                <div className="text-sm mb-2">Flight#</div>
                                <div className="text-2xl font-light mb-2">-</div>
                                <div className="text-sm mb-2">PNR#</div>
                                <div className="text-2xl font-light mb-2">-</div>
                                <div className="text-sm mb-2">Seq#</div>
                                <div className="text-2xl font-light">-</div>
                            </div>

                            {/* No Upcoming Travel */}
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold mb-4">No Upcoming Travel</h2>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="text-lg font-medium mb-1">Arrival</div>
                                        <div className="text-2xl font-light">-</div>
                                    </div>
                                    <div className="flex-1 flex justify-center text-2xl">✈️</div>
                                    <div className="text-right">
                                        <div className="text-lg font-medium mb-1">Departure</div>
                                        <div className="text-2xl font-light">-</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons Section */}
                <div className="px-6 mb-6">
                    <div className="flex items-center justify-between">
                        <div className="flex bg-white rounded-full shadow border border-gray-200 overflow-hidden flex-1 mr-4">
                            <button className="flex-1 py-3 flex flex-col items-center justify-center">
                                <span className="text-xs font-medium text-gray-800">Add</span>
                                <span className="text-xs font-medium text-gray-800">Credentials</span>
                            </button>
                            <div className="w-px bg-gray-300" />
                            <button className="flex-1 py-3 flex flex-col items-center justify-center">
                                <span className="text-xs font-medium text-gray-800">Previous</span>
                                <span className="text-xs font-medium text-gray-800">Trips</span>
                            </button>
                        </div>

                        <button className="bg-orange-400 text-white font-medium text-sm px-4 py-3 rounded-full flex items-center">
                            Add Boarding Pass
                            <div className="ml-2 w-6 h-6 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                                <Plus className="w-4 h-4 text-white" />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Survey Banner */}
                <div className="mx-6 mb-6">
                    <div className="bg-yellow-400 rounded-2xl p-6 relative overflow-hidden">
                        <div className="relative">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Help shape the</h3>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">future of Digi Yatra!</h3>
                            <p className="text-sm text-gray-700 mb-4">
                                Take this quick survey and let us know which features matter most to you.
                            </p>
                            <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium">
                                Click here
                            </button>
                        </div>
                        {/* Decorative example elements (mocked) */}
                        <div className="absolute top-4 right-4 w-16 h-20 bg-green-400 rounded-lg opacity-80" />
                        <div className="absolute bottom-4 right-16 w-8 h-8 bg-blue-400 rounded-full opacity-60" />
                        <div className="absolute top-8 right-24 w-4 h-4 bg-red-400 rounded-full opacity-70" />
                    </div>
                </div>
            </div>

            {/* Pet Companion */}
            <div className="absolute bottom-24 left-6 z-20">
                <button
                    onClick={() => setShowPetCarousel(true)}
                    className="w-22 h-22 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-200 border-2 border-gray-200"
                >
                    {selectedPet}
                </button>
            </div>

            {/* Pet Carousel Modal */}
            {showPetCarousel && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
                    <div className="bg-white rounded-2xl p-6 mx-8 max-w-sm w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Choose Your Pet</h3>
                            <button
                                onClick={() => setShowPetCarousel(false)}
                                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                            >
                                <X className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>
                        <div className="flex justify-center space-x-6">
                            {pets.map((pet) => (
                                <button
                                    key={pet.name}
                                    onClick={() => handlePetSelect(pet.emoji)}
                                    className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all duration-200 ${selectedPet === pet.emoji
                                        ? 'bg-orange-100 border-2 border-orange-400 scale-110'
                                        : 'bg-gray-100 hover:bg-gray-200 border-2 border-transparent'
                                        }`}
                                >
                                    {pet.emoji}
                                </button>
                            ))}
                        </div>
                        <div className="text-center mt-4">
                            <p className="text-sm text-gray-600">Tap to select your companion</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom Navigation */}
            <Footer/>
        </PhoneScreenWrapper>
    );
};

export default HomePage;
