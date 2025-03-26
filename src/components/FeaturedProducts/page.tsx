"use client";
import React, { useState } from 'react';
import { ProductCard, ProductGrid } from '@/components/ProductCard/page';
import { ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import Link from 'next/link';

const FeaturedProducts = () => {
  const [showAllProducts] = useState(false);

  // Get the first 3 products for featured display
  const featuredProducts = products.slice(0, 3);

  return (
    <section id='products' className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Collections</h2>

        {!showAllProducts ? (
          // Show only featured products initially
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          // Show all products when "View More" is clicked
          <ProductGrid products={products} />
        )}

        {/* View More Button */}
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            View All Products
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts;