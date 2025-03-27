"use client";

import React from 'react';
import Navbar from '@/components/Navbar/page';
import Footer from '@/components/Footer/page';
import ScrollToTop from '@/components/ScrollToTop/page';
import Link from 'next/link';

const CareersPage = () => {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <ScrollToTop />

            {/* Hero Section */}
            <section className="relative bg-blue-800 text-white py-24">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 z-10"></div>
                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
                        <p className="text-xl mb-8">
                            Build your career with a company that values innovation, quality, and sustainability
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">Why Join GT Laminate?</h2>
                            <p className="text-gray-600 mb-4">
                                At GT Laminate, we believe our success is built on the talent, dedication, and diversity of our team. We&apos;re committed to creating an environment where employees can thrive professionally and personally.
                            </p>
                            <p className="text-gray-600 mb-4">
                                We offer competitive compensation, comprehensive benefits, and opportunities for growth and advancement. But beyond that, we provide a collaborative culture where your ideas are valued and your contributions make a real difference.
                            </p>
                            <p className="text-gray-600">
                                Join us in our mission to transform spaces with innovative laminate solutions while building a rewarding career in a supportive and dynamic workplace.
                            </p>
                        </div>
                        <div className="md:w-1/2 bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                            <div className="text-gray-400 text-center p-4">
                                <p>Team Image</p>
                                <p className="text-sm">(Placeholder for team image)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            These core principles guide our decisions, shape our culture, and define who we are as a company.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Excellence</h3>
                            <p className="text-gray-600">
                                We strive for excellence in everything we do, from product quality to customer service.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Innovation</h3>
                            <p className="text-gray-600">
                                We embrace creativity and continuously seek new ways to improve our products and processes.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Teamwork</h3>
                            <p className="text-gray-600">
                                We believe in collaboration, respect, and the power of diverse perspectives working together.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                            <p className="text-gray-600">
                                We are committed to environmental responsibility and sustainable business practices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Openings */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Explore our current job opportunities and find the perfect role for your skills and aspirations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">Full-time</span>
                            <h3 className="text-xl font-bold mb-2">Production Supervisor</h3>
                            <p className="text-gray-600 mb-4">Mumbai, Maharashtra</p>
                            <p className="text-gray-600 mb-4">
                                We&apos;re looking for an experienced Production Supervisor to oversee our laminate manufacturing operations, ensure quality standards, and lead a team of production staff.
                            </p>
                            <Link href="/contact-us" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                                Apply Now →
                            </Link>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">Full-time</span>
                            <h3 className="text-xl font-bold mb-2">Product Designer</h3>
                            <p className="text-gray-600 mb-4">Mumbai, Maharashtra</p>
                            <p className="text-gray-600 mb-4">
                                Join our design team to create innovative and trendsetting laminate designs that meet market demands and inspire our customers&apos; interior projects.
                            </p>
                            <Link href="/contact-us" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                                Apply Now →
                            </Link>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">Full-time</span>
                            <h3 className="text-xl font-bold mb-2">Sales Representative</h3>
                            <p className="text-gray-600 mb-4">Delhi, NCR</p>
                            <p className="text-gray-600 mb-4">
                                We&apos;re seeking dynamic sales professionals to join our team and help expand our market presence in the Delhi NCR region.
                            </p>
                            <Link href="/contact-us" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                                Apply Now →
                            </Link>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">Full-time</span>
                            <h3 className="text-xl font-bold mb-2">Quality Control Specialist</h3>
                            <p className="text-gray-600 mb-4">Mumbai, Maharashtra</p>
                            <p className="text-gray-600 mb-4">
                                Join our quality assurance team to ensure our products meet the highest standards of excellence and durability.
                            </p>
                            <Link href="/contact-us" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                                Apply Now →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Take Your Career to the Next Level</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Take the first step towards a rewarding career with GT Laminate.
                    </p>
                    <Link href="/contact-us" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                        Apply Now
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default CareersPage;