import { useState, useEffect } from 'react';
import { Bell, Plus, X } from 'lucide-react';
import { Link } from "react-router-dom";
import PhoneScreenWrapper from "../components/PhoneWrapper";
import Footer from '../components/Footer';

export const HomePage = () => {
    const [showPetCarousel, setShowPetCarousel] = useState(false);
    const [selectedPet, setSelectedPet] = useState('/cat-2.jpg');
    const [petQuote, setPetQuote] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showBubble, setShowBubble] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    const pets = [
        { emoji: '/cat-2.jpg', name: 'Cat' },
        { emoji: '/cat-3.jpg', name: 'Dog' },
        { emoji: '/cat-4.jpg', name: 'Dog' },
        { emoji: '/cat-5.jpg', name: 'Dog' },
        { emoji: '/cat-6.jpg', name: 'Dog' },
        { emoji: '/cat-7.jpg', name: 'Dog' },
        { emoji: '/cat-8.jpg', name: 'Dog' },
    ];

    const sentences = [
        "I’m so excited I could purr! 🐾💛",
        "This is my first flight I bit nervous 🙂",
        "Are you sure we’re not leaving my toys behind? 😿🧸",
        "Please take me in your next flight as well😿🧸",
        "I missed you for five minutes. Never do that again. 🥹",
        "New places? New smells? I’m *so* curious! 👃🌍",
        "Can I sit in your lap the whole trip? Please? 🥺",
        "I’m nervous... but if you’re there, I’m okay. 💕🐱",
        "AHH! Was that a bird?? I love it here already! 🐦✨",
        "Don’t let go of my paw, okay? 🐾🤝",
        "This bag smells weird. But if you're happy, I'm happy. 😽",
        "Everywhere’s home if you’re with me. 🏡❤️"
    ];

    const handlePetSelect = (pet: string) => {
        setSelectedPet(pet);
        setShowPetCarousel(false);
        const randomQuote = sentences[Math.floor(Math.random() * sentences.length)];
        setPetQuote(randomQuote);
        setShowBubble(true);
    };

    useEffect(() => {
        if (showBubble) {
            const timer = setTimeout(() => setShowBubble(false), 7000);
            return () => clearTimeout(timer);
        }
    }, [showBubble]);

    const handleAddBoardingPass = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setShowSuccess(true);
            setShowDetails(true);
        }, 2500);


    };

    return (
        <PhoneScreenWrapper>
            <div className="relative min-h-[100dvh] overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-white">
                    <button className="bg-gray-100 px-4 py-2 rounded-full text-gray-700 text-sm font-medium">Updates</button>
                    <div className="flex items-center">
                        <span className="text-2xl  text-gray-800 mr-10">digiyatra</span>
                    </div>
                    <Bell className="w-6 h-6 text-gray-600" />
                </div>

                {/* Travel Card */}
                <div className="mx-6 mb-6">
                    <div className="bg-gradient-to-br from-orange-400 to-orange-800 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
                        <div className="relative z-10">

                            {/* Boarding pass graphic */}
                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    <div className="w-24 h-16 bg-blue-400 rounded-lg transform -rotate-12 shadow-md" />
                                    <div className="absolute -bottom-1 -right-1 w-24 h-16 bg-red-400 rounded-lg shadow-md" />
                                </div>
                            </div>

                            {/* Flight details block */}
                            <div className="flex justify-between text-sm text-white/80 mb-6">
                                <div>
                                    <div className="mb-2">
                                        <div className="uppercase text-xs">Seat#</div>
                                        <div className="text-xl font-medium text-white">{showDetails ? "026A" : "-"}</div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="uppercase text-xs">Flight#</div>
                                        <div className="text-xl font-medium text-white">{showDetails ? "AI 2812" : "-"}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="mb-2">
                                        <div className="uppercase text-xs">PNR#</div>
                                        <div className="text-xl font-medium text-white">{showDetails ? "F27XYU" : "-"}</div>
                                    </div>
                                    <div>
                                        <div className="uppercase text-xs">Seq#</div>
                                        <div className="text-xl font-medium text-white">{showDetails ? "0087" : "-"}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Empty state & route info */}
                            <div className="bg-white/10 rounded-xl p-4 text-white">
                                <h2 className="text-center text-lg font-semibold mb-4">No Upcoming Travel</h2>
                                <div className="flex items-center justify-between text-center">
                                    <div>
                                        <div className="text-sm font-light">Arrival</div>
                                        <div className="text-xl font-medium">{showDetails ? "12:40" : "-"}</div>
                                    </div>
                                    <div className="text-2xl">✈️</div>
                                    <div>
                                        <div className="text-sm font-light">Departure</div>
                                        <div className="text-xl font-medium">{showDetails ? "2:30" : "-"}</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                {/* Action Buttons */}
                <div className="px-4 sm:px-6 mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                        {/* Segmented Button Group */}
                        <div className="flex bg-white rounded-full shadow-md border border-gray-200 overflow-hidden flex-1 sm:max-w-md">
                            <button
                                className="flex-1 py-3 px-2 flex flex-col items-center justify-center text-xs font-medium text-gray-800 hover:bg-gray-50 transition"
                            >
                                👤 Add<br />Credentials
                            </button>
                            <div className="w-px bg-gray-300" />
                            <Link
                                to="/previous-trips"
                                className="flex-1 py-3 px-2 flex flex-col items-center justify-center text-xs font-medium text-gray-800 hover:bg-gray-50 transition"
                            >
                                Previous<br /> Trips
                            </Link>
                        </div>

                        {/* Primary CTA */}
                        <button
                            onClick={handleAddBoardingPass}
                            className="bg-orange-400 hover:bg-orange-500 transition text-white font-medium text-sm px-4 py-4 rounded-full flex items-center justify-center shadow-md cursor-pointer"
                        >
                            Add Boarding Pass
                            <div className="ml-2 w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
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
                            <p className="text-sm text-gray-700 mb-4">Take this quick survey and let us know which features matter most to you.</p>
                            <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium">Click here</button>
                        </div>
                        <div className="absolute top-4 right-4 w-16 h-20 bg-green-400 rounded-lg opacity-80" />
                        <div className="absolute bottom-4 right-16 w-8 h-8 bg-blue-400 rounded-full opacity-60" />
                        <div className="absolute top-8 right-24 w-4 h-4 bg-red-400 rounded-full opacity-70" />
                    </div>
                </div>

                {/* Pet Floating Button with Chat Bubble */}
                <div className="absolute bottom-26 left-6 z-20 flex flex-col items-center space-y-2">
                    {petQuote.length > 0 && showBubble && <div className="bg-white text-sm text-gray-700 px-4 py-2 rounded-xl shadow-md border border-gray-200 max-w-[180px] text-center">
                        {petQuote}
                    </div>
                    }
                    <button
                        onClick={() => setShowPetCarousel(true)}
                        className="w-20 h-20 bg-white rounded-full shadow-black shadow-2xl flex items-center justify-center text-2xl border-2 border-gray-200 p-2"
                    >
                        <img src={selectedPet} className="rounded-full cursor-pointer shadow-red-400 drop-shadow-3xl" />
                    </button>
                </div>

                {/* Footer */}
                <Footer />

                {/* Pet Selection Modal */}
                {showPetCarousel && (
                    <div className="absolute inset-0 bg-gray-300/70 bg-opacity-50 flex items-center justify-center z-30">
                        <div className="bg-white rounded-2xl p-6 mx-8 max-w-sm w-full">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold">Choose Your Travel Companion</h3>
                                <button
                                    onClick={() => setShowPetCarousel(false)}
                                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer"
                                >
                                    <X className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>
                            <div className="grid grid-cols-3 my-4">
                                {pets.map((pet) => (
                                    <button
                                        key={pet.name}
                                        onClick={() => handlePetSelect(pet.emoji)}
                                        className={`cursor-pointer w-20 h-20 rounded-full flex items-center justify-center text-3xl transition-all duration-200 ${selectedPet === pet.emoji
                                            ? 'bg-orange-100 border-2 border-orange-400 scale-110'
                                            : 'bg-gray-100 hover:bg-gray-200 border-2 border-transparent'
                                            }`}
                                    >
                                        <img src={pet.emoji} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Loading Spinner */}
                {isLoading && (
                    <div className="absolute inset-0 bg-gray-300/70 flex items-center justify-center z-40">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
                            <p className="text-gray-700 font-medium">Verifying your boarding pass...</p>
                        </div>
                    </div>
                )}

                {/* Success Message */}
                {showSuccess && (
                    <div className="absolute inset-0 bg-gray-300/70 flex items-center justify-center z-40">
                        <div className="bg-white p-6 rounded-2xl text-center shadow-lg max-w-sm w-full mx-4">
                            <h3 className="text-xl font-semibold text-green-600 mb-2">Success! ✅</h3>
                            <p className="text-md text-gray-700 mb-4">
                                People like you are making a difference <br />
                                <span className='font-bold text-black text-xl'>🌱 You just saved 2 trees</span><br />
                                Thanks for choosing paperless travel with DigiYatra!
                            </p>
                            <button
                                onClick={() => setShowSuccess(false)}
                                className="mt-2 bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-green-700"
                            >
                                Great
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </PhoneScreenWrapper>
    );
};

export default HomePage;
