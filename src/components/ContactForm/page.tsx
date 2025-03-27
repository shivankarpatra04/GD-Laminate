"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

// Define interfaces for form data and errors
interface FormData {
    name: string;
    email: string;
    phone: string;
    city: string;
    state: string;
    message: string;
    interestedIn: string[];
    preferredContact: 'email' | 'phone';
    agreeToTerms: boolean;
}

interface FormErrors {
    [key: string]: string;
}

const ContactForm = () => {
    // Form state
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        message: '',
        interestedIn: [],
        preferredContact: 'email',
        agreeToTerms: false
    });

    // Error state
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Product categories
    const productCategories = [
        'Interior Laminates',
        'Exterior Laminates',
        'Decorative Laminates',
        'Textured Laminates',
        'Solid Colors',
        'Wood Finishes'
    ];

    // Handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        if (type === 'checkbox') {
            if (name === 'agreeToTerms') {
                setFormData({
                    ...formData,
                    [name]: checked
                });
            } else {
                // Handle product interest checkboxes
                const updatedInterests = [...formData.interestedIn];
                if (checked) {
                    updatedInterests.push(value);
                } else {
                    const index = updatedInterests.indexOf(value);
                    if (index > -1) {
                        updatedInterests.splice(index, 1);
                    }
                }
                setFormData({
                    ...formData,
                    interestedIn: updatedInterests
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }

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
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.state.trim()) newErrors.state = 'State is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        if (formData.interestedIn.length === 0) newErrors.interestedIn = 'Please select at least one product category';
        if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            try {
                // Send the form data to our API endpoint
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();

                if (!response.ok) {
                    // Handle validation errors from the server
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
                    city: '',
                    state: '',
                    message: '',
                    interestedIn: [],
                    preferredContact: 'email',
                    agreeToTerms: false
                });

                setSubmitSuccess(true);
                setTimeout(() => setSubmitSuccess(false), 5000);
            } catch (error) {
                console.error('Error submitting form:', error);
                // You could add a state for error message display here
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <section id="contact-form" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-primary py-6 px-8">
                        <h3 className="text-xl font-bold text-white">Contact Information</h3>
                        <p className="text-white/80 mt-2">
                            Fill out the form and our team will get back to you within 24 hours
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8">
                        {submitSuccess && (
                            <div className="mb-6 p-4 bg-primary/10 border border-primary/30 text-primary rounded">
                                <p>Thank you for your message. We'll get back to you soon!</p>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Personal Information */}
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Your full name"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="your.email@example.com"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Your phone number"
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Preferred Contact Method</label>
                                <div className="flex space-x-4">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="preferredContact"
                                            value="email"
                                            checked={formData.preferredContact === 'email'}
                                            onChange={handleChange}
                                            className="form-radio h-4 w-4 text-primary"
                                        />
                                        <span className="ml-2 text-gray-700">Email</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="preferredContact"
                                            value="phone"
                                            checked={formData.preferredContact === 'phone'}
                                            onChange={handleChange}
                                            className="form-radio h-4 w-4 text-primary"
                                        />
                                        <span className="ml-2 text-gray-700">Phone</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City *</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Your city"
                                />
                                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                            </div>

                            <div>
                                <label htmlFor="state" className="block text-gray-700 font-medium mb-2">State *</label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Your state"
                                />
                                {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                            </div>
                        </div>

                        {/* Product Interest */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">Interested In *</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {productCategories.map((category) => (
                                    <label key={category} className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            name="interestedIn"
                                            value={category}
                                            checked={formData.interestedIn.includes(category)}
                                            onChange={handleChange}
                                            className="form-checkbox h-4 w-4 text-blue-600"
                                        />
                                        <span className="ml-2 text-gray-700">{category}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.interestedIn && <p className="text-red-500 text-sm mt-1">{errors.interestedIn}</p>}
                        </div>

                        {/* Message */}
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                rows={4}
                                placeholder="Tell us about your project or inquiry"
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>

                        {/* Terms and Conditions */}
                        <div className="mb-6">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleChange}
                                    className={`form-checkbox h-4 w-4 text-blue-600 ${errors.agreeToTerms ? 'border-red-500' : ''}`}
                                />
                                <span className="ml-2 text-gray-700">
                                    I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                                </span>
                            </label>
                            {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>}
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;