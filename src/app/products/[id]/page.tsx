"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { getProductById, getProductsByCategory } from '@/data/products';
import { ArrowLeft, Share2, Download } from 'lucide-react';
import ShareModal from '@/components/ShareModal/page';
import SampleRequestForm from '@/components/SampleRequestForm/page';
import { downloadSpecs } from '@/utils/productActions';
import ProductCard from '@/components/ProductCard/page';
import ProductVariants from '@/components/ProductVariants/page';
import { Product, ProductVariant } from '@/types/product';
const ProductDetailPage = () => {
    const params = useParams();
    const router = useRouter();
    const productId = params.id as string;

    // State for modals and variants
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [isSampleFormOpen, setIsSampleFormOpen] = useState(false);
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
    const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

    // Get product details
    const product = getProductById(productId);

    // Get related products from the same category
    useEffect(() => {
        if (product) {
            // Get products from the same category and exclude the current product
            const categoryProducts = getProductsByCategory(product.category)
                .filter(p => p.id !== product.id);

            // Limit to 4 related products
            setRelatedProducts(categoryProducts.slice(0, 4));
        }
    }, [product]);

    // Handle case where product is not found
    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
                    <p className="text-gray-600 mb-6">The product you&apos;re looking for doesn&apos;t exist or has been removed.</p>
                    <button
                        onClick={() => router.push('/products')}
                        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Back to Products
                    </button>
                </div>
            </div>
        );
    }

    // Event handlers
    const handleShareClick = () => {
        setIsShareModalOpen(true);
    };

    const handleDownloadSpecs = () => {
        downloadSpecs(product);
    };

    const handleRequestSample = () => {
        setIsSampleFormOpen(true);
    };

    // Remove the duplicate useEffect here

    return (
        <div className="bg-gray-50 min-h-screen pb-16">
            {/* Back button */}
            <div className="container mx-auto px-4 py-6">
                <button
                    onClick={() => router.push('/products')}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Products
                </button>
            </div>

            {/* Product Detail Section */}
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
                        {/* Product Image with Variants */}
                        {product.variants && product.variants.length > 0 ? (
                            <ProductVariants
                                mainImage={product.image}
                                mainName={product.name}
                                variants={product.variants}
                                onVariantSelect={(variant) => setSelectedVariant(variant)}
                            />
                        ) : (
                            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        {/* Product Info */}
                        <div className="flex flex-col">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                {selectedVariant ? `${product.name} - ${selectedVariant.name}` : product.name}
                            </h1>
                            <div className="flex items-center mb-4">
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                                    {product.category}
                                </span>
                            </div>

                            <div className="border-t border-b border-gray-200 py-4 my-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Finish</p>
                                        <p className="font-medium">{product.finish}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Thickness</p>
                                        <p className="font-medium">{product.thickness}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Product Code</p>
                                        <p className="font-medium">{product.id}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">Description</h3>
                                <p className="text-gray-600">
                                    {selectedVariant ? selectedVariant.description : product.description}
                                </p>
                            </div>

                            <div className="mt-auto">
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <button
                                        onClick={handleShareClick}
                                        className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                                    >
                                        <Share2 className="w-4 h-4 mr-2" />
                                        Share
                                    </button>
                                    <button
                                        onClick={handleDownloadSpecs}
                                        className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                                    >
                                        <Download className="w-4 h-4 mr-2" />
                                        Download Specs
                                    </button>
                                </div>

                                <button
                                    onClick={handleRequestSample}
                                    className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Request Sample
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
                    {relatedProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {relatedProducts.map(relatedProduct => (
                                <ProductCard key={relatedProduct.id} product={relatedProduct} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">No related products found in this category.</p>
                    )}
                </div>
            </div>

            {/* Share Modal */}
            <ShareModal
                isOpen={isShareModalOpen}
                onClose={() => setIsShareModalOpen(false)}
                product={product}
            />

            {/* Sample Request Form */}
            <SampleRequestForm
                isOpen={isSampleFormOpen}
                onClose={() => setIsSampleFormOpen(false)}
                product={product}
            />
        </div>
    );
};

export default ProductDetailPage;