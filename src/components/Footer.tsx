import React from 'react'
import {
    Bell, Plus, Car, Building2, Home, FileText, Menu, X
} from 'lucide-react';

import { Link } from "react-router-dom"
function Footer() {
    return (
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200">
            <div className="flex justify-around py-3">
                <button className="flex flex-col items-center py-2">
                    <Car className="w-6 h-6 text-gray-400 mb-1" />
                    <span className="text-xs text-gray-400">Cab</span>
                </button>
                <button className="flex flex-col items-center py-2">
                    <Building2 className="w-6 h-6 text-gray-400 mb-1" />
                    <span className="text-xs text-gray-400">Hotel</span>
                </button>  <Link to="/">
                    <button className="flex flex-col items-center py-2">

                        <Home className="w-6 h-6 text-blue-500 mb-1" />
                        <span className="text-xs text-blue-500">Home</span>


                    </button>
                </Link>
                <button className="flex flex-col items-center py-2">
                    <FileText className="w-6 h-6 text-gray-400 mb-1" />
                    <span className="text-xs text-gray-400">Services</span>
                </button>
                <Link to="/menu">
                    <button className="flex flex-col items-center py-2">
                        <Menu className="w-6 h-6 text-gray-400 mb-1" />
                        <span className="text-xs text-gray-400">Menu</span>
                    </button>
                </Link>
            </div>
            <div className="flex justify-center pb-2">
                <div className="w-32 h-1 bg-gray-800 rounded-full"></div>
            </div>
        </div>
    )
}

export default Footer
