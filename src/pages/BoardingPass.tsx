import React, { useEffect, useState } from 'react';
import PhoneScreenWrapper from '../components/PhoneWrapper';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const BoardingPass = () => {
    const [images, setImages] = useState<string[]>([]);

    const [loadedFromStorage, setLoadedFromStorage] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('memories');
        if (stored) {
            setImages(JSON.parse(stored));
        }
        setLoadedFromStorage(true);
    }, []);

    useEffect(() => {
        if (loadedFromStorage) {
            try {
                localStorage.setItem('memories', JSON.stringify(images));
            } catch (e) {
                console.error('Quota exceeded or failed to save', e);
            }
        }
    }, [images, loadedFromStorage]);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            if (reader.result && typeof reader.result === 'string') {
                if (images.length < 5) {
                    setImages([...images, reader.result]);
                } else {
                    alert('You can only upload up to 5 images.');
                }
            }
        };

        reader.readAsDataURL(file);
    };

    const removeImage = (index: number) => {
        const updated = [...images];
        updated.splice(index, 1);
        setImages(updated);
    };

    return (
        <PhoneScreenWrapper>
            <div className="min-h-screen bg-white text-black font-sans p-4">
                {/* Header */}
                <div className="flex items-center justify-between border-b pb-2 mb-4">
                    <Link type='button' to="/previous-trips" className="text-lg">{'←'}</Link>
                    <h2 className="text-base font-semibold">Boarding Pass</h2>
                    <div className="text-2xl">⋮</div>
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-gray-200 p-4 shadow-md">
                    <div className="rounded-xl bg-gray-100 p-4">
                        <div className="flex justify-between items-start">
                            <img
                                src="https://images.seeklogo.com/logo-png/0/2/air-india-logo-png_seeklogo-5113.png"
                                alt="Air India"
                                className="h-45"
                            />
                            <div className="text-right space-y-1">
                                <div className="text-sm text-gray-800 font-semibold">25 Jul 2025</div>
                                <div className="text-xs text-gray-600">Seat#</div>
                                <div className="text-pink-600 text-xl font-bold">037A</div>
                                <div className="text-xs text-gray-600">Flight#</div>
                                <div className="text-pink-600 font-bold">AI 2832</div>
                                <div className="text-xs text-gray-600">PNR#</div>
                                <div className="text-pink-600 font-bold">F273EH</div>
                                <div className="text-xs text-gray-600">Seq#</div>
                                <div className="text-pink-600 font-bold">0046</div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center mt-4">
                            <img
                                src="https://api.qrserver.com/v1/create-qr-code/?data=F27JUH&size=150x150"
                                alt="QR Code"
                                className="h-32 w-32"
                            />
                            <span className="text-xs bg-blue-600 text-white px-2 py-0.5 mt-1 rounded">Completed</span>
                        </div>

                        <div className="border-t mt-4 pt-2 text-xs text-gray-600 flex justify-between">
                            <span>Uploaded On:</span>
                            <span>25 Jul 2025 11:34:50</span>
                        </div>
                    </div>

                    <div className="text-center mt-4 mb-4">
                        <div className="text-2xl font-semibold text-pink-700">BLR → DEL</div>
                        <div className="text-sm text-gray-600 flex justify-between px-6 mt-1">
                            <span>Bangalore</span>
                            <span>Delhi</span>
                        </div>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-3 flex justify-between items-center">
                        <p

                            className="h-10 object-contain"
                        >Kempegowda Airport</p>
                        <div className="text-xs text-right">
                            <div className="font-semibold">DIGIYATRA AIRPORT STATUS</div>
                            <div className="flex items-center space-x-1">
                                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                                <span className="text-sm">Online</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Memories Section */}
                <div className="mt-8 mb-32">
                    <h3 className="text-lg font-semibold mb-2">Memories</h3>

                    {/* Image Upload */}
                    {images.length < 5 && (
                        <label className="cursor-pointer inline-block mb-4 text-blue-600 font-semibold  text-md">
                            + Add Memories ({images.length}/5)
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                        </label>
                    )}

                    {/* Image Grid */}
                    <div className="grid grid-cols-3 grid-rows-2 gap-2 max-w-[380px] mx-auto">
                        {images.map((src, idx) => {
                            if (idx === 0) {
                                return (
                                    <div
                                        key={idx}
                                        className="col-span-1 row-span-2 relative group"
                                    >
                                        <img
                                            src={src}
                                            alt={`memory-${idx}`}
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                        <button
                                            onClick={() => removeImage(idx)}
                                            className="absolute top-1 right-1 text-xs text-white bg-black bg-opacity-50 rounded-full px-1 opacity-0 group-hover:opacity-100 transition"
                                        >
                                            ×
                                        </button>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={idx} className="relative group">
                                        <img
                                            src={src}
                                            alt={`memory-${idx}`}
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                        <button
                                            onClick={() => removeImage(idx)}
                                            className="absolute top-1 right-1 text-xs text-white bg-black bg-opacity-50 rounded-full px-1 opacity-0 group-hover:opacity-100 transition"
                                        >
                                            ×
                                        </button>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>

                {/* Delete Button */}
                <div className="mt-6 text-center">
                    <button className="text-red-600 font-semibold">Delete</button>
                </div>


            </div>

            <Footer />
        </PhoneScreenWrapper>
    );
};

export default BoardingPass;
