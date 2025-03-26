"use client";

import React from 'react';
import { ProductGrid as Grid } from '@/components/ProductCard/page';
import { Product } from '@/types/product';
import { products } from '@/data/products';

interface ProductGridProps {
    customProducts?: Product[];
    title?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({
    customProducts,
    title = "All Products"
}) => {
    // Use provided custom products or default to all products
    const displayProducts = customProducts || products;

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                {title && (
                    <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
                )}

                <Grid products={displayProducts} />
            </div>
        </section>
    );
};

export default ProductGrid;