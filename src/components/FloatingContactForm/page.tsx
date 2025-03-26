"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

// Define interfaces for form data and errors
interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface FormErrors {
    [key: string]: string;
}

const FloatingContactForm = () => {
    // Form state
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    // Error state
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error when field is edited
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors: FormErrors = {};

        // Required fields
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            try {
                // Send the form data to our floating contact form API endpoint
                const response = await fetch('/api/contact/floating-contact-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();

                if (!response.ok) {
                    if (data.errors) {
                        setErrors(data.errors);
                        throw new Error('Validation failed');
                    } else {
                        throw new Error(data.message || 'Something went wrong');
                    }
                }

                // Reset form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                });

                setSubmitSuccess(true);
                setTimeout(() => setSubmitSuccess(false), 5000);
            } catch (error) {
                console.error('Error submitting form:', error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="h-full overflow-y-auto text-gray-800">
            <div className="bg-blue-600 py-4 px-6">
                <h2 className="text-xl font-bold text-white">Quick Contact</h2>
                <p className="text-blue-100 text-sm mt-1">
                    We&apos;ll get back to you shortly
                </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
                {submitSuccess && (
                    <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded text-sm">
                        Thank you for your message! We will contact you soon.
                    </div>
                )}

                <div className="space-y-4">
                    <div>
                        <label htmlFor="floating-name" className="block text-gray-700 font-medium mb-1 text-sm">Full Name *</label>
                        <input
                            type="text"
                            id="floating-name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Your name"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <label htmlFor="floating-email" className="block text-gray-700 font-medium mb-1 text-sm">Email Address *</label>
                        <input
                            type="email"
                            id="floating-email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="your.email@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="floating-phone" className="block text-gray-700 font-medium mb-1 text-sm">Phone Number *</label>
                        <input
                            type="tel"
                            id="floating-phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Your phone number"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                        <label htmlFor="floating-message" className="block text-gray-700 font-medium mb-1 text-sm">Message *</label>
                        <textarea
                            id="floating-message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                            rows={4}
                            placeholder="How can we help you?"
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </span>
                            ) : 'Send Message'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FloatingContactForm;