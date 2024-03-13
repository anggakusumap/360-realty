"use client";
import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [ showMobile, setShowMobile ] = useState(false);

    return (
        <header className="fixed top-0 w-full bg-[#F4F4F4] z-10">
            <nav>
                <div className="mx-auto max-w-full px-2 md:px-8 py-3">
                    <div className="flex items-center justify-between">
                        { showMobile ?
                            <IoClose onClick={ () => setShowMobile(false) } color='black' className="md:hidden text-xl" /> :
                            <FaBars onClick={ () => setShowMobile(true) } color='black' className="md:hidden text-xl" />
                        }
                        <div>
                            <h1 className="font-semibold text-2xl">360<sup>o</sup> REALTY</h1>
                            <p className="text-xs">Sales & Management Solutions</p>
                        </div>
                        <div className="hidden md:flex flex-1 items-center justify-end">
                            <div className="flex space-x-10 justify-end">
                                <a href="#" className="text-third uppercase text-sm font-semibold" aria-current="page">Home</a>
                                <a href="#" className="text-primary uppercase text-sm font-medium">Contact</a>
                                <a href="#" className="text-primary uppercase text-sm font-medium">Services</a>
                                <a href="#" className="text-primary uppercase text-sm font-medium">Catalog</a>
                                <a href="#" className="text-primary uppercase text-sm font-medium">Pricing</a>
                                <a href="#" className="text-primary uppercase text-sm font-medium">About Us</a>
                                <a href="#" className="text-third uppercase text-sm font-medium">Eng</a>
                            </div>
                        </div>
                    </div>
                </div>
                { showMobile &&
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Services</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Catalog</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Pricing</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About Us</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Eng</a>
                        </div>
                    </div>
                }
            </nav>
        </header>
    );
};

export default Navbar;