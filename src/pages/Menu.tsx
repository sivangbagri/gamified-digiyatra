import React from 'react';
import {
    ChevronRight,
    FileText,
    HelpCircle,
    Menu,
    Home,
    Car,
    Building2,
    MessageSquare
} from 'lucide-react';
import { Link } from "react-router-dom"
import PhoneScreenWrapper from '../components/PhoneWrapper';
import Footer from '../components/Footer';

export const MenuPage = () => {
    return (
        <PhoneScreenWrapper>

            {/* Scrollable Content */}
            <div className="h-full overflow-y-auto scroll-smooth pb-32">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500" />
                        <span className="text-lg font-semibold">Profile</span>
                    </div>
                    <div className="w-6 h-6" /> {/* Spacer for symmetry */}
                </div>

                {/* User Info */}
                <div className="flex flex-col items-center mt-6 mb-4">
                    <img
                        src="/my-avatar.png"
                        alt="User"
                        className="w-20 h-20 rounded-full mb-2 object-cover"
                    />
                    <div className="flex items-center space-x-2">
                        <span className="text-base font-bold">Shivang Bagri</span>
                        <div className="w-5 h-5 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">
                            ✓
                        </div>
                    </div>
                </div>

                {/* Menu Section */}
                <div className="mx-4 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                    {[
                        { label: 'Previous Trips', icon: <FileText className="w-5 h-5" /> },
                        { label: 'Feedback', icon: <MessageSquare className="w-5 h-5" /> },
                        { label: 'FAQ', icon: <HelpCircle className="w-5 h-5" /> },
                        { label: 'Help', icon: <HelpCircle className="w-5 h-5" /> },
                    ].map((item, idx) => (

                        item.label === "Previous Trips" ? <Link to="/previous-trips"><div
                            key={item.label}
                            className={`flex items-center justify-between px-4 py-4 ${idx !== 3 ? 'border-b border-gray-200' : ''
                                }`}
                        >
                            <div className="flex items-center space-x-4">
                                <div className="text-gray-700">{item.icon}</div>
                                <span className="text-sm font-medium text-gray-800">
                                    {item.label}
                                </span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div></Link> :
                            <div
                                key={item.label}
                                className={`flex items-center justify-between px-4 py-4 ${idx !== 3 ? 'border-b border-gray-200' : ''
                                    }`}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="text-gray-700">{item.icon}</div>
                                    <span className="text-sm font-medium text-gray-800">
                                        {item.label}
                                    </span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                            </div>
                    ))}
                </div>

                {/* Version + Logout */}
                <div className="mt-6 text-center text-sm text-gray-500">Version : 4.2.4</div>
                <div className="flex justify-center mt-4">
                    <button className="bg-red-100 text-red-600 font-bold px-8 py-3 rounded-full">
                        Logout
                    </button>
                </div>
            </div>

            {/* Bottom Navigation */}
            <Footer />
        </PhoneScreenWrapper>
    );
};

export default Menu;
