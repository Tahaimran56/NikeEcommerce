"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const responseData = await res.json();

        if (responseData && Array.isArray(responseData.data)) {
          const products = responseData.data as Product[];
          setProducts(products);

          const uniqueCategories = Array.from(
            new Set(products.map((product) => product.category))
          );
          setCategories(["All", ...uniqueCategories]);
        } else {
          console.error("Invalid data format received from the API.");
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();

    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products.filter((product) =>
          product.productName.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : products
          .filter((product) => product.category === selectedCategory)
          .filter((product) =>
            product.productName.toLowerCase().includes(searchQuery.toLowerCase())
          );

  const addToWishlist = (product: Product) => {
    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-6">
      <h1 className="text-center text-2xl font-bold mb-6">Products</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border rounded-md px-4 py-2 text-sm md:text-base"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 border rounded-md text-sm md:text-base ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No products available.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <Link
              key={product.productName}
              href={`/products/${product.productName
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="border rounded-lg p-4 shadow-md hover:shadow-lg transition w-full"
            >
              <div>
                <Image
                  src={product.image}
                  alt={product.productName}
                  width={250}
                  height={250}
                  className="rounded-md mb-4 w-full h-auto object-cover"
                />
                <h2 className="text-lg font-semibold mb-2">
                  {product.productName}
                </h2>
                <p className="text-sm text-gray-600 mb-2">
                  {product.description}
                </p>
                <p>
                  <strong>Price:</strong> ${product.price}
                </p>
                <p>
                  <strong>Category:</strong> {product.category}
                </p>
                <button
                  onClick={(e) => {
                    e.preventDefault(); // Prevent navigation on button click
                    addToWishlist(product);
                  }}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
                >
                  Add to Wishlist
                </button>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
