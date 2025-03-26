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
                            <h2 className="text-3xl font-bold mb-6">Why Join GD Laminates?</h2>
                            <p className="text-gray-600 mb-4">
                                At GD Laminates, we believe our success is built on the talent, dedication, and diversity of our team. We&apos;re committed to creating an environment where employees can thrive professionally and personally.
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
                                We&apos;re seeking a motivated Sales Representative to build relationships with clients, showcase our product range, and drive sales growth in the Delhi NCR region.
                            </p>
                            <Link href="/contact-us" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                                Apply Now →
                            </Link>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">Part-time</span>
                            <h3 className="text-xl font-bold mb-2">Digital Marketing Specialist</h3>
                            <p className="text-gray-600 mb-4">Remote (India)</p>
                            <p className="text-gray-600 mb-4">
                                Help us grow our online presence through strategic digital marketing initiatives, content creation, and social media management.
                            </p>
                            <Link href="/contact-us" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                                Apply Now →
                            </Link>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-6">Don&apos;t see a position that matches your skills?</p>
                        <Link href="/contact-us" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-block">
                            Submit Your Resume
                        </Link>
                    </div>
                </div>
            </section>

            {/* Employee Benefits */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Employee Benefits</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We offer a comprehensive benefits package to support our employees&apos; wellbeing and professional growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold">Competitive Salary</h3>
                            </div>
                            <p className="text-gray-600 pl-14">
                                We offer industry-competitive compensation packages with performance-based bonuses.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold">Health Insurance</h3>
                            </div>
                            <p className="text-gray-600 pl-14">
                                Comprehensive medical, dental, and vision coverage for employees and their families.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold">Professional Development</h3>
                            </div>
                            <p className="text-gray-600 pl-14">
                                Training programs, workshops, and education assistance to help you grow your skills and advance your career.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold">Paid Time Off</h3>
                            </div>
                            <p className="text-gray-600 pl-14">
                                Generous vacation days, personal leave, and paid holidays to ensure work-life balance.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold">Team Events</h3>
                            </div>
                            <p className="text-gray-600 pl-14">
                                Regular team-building activities, celebrations, and social events to foster a positive work culture.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold">Flexible Work Options</h3>
                            </div>
                            <p className="text-gray-600 pl-14">
                                Flexible scheduling and remote work opportunities for eligible positions to accommodate your lifestyle.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-blue-700 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Take the first step towards a rewarding career with GD Laminates.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#current-openings" className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                            View Open Positions
                        </Link>
                        <Link href="/contact-us" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
                            Submit Your Resume
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default CareersPage;