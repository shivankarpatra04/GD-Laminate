'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Set active link based on current path
    const path = window.location.pathname;
    const hash = window.location.hash;
    setActiveLink(hash ? path + hash : path);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to determine if a link is active
  const isActive = (href: string) => {
    return activeLink === href;
  };

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg py-2' : 'shadow-md py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            {/* You can add a logo image here */}
            {/* <Image src="/logo.png" alt="GT Laminate Logo" width={40} height={40} className="mr-3" /> */}
            <Link href="/" className="font-bold text-xl text-gray-800 hover:text-blue-600 transition-colors">
              <span className="text-blue-600">GT</span> Laminate
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="/"
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Home
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 ${isActive('/') ? 'scale-x-100' : 'scale-x-0'} origin-left`}></span>
              </Link>
              <Link
                href="/products"
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${isActive('/products') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Products
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 ${isActive('/products') ? 'scale-x-100' : 'scale-x-0'} origin-left`}></span>
              </Link>
              <Link
                href="/about-us"
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${isActive('/about-us') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                About Us
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 ${isActive('/about-us') ? 'scale-x-100' : 'scale-x-0'} origin-left`}></span>
              </Link>
              <Link
                href="/contact-us"
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${isActive('/contact-us') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Contact
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 ${isActive('/contact-us') ? 'scale-x-100' : 'scale-x-0'} origin-left`}></span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t mt-2">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/products') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about-us"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about-us') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact-us') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
