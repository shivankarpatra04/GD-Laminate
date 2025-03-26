"use client"

import React from 'react';
import Link from 'next/link';
const AboutSection = () => {
    return (
        <section id="about" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6">About GD Laminates</h2>
                        <p className="text-gray-600 mb-4">
                            GD Laminates offers premium quality laminates for all your interior design needs. With over 500+ designs and textures, we provide innovative solutions for homes, offices, and commercial spaces.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Our products are crafted with precision and care, ensuring durability and aesthetic appeal that transforms your spaces into works of art.
                        </p>
                        <Link href="/about-us" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                            Learn More About Us
                        </Link>
                    </div>
                    <div className="md:w-1/2 bg-gray-200 h-80 rounded-lg"></div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
