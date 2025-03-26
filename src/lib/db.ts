import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gd-laminate';

// Global variable to track connection status
let isConnected = false;

/**
 * Connect to MongoDB
 */
export async function connectToDatabase() {
  if (isConnected) {
    // Use existing database connection
    return;
  }

  try {
    // Set strict query mode for Mongoose to prevent unknown field queries
    mongoose.set('strictQuery', true);
    
    // Connect to database
    await mongoose.connect(MONGODB_URI);
    
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to the database');
  }
}

/**
 * Disconnect from MongoDB
 * Useful for testing environments
 */
export async function disconnectFromDatabase() {
  if (!isConnected) {
    return;
  }

  try {
    await mongoose.disconnect();
    isConnected = false;
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
    throw new Error('Failed to disconnect from the database');
  }
}