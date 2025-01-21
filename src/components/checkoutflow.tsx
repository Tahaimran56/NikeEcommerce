"use client";

import React, { useState } from "react";

const CheckoutFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    billingAddress: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    shippingAddress: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    paymentDetails: {
      cardNumber: "",
      expiration: "",
      cvv: "",
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section: "billingAddress" | "shippingAddress" | "paymentDetails"
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value,
      },
    }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("Final Data Submitted:", formData);
    alert("Checkout Successful!");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout Flow</h1>

      {/* Step 1: Billing Address */}
      {step === 1 && (
        <div>
          <h2 className="text-lg font-bold mb-2">Billing Address</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.billingAddress.name}
            onChange={(e) => handleInputChange(e, "billingAddress")}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.billingAddress.email}
            onChange={(e) => handleInputChange(e, "billingAddress")}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.billingAddress.phone}
            onChange={(e) => handleInputChange(e, "billingAddress")}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.billingAddress.address}
            onChange={(e) => handleInputChange(e, "billingAddress")}
            className="border p-2 mb-4 w-full"
          />
          <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">
            Next
          </button>
        </div>
      )}

      {/* Step 2: Shipping Address */}
      {step === 2 && (
        <div>
          <h2 className="text-lg font-bold mb-2">Shipping Address</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.shippingAddress.name}
            onChange={(e) => handleInputChange(e, "shippingAddress")}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.shippingAddress.email}
            onChange={(e) => handleInputChange(e, "shippingAddress")}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.shippingAddress.phone}
            onChange={(e) => handleInputChange(e, "shippingAddress")}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.shippingAddress.address}
            onChange={(e) => handleInputChange(e, "shippingAddress")}
            className="border p-2 mb-4 w-full"
          />
          <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">
            Back
          </button>
          <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">
            Next
          </button>
        </div>
      )}

      {/* Step 3: Payment Details */}
      {step === 3 && (
        <div>
          <h2 className="text-lg font-bold mb-2">Payment Details</h2>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.paymentDetails.cardNumber}
            onChange={(e) => handleInputChange(e, "paymentDetails")}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="text"
            name="expiration"
            placeholder="Expiration Date (MM/YY)"
            value={formData.paymentDetails.expiration}
            onChange={(e) => handleInputChange(e, "paymentDetails")}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={formData.paymentDetails.cvv}
            onChange={(e) => handleInputChange(e, "paymentDetails")}
            className="border p-2 mb-4 w-full"
          />
          <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">
            Back
          </button>
          <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutFlow;
