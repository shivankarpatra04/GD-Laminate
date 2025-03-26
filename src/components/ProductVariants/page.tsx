'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ProductVariant } from '@/types/product';

interface ProductVariantsProps {
  mainImage: string;
  mainName: string;
  variants: ProductVariant[];
  onVariantSelect: (variant: ProductVariant | null) => void;
}

const ProductVariants: React.FC<ProductVariantsProps> = ({
  mainImage,
  mainName,
  variants,
  onVariantSelect,
}) => {
  // Remove local state management since it's redundant with parent state
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

  const handleVariantClick = (variant: ProductVariant) => {
    // Only update if clicking a different variant
    if (!selectedVariant || selectedVariant.id !== variant.id) {
      setSelectedVariant(variant);
      onVariantSelect(variant);
    }
  };

  const handleMainImageClick = () => {
    setSelectedVariant(null);
    onVariantSelect(null);
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* Main Product Image */}
      <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
        <Image
          src={selectedVariant ? selectedVariant.image : mainImage}
          alt={selectedVariant ? selectedVariant.name : mainName}
          fill
          className="object-cover"
        />
      </div>

      {/* Variants Selector */}
      <div className="flex flex-wrap gap-3">
        {/* Main product thumbnail */}
        <button
          onClick={handleMainImageClick}
          className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${!selectedVariant ? 'border-blue-600' : 'border-transparent'}`}
        >
          <Image
            src={mainImage}
            alt={mainName}
            fill
            className="object-cover"
          />
          <span className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs py-1 text-center truncate">
            Main
          </span>
        </button>

        {/* Variant thumbnails */}
        {variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => handleVariantClick(variant)}
            className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${selectedVariant?.id === variant.id ? 'border-blue-600' : 'border-transparent'}`}
          >
            <Image
              src={variant.image}
              alt={variant.name}
              fill
              className="object-cover"
            />
            <span className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs py-1 text-center truncate">
              {variant.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductVariants;