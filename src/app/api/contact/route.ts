import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Contact from '@/models/Contact';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  message: string;
  interestedIn: string[];
  preferredContact: string;
  agreeToTerms: boolean;
};

// Validate form data
function validateFormData(data: ContactFormData) {
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
  if (!data.city?.trim()) errors.city = 'City is required';
  if (!data.state?.trim()) errors.state = 'State is required';
  if (!data.message?.trim()) errors.message = 'Message is required';
  if (!data.interestedIn?.length) errors.interestedIn = 'Please select at least one product category';
  if (!data.agreeToTerms) errors.agreeToTerms = 'You must agree to the terms and conditions';

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

// POST handler for contact form submissions
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data = await request.json() as ContactFormData;

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
      city: data.city,
      state: data.state,
      message: data.message,
      interestedIn: data.interestedIn,
      preferredContact: data.preferredContact
    });

    // Save the contact to the database
    await contact.save();

    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We will contact you soon.'
    });
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json({
      success: false,
      message: 'An error occurred while processing your request. Please try again later.'
    }, { status: 500 });
  }
}

// GET handler (optional, for testing)
export async function GET() {
  try {
    await connectToDatabase();
    const count = await Contact.countDocuments();
    return NextResponse.json({
      message: 'Contact API endpoint is working',
      contactCount: count
    });
  } catch (error) {
    console.error('Error in GET handler:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to connect to database'
    }, { status: 500 });
  }
}