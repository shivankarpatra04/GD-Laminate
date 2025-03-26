"use client";

import React, { useState, useEffect } from 'react';
import FloatingContactForm from '@/components/FloatingContactForm/page';

const HeroSection = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slider images - laminate related
  const heroImages = [
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80", // Modern kitchen with laminate countertops
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80", // Modern interior with laminate flooring
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80", // Laminate furniture surface
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"  // Modern interior with laminate panels
  ];

  // Function to handle smooth scrolling
  const scrollToCollections = (event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => {
    event.preventDefault();
    const collectionsSection = document.getElementById('products');
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle scroll events to hide contact form
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        // Close the contact form when scrolling
        setShowContactForm(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Toggle contact form
  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* Background Slider */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center z-[-1] transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${image}')`
          }}
        ></div>
      ))}

      {/* Slider Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center h-full max-w-7xl mx-auto px-8">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-[fadeIn_1s_ease-out]">
          Redefining Spaces<br />With Elegant Laminates
        </h1>

        <p className="text-lg max-w-xl mb-8 animate-[fadeIn_1s_ease-out_0.3s] opacity-0 animation-fill-forwards">
          Discover our premium collection of durable, design-forward laminates that transform
          ordinary spaces into extraordinary environments.
        </p>

        <div className="flex flex-col md:flex-row mb-10 animate-[fadeIn_1s_ease-out_0.6s] opacity-0 animation-fill-forwards">
          <div className="flex items-center mb-4 md:mb-0 md:mr-8">
            <div className="w-6 h-6 bg-white rounded-full mr-2"></div>
            <span>Premium Quality</span>
          </div>

          <div className="flex items-center mb-4 md:mb-0 md:mr-8">
            <div className="w-6 h-6 bg-white rounded-full mr-2"></div>
            <span>Scratch Resistant</span>
          </div>

          <div className="flex items-center">
            <div className="w-6 h-6 bg-white rounded-full mr-2"></div>
            <span>10-Year Warranty</span>
          </div>
        </div>

        <a
          href="#products"
          onClick={scrollToCollections}
          className="inline-block bg-white text-black font-semibold py-4 px-10 rounded uppercase tracking-wider transition-all duration-300 hover:bg-opacity-90 hover:-translate-y-1 hover:shadow-lg animate-[fadeIn_1s_ease-out_0.9s] opacity-0 animation-fill-forwards"
        >
          Explore Collections
        </a>
      </div>

      {/* Floating Contact Form Trigger - Changed from hover to click */}
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 text-white py-3 px-6 rounded-l-lg cursor-pointer shadow-lg transition-all duration-300 hover:bg-blue-700 z-10 hover:bg-opacity-90 hover:shadow-xl"
        onClick={toggleContactForm}
      >
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="font-medium">Contact Us</span>
        </div>
      </button>

      {/* Floating Contact Form - Changed to use click instead of hover */}
      <div
        className={`absolute top-0 right-0 h-full max-w-md w-full bg-white shadow-2xl transition-transform duration-500 ease-in-out z-20 ${
          showContactForm ? 'transform-none' : 'translate-x-full'
        }`}
      >
        <button 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={() => setShowContactForm(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <FloatingContactForm />
      </div>

      {/* Scroll Indicator - Now clickable */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
        onClick={scrollToCollections}
      >
        <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-5 h-5 border-r-2 border-b-2 border-white transform rotate-45"></div>
      </div>
    </section>
  );
};

export default HeroSection;
