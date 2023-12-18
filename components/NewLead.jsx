"use client"
import React, { useState } from 'react';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    estimatedIncome: '',
    hometown: '',
    notes: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Replace this with your actual API endpoint
    const API_URL = 'https://your-api.com/leads';

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful submission
        alert('Lead successfully added!');
        setFormData({
          name: '',
          phoneNumber: '',
          email: '',
          estimatedIncome: '',
          hometown: '',
          notes: '',
        });
      } else {
        // Handle errors
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-center mb-4">Add New Lead</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="rounded-md border border-gray-300 px-3 py-2"
        required
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number"
        className="rounded-md border border-gray-300 px-3 py-2"
        required
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="rounded-md border border-gray-300 px-3 py-2"
        required
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="number"
        name="estimatedIncome"
        placeholder="Estimated Income"
        className="rounded-md border border-gray-300 px-3 py-2"
        required
        value={formData.estimatedIncome}
        onChange={handleChange}
      />
      <input
        type="text"
        name="hometown"
        placeholder="Hometown"
        className="rounded-md border border-gray-300 px-3 py-2"
        required
        value={formData.hometown}
        onChange={handleChange}
      />
      <textarea
        name="notes"
        placeholder="Notes about the lead (optional)"
        className="rounded-md border border-gray-300 px-3 py-2"
        value={formData.notes}
        onChange={handleChange}
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Submit Lead
      </button>
    </form>
  );
};

export default LeadForm;