"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const LeadForm = () => {
  const router = useRouter();
  const showToastMessage = () => {
    toast.success("Lead Submitted", {
      position: toast.POSITION.TOP_CENTER,
      className: "toast-message",
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    estimatedIncome: "",
    hometown: "",
    notes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Replace this with your actual API endpoint
    const API_URL = "/api/new-lead";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful submission
        showToastMessage();
        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          estimatedIncome: "",
          hometown: "",
          notes: "",
        });
        setTimeout(() => {
          router.push("/see-leads");
        }, 3000);
      } else {
        // Handle errors
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <form className="max-w-md mx-auto p-6  rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Lead</h2>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Lead's name"
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">
          Phone Number
        </label>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Enter Lead's number"
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          required
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Lead's email address"
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">
          Estimated Income
        </label>
        <input
          type="number"
          name="estimatedIncome"
          placeholder="Enter Lead's estimated income"
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          required
          value={formData.estimatedIncome}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">
          Hometown
        </label>
        <input
          type="text"
          name="hometown"
          placeholder="Enter Lead's hometown"
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          required
          value={formData.hometown}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">
          Notes about the lead
        </label>
        <textarea
          name="notes"
          placeholder="Enter notes about the lead"
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          value={formData.notes}
          onChange={handleChange}
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Submit Lead
      </button>
      <ToastContainer />
    </form>
  );
};

export default LeadForm;
