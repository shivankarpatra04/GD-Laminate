'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar/page';
import ScrollToTop from '@/components/ScrollToTop/page';

const SustainabilityPage = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative bg-primary text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Commitment to Sustainability</h1>
            <p className="text-xl mb-8">
              Creating beautiful laminates while preserving our planet for future generations
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Responsibility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Environmental Responsibility</h2>
              <p className="text-gray-600 mb-4">
                At GT Laminate, sustainability isn't just a buzzword—it's a core value that guides every aspect of our operations. We believe that beautiful interiors shouldn't come at the expense of our environment.
              </p>
              <p className="text-gray-600 mb-4">
                Our commitment to environmental stewardship is reflected in our responsible sourcing practices, eco-friendly manufacturing processes, and continuous efforts to reduce our carbon footprint.
              </p>
              <p className="text-gray-600">
                We're proud to be leading the industry in sustainable laminate solutions that don't compromise on quality or aesthetics.
              </p>
            </div>
            <div className="md:w-1/2 bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-gray-400 text-center p-4">
                <p>Sustainability Image</p>
                <p className="text-sm">(Placeholder for sustainability image)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Initiatives */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Sustainability Initiatives</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're taking concrete steps to minimize our environmental impact while maximizing the value we create for our customers and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Responsible Sourcing</h3>
              <p className="text-gray-600">
                We carefully select suppliers who share our commitment to sustainability. Our raw materials are sourced from responsibly managed forests and recycled content whenever possible.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Eco-Friendly Manufacturing</h3>
              <p className="text-gray-600">
                Our state-of-the-art facilities are designed to minimize waste, energy consumption, and emissions. We continuously invest in cleaner technologies and processes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Circular Economy</h3>
              <p className="text-gray-600">
                We're working towards a circular business model by reducing waste, reusing materials, and recycling wherever possible. Our goal is to minimize landfill waste from our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with us to create sustainable, beautiful spaces that respect our environment.
          </p>
          <Link href="/contact-us" className="inline-block bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SustainabilityPage;