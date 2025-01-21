"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="my-12">
        <h2 className="text-2xl font-bold text-center mb-6">Upcoming Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              id: "1",
              name: "Nike Air Force 1 Mid '07",
              image: "/products/nikepic/photo-1605408499391-6368c628ef42.avif",
              price: "$10795",
            },
            {
              id: "2",
              name: "Nike Court Vision Low Next Nature",
              image: "/products/nikepic/usama-akram-kP6knT7tjn4-unsplash.jpg",
              price: "$4995",
            },
            {
              id: "3",
              name: "Nike Air Max 270 React",
              image: "/products/nikepic/y-a-s-h-Yd4onX7aARI-unsplash.jpg",
              price: "$6995",
            },
          ].map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-md bg-white"
            >
              <div className="h-64 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-700 mt-2">{product.price}</p>
                <Link href={`/products`}>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    View Products
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
