"use client";

import React, { useEffect, useState } from "react";
type UserProfile = {
  name: string;
  email: string;
  savedAddresses: string[];
  orderHistory: { orderId: string; orderDate: string; totalAmount: string }[];
};

const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    // Fetch user profile data (replace with API call or use mock data)
    const mockProfileData: UserProfile = {
      name: "John Doe",
      email: "john.doe@example.com",
      savedAddresses: [
        "123 Main Street, New York, NY",
        "456 Elm Street, Los Angeles, CA",
      ],
      orderHistory: [
        { orderId: "ORD12345", orderDate: "2025-01-01", totalAmount: "$120" },
        { orderId: "ORD67890", orderDate: "2025-01-10", totalAmount: "$250" },
      ],
    };

    setUserProfile(mockProfileData);
  }, []);

  if (!userProfile) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">User Profile</h1>
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Personal Details</h2>
        <p><strong>Name:</strong> {userProfile.name}</p>
        <p><strong>Email:</strong> {userProfile.email}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Saved Addresses</h2>
        <ul className="list-disc pl-6">
          {userProfile.savedAddresses.map((address, index) => (
            <li key={index}>{address}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Order History</h2>
        <ul className="list-disc pl-6">
          {userProfile.orderHistory.map((order) => (
            <li key={order.orderId}>
              <p>
                <strong>Order ID:</strong> {order.orderId}
              </p>
              <p>
                <strong>Date:</strong> {order.orderDate}
              </p>
              <p>
                <strong>Total Amount:</strong> {order.totalAmount}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
