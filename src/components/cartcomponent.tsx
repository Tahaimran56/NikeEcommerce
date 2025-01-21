"use client";

import React from "react";
import { useRouter } from "next/navigation"; // For navigation
import { useCart } from "../context/cartcontext";

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    if (cart.length > 0) {
      router.push("/checkout"); // Navigate to the checkout page
    } else {
      alert("Your cart is empty. Please add some items before proceeding to checkout.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border p-4 rounded-md"
              >
                <div>
                  <h2 className="font-semibold">{item.productName}</h2>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Total: ${getTotalPrice()}</h2>
            <button
              onClick={handleCheckout}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
