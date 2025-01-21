"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/cartcontext";
import Reviews from "@/components/Reviews";

type Product = {
  id: string;
  productName: string;
  description: string;
  price: number;
  colors: string[];
  image: string;
};

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) throw new Error(`Failed to fetch product: ${res.status}`);
        const data = await res.json();

        const mappedProduct: Product = {
          id: data.id || id, // Use `id` from params if missing in API
          productName: data.productName || "Unknown Product",
          description: data.description || "No description available",
          price: data.price || 0,
          colors: data.colors || [],
          image: data.image || "",
        };

        setProduct(mappedProduct);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        productName: product.productName,
        price: product.price,
        quantity: 1,
      });
    } else {
      console.error("Cannot add to cart: Product is null.");
    }
  };

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found or unable to load product details.</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col items-center">
        <Image
          src={product.image}
          alt={product.productName}
          width={400}
          height={400}
          className="rounded-lg"
        />
        <h1 className="text-2xl font-bold mt-4">{product.productName}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-lg font-semibold mt-4">Price: ${product.price}</p>
        <div className="mt-4">
          <strong>Available Colors: </strong>
          <ul className="list-disc ml-6">
            {product.colors.map((color, index) => (
              <li key={index}>{color}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <button
            onClick={handleAddToCart}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-8 w-full">
        <Reviews productId={product.id} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
