import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Contact from '@/models/Contact';

type FloatingContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

// Validate form data
function validateFormData(data: FloatingContactFormData) {
  const errors: Record<string, string> = {};

  if (!data.name?.trim()) errors.name = 'Name is required';
  if (!data.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email';
  }
  if (!data.phone?.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^[0-9]{10}$/.test(data.phone.replace(/[\s-]/g, ''))) {
    errors.phone = 'Please enter a valid 10-digit phone number';
  }
  if (!data.message?.trim()) errors.message = 'Message is required';

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

// POST handler for floating contact form submissions
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data = await request.json() as FloatingContactFormData;

    // Validate the form data
    const { isValid, errors } = validateFormData(data);

    if (!isValid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // Connect to the database
    await connectToDatabase();

    // Create a new contact document
    const contact = new Contact({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      // Set default values for required fields in the Contact model
      city: 'Not provided',
      state: 'Not provided',
      interestedIn: ['Quick Contact Form'],
      preferredContact: 'Any'
    });

    // Save the contact to the database
    await contact.save();

    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We will contact you soon.'
    });
  } catch (error) {
    console.error('Error processing floating contact form submission:', error);
    return NextResponse.json({
      success: false,
      message: 'An error occurred while processing your request. Please try again later.'
    }, { status: 500 });
  }
}
