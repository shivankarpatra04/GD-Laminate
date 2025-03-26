import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for a Contact document
export interface IContact extends Document {
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  message: string;
  interestedIn: string[];
  preferredContact: string;
  createdAt: Date;
}

// Define the schema for the Contact model
const ContactSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  message: { type: String, required: true },
  interestedIn: { type: [String], required: true },
  preferredContact: { type: String, default: 'email' },
  createdAt: { type: Date, default: Date.now }
});

// Create and export the Contact model
// We need to check if the model already exists to prevent model overwrite errors during hot reloading
const Contact = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;