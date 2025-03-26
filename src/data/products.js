// products.js - Exports product data for use throughout the application

// Import product data from JSON file
import productsData from '@/data/products.json';

// Define product categories for filtering
export const productCategories = [
  'All Categories',
  'Designer Collection',
  'Wood Finishes',
  'Solid Colors',
  'Textures',
];

// Format products to match the Product interface used in ProductCard
export const products = productsData.products.map(product => ({
  id: String(product.id),  // Convert numeric id to string to match Product interface
  name: product.name,
  category: product.category,
  finish: product.description.includes('matte') ? 'Matte' : 
          product.description.includes('gloss') ? 'Glossy' : 
          product.description.includes('texture') ? 'Textured' : 'Standard',
  thickness: '1mm',  // Default thickness since it's not in the JSON
  image: product.image,
  hoverImage: product.image.replace('.jpg', '-hover.jpg'),  // Create hover image path
  description: product.description,
  variants: product.variants || []
}));

// Function to get products by category
export const getProductsByCategory = (category) => {
  if (category === 'All Categories') {
    return products;
  }
  return products.filter(product => product.category === category);
};

// Function to get a single product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export default products;