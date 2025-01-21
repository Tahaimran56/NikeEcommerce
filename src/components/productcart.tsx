import React from 'react';
import Image from 'next/image';

interface Product {
  productName: string;
  price: number;
  image: string;
  stockStatus: string;
}

const ProductCard: React.FC<Product> = ({ productName, price, image, stockStatus }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      {/* Optimized Image */}
      <div className="relative w-full h-48">
        <Image
          src={image || '/placeholder-image.png'} // Fallback for missing images
          alt={productName || 'Product Image'}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      {/* Product Information */}
      <h3 className="text-lg font-semibold mt-2">{productName || 'Unnamed Product'}</h3>
      <p className="text-gray-600">Price: ${price || 'N/A'}</p>
      <p className={`mt-1 ${stockStatus === 'In Stock' ? 'text-green-500' : 'text-red-500'}`}>
        {stockStatus || 'Unknown Stock Status'}
      </p>
    </div>
  );
};

export default ProductCard;
