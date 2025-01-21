"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type Product = {
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  image: string;
  description: string;
};

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  const removeFromWishlist = (productName: string) => {
    const updatedWishlist = wishlist.filter((item) => item.productName !== productName);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-6">Wishlist</h1>

      <div className="flex flex-wrap gap-6 justify-center">
        {wishlist.length === 0 ? (
          <p className="text-center text-gray-500">Your wishlist is empty.</p>
        ) : (
          wishlist.map((product) => (
            <div
              key={product.productName}
              className="border rounded-lg p-4 shadow-md w-64"
            >
              <Image
                src={product.image}
                alt={product.productName}
                width={250}
                height={250}
                className="rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{product.productName}</h2>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <p>
                <strong>Price:</strong> ${product.price}
              </p>
              <button
                onClick={() => removeFromWishlist(product.productName)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
