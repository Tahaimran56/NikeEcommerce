"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/cartcontext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand Name */}
        <Link href="/" className="text-2xl font-bold hover:text-blue-400">
          Nike
        </Link>

        {/* Hamburger Menu Button for Mobile */}
        <button
          className="md:hidden text-white hover:text-blue-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Links for Larger Screens */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className="text-lg font-medium hover:text-blue-400">
            Home
          </Link>
          <Link href="/products" className="text-lg font-medium hover:text-blue-400">
            Products
          </Link>
          <Link href="/cart" className="text-lg font-medium hover:text-blue-400 relative">
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-sm font-bold rounded-full px-2">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
          <Link href="/wishlist" className="text-lg font-medium hover:text-blue-400">
            Wishlist
          </Link>
          <Link href="/help" className="text-lg font-medium hover:text-blue-400">
            Help-Center
          </Link>
          <Link href="/profile" className="text-lg font-medium hover:text-blue-400">
            Profile
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 text-white">
          <Link href="/" className="block py-2 px-4 hover:bg-gray-600">
            Home
          </Link>
          <Link href="/products" className="block py-2 px-4 hover:bg-gray-600">
            Products
          </Link>
          <Link href="/cart" className="block py-2 px-4 hover:bg-gray-600 relative">
            Cart
            {cart.length > 0 && (
              <span className="absolute right-4 bg-red-500 text-white text-sm font-bold rounded-full px-2">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
          <Link href="/wishlist" className="block py-2 px-4 hover:bg-gray-600">
            Wishlist
          </Link>
          <Link href="/help" className="block py-2 px-4 hover:bg-gray-600">
            Help-Center
          </Link>
          <Link href="/profile" className="block py-2 px-4 hover:bg-gray-600">
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
