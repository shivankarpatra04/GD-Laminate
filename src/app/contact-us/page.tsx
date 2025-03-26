"use client";

import React from 'react';
import Navbar from '@/components/Navbar/page';
import Footer from '@/components/Footer/page';
import ScrollToTop from '@/components/ScrollToTop/page';
import ContactForm from '@/components/ContactForm/page';

const ContactPage = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-8">
              We&apos;re here to help with all your laminate needs. Reach out to our team for inquiries, quotes, or support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Visit Our Showroom</h3>
              <p className="text-gray-600 mb-2">123 Laminate Street</p>
              <p className="text-gray-600 mb-2">Mumbai, Maharashtra 400001</p>
              <p className="text-gray-600">Mon-Sat: 10:00 AM - 7:00 PM</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-2">Phone: +91 98765 43210</p>
              <p className="text-gray-600 mb-2">Email: info@gdlaminates.com</p>
              <p className="text-gray-600">Fax: +91 22 1234 5678</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Customer Support</h3>
              <p className="text-gray-600 mb-2">For technical assistance:</p>
              <p className="text-gray-600 mb-2">support@gdlaminates.com</p>
              <p className="text-gray-600">Helpline: +91 98765 12345</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;