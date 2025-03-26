"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { ProductGrid } from '@/components/ProductCard/page';
import { productCategories, getProductsByCategory } from '@/data/products';
import { Search } from 'lucide-react';
import Navbar from '@/components/Navbar/page';
import ScrollToTop from '@/components/ScrollToTop/page';
import { useSearchParams } from 'next/navigation';

// Separate component for the products content
const ProductsContent = () => {
    const searchParams = useSearchParams();
    const categoryFromUrl = searchParams.get('category');
    
    const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || 'All Categories');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(getProductsByCategory(categoryFromUrl || 'All Categories'));

    // Update selected category when URL parameter changes
    useEffect(() => {
        if (categoryFromUrl) {
            setSelectedCategory(categoryFromUrl);
        }
    }, [categoryFromUrl]);

    useEffect(() => {
        let products = getProductsByCategory(selectedCategory);

        if (searchQuery.trim() !== '') {
            products = products.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredProducts(products);
    }, [selectedCategory, searchQuery]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                    {productCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                selectedCategory === category
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-64">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
            </div>

            {/* Results Count */}
            <div className="mb-6 text-gray-600">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} />
            ) : (
                <div className="text-center py-16">
                    <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
                    <p className="text-gray-500">Try adjusting your search or filter to find what you&apos;re looking for.</p>
                </div>
            )}
        </div>
    );
};

// Main Products Page component
const ProductsPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <ScrollToTop />

            {/* Hero Banner */}
            <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 h-64 flex items-center justify-center text-white">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">
                        Discover our extensive range of premium laminates for all your interior needs
                    </p>
                </div>
            </div>

            {/* Wrap the content in Suspense */}
            <Suspense fallback={<div className="text-center py-16">Loading...</div>}>
                <ProductsContent />
            </Suspense>
        </div>
    );
};

export default ProductsPage;