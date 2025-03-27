"use client"

import React from 'react';
import Navbar from '@/components/Navbar/page';
import Footer from '@/components/Footer/page';
import ScrollToTop from '@/components/ScrollToTop/page';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About GT Laminate</h1>
            <p className="text-xl mb-8">Crafting premium laminates for exceptional interiors since 2005</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                GT Laminate was founded with a vision to transform interior spaces with innovative and high-quality laminate solutions. What began as a small family business has grown into one of the leading laminate manufacturers in the region.
              </p>
              <p className="text-gray-600 mb-4">
                With over 15 years of experience in the industry, we have established ourselves as pioneers in laminate technology, constantly pushing boundaries to create products that combine aesthetic appeal with exceptional durability.
              </p>
              <p className="text-gray-600">
                Today, GT Laminate offers over 500+ designs and textures, catering to diverse customer needs across residential, commercial, and institutional sectors.
              </p>
            </div>
            <div className="md:w-1/2 bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-gray-400 text-center p-4">
                <p>Company Image</p>
                <p className="text-sm">(Placeholder for company image)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vision & Mission</h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and innovative laminate brand, setting global standards in quality, design, and sustainability, while transforming spaces into works of art.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver premium quality laminates that exceed customer expectations through continuous innovation, sustainable practices, and exceptional service, creating value for all our stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Manufacturing Excellence</h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art manufacturing facilities combine cutting-edge technology with skilled craftsmanship to produce laminates of exceptional quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Technology</h3>
              <p className="text-gray-600">
                We utilize the latest technology and equipment to ensure precision, consistency, and superior finish in every product.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Control</h3>
              <p className="text-gray-600">
                Rigorous quality checks at every stage of production ensure that only the finest laminates reach our customers.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Practices</h3>
              <p className="text-gray-600">
                Our manufacturing processes are designed to minimize environmental impact while maximizing resource efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                We are committed to excellence in everything we do, from raw materials to finished products.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously explore new ideas, technologies, and designs to stay ahead of market trends.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and ethical practices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                We prioritize customer satisfaction and strive to exceed expectations in every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the team that drives our vision and leads GD Laminates to new heights of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <p className="text-gray-400">(Leader Image)</p>
              </div>
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <p className="text-gray-400">(Leader Image)</p>
              </div>
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-gray-600">Chief Design Officer</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <p className="text-gray-400">(Leader Image)</p>
              </div>
              <h3 className="text-xl font-bold">Robert Johnson</h3>
              <p className="text-gray-600">Head of Manufacturing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the GD Laminates Difference</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their spaces with our premium laminates.
          </p>
          <Link href="/contact-us" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}