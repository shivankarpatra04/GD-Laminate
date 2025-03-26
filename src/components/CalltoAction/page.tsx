"use client";
import React from 'react'
import Link from 'next/link';

const CalltoActionSection = () => {
    return (
        <section id='contact' className="py-16 bg-blue-600 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Explore our extensive collection of premium laminates and find the perfect match for your project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                        href="/GD-Laminates.pdf" 
                        download
                        className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        Download Catalog
                    </a>
                    <Link href="/contact-us" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>

    )
}

export default CalltoActionSection;
