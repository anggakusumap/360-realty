"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [ showMobile, setShowMobile ] = useState(false);
    const pathName = usePathname();

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
                            <div className="flex space-x-10 justify-end font-bold">
                                <Link href="/" className={ `${ pathName === '/' ? 'text-third' : 'text-primary' } uppercase text-sm` }>Home</Link>
                                <Link href="/contact" className={ `${ pathName === '/contact' ? 'text-third' : 'text-primary' } uppercase text-sm` }>Contact</Link>
                                <Link href="/services" className={ `${ pathName === '/services' ? 'text-third' : 'text-primary' } uppercase text-sm` }>Services</Link>
                                <Link href="/" className={ `${ pathName === '/catalog' ? 'text-third' : 'text-primary' } uppercase text-sm` }>Catalog</Link>
                                <Link href="/pricing" className={ `${ pathName === '/pricing' ? 'text-third' : 'text-primary' } uppercase text-sm` }>Pricing</Link>
                                <Link href="/about-us" className={ `${ pathName === '/about-us' ? 'text-third' : 'text-primary' } uppercase text-sm` }>About Us</Link>
                                <Link href="#" className="text-third uppercase text-sm">Eng</Link>
                            </div>
                        </div>
                    </div>
                </div>
                { showMobile &&
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Link href="/" onClick={ () => setShowMobile(false) } className={ `${ pathName === '/' ? 'bg-gray-900 text-white' : 'text-third hover:bg-gray-700 hover:text-white' } block rounded-md px-3 py-2 text-base font-medium` }>Home</Link>
                            <Link href="/contact" onClick={ () => setShowMobile(false) } className={ `${ pathName === '/contact' ? 'bg-gray-900 text-white' : 'text-third hover:bg-gray-700 hover:text-white' } block rounded-md px-3 py-2 text-base font-medium` }>Contact</Link>
                            <Link href="/services" onClick={ () => setShowMobile(false) } className={ `${ pathName === '/services' ? 'bg-gray-900 text-white' : 'text-third hover:bg-gray-700 hover:text-white' } block rounded-md px-3 py-2 text-base font-medium` }>Services</Link>
                            <Link href="/" onClick={ () => setShowMobile(false) } className={ `${ pathName === '/catalog' ? 'bg-gray-900 text-white' : 'text-third hover:bg-gray-700 hover:text-white' } block rounded-md px-3 py-2 text-base font-medium` }>Catalog</Link>
                            <Link href="/pricing" onClick={ () => setShowMobile(false) } className={ `${ pathName === '/pricing' ? 'bg-gray-900 text-white' : 'text-third hover:bg-gray-700 hover:text-white' } block rounded-md px-3 py-2 text-base font-medium` }>Pricing</Link>
                            <Link href="/about-us" onClick={ () => setShowMobile(false) } className={ `${ pathName === '/about-us' ? 'bg-gray-900 text-white' : 'text-third hover:bg-gray-700 hover:text-white' } block rounded-md px-3 py-2 text-base font-medium` }>About Us</Link>
                            <Link href="#" onClick={ () => setShowMobile(false) } className={ `${ pathName === '/eng' ? 'bg-gray-900 text-white' : 'text-third hover:bg-gray-700 hover:text-white' } block rounded-md px-3 py-2 text-base font-medium` }>Eng</Link>
                        </div>
                    </div>
                }
            </nav>
        </header>
    );
};

export default Navbar;