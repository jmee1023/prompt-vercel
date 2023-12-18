"use client"
import React, { useState, useEffect } from 'react';

const LeadTable = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    setLeads([
      {
        id: 1,
        name: 'John Doe',
        phoneNumber: '(555) 555-5555',
        email: 'johndoe@example.com',
        estimatedIncome: 50000,
        hometown: 'New York City',
        notes: 'Potential client, interested in marketing services.'
      },
      {
        id: 2,
        name: 'Jane Smith',
        phoneNumber: '(123) 456-7890',
        email: 'janesmith@example.com',
        estimatedIncome: 75000,
        hometown: 'Los Angeles',
        notes: 'Followed up with her last week, awaiting response.'
      },
      {
        id: 3,
        name: 'Mike Jones',
        phoneNumber: '(789) 012-3456',
        email: 'mikejones@example.com',
        estimatedIncome: 35000,
        hometown: 'Chicago',
        notes: 'Needs more information about our product range.'
      }
    ]);
  }, []);

  const handleEditClick = (id) => {
    // Implement your edit functionality here, e.g., open a modal or redirect to a dedicated edit page
    console.log(`Edit lead with ID: ${id}`);
  };

  return (
    <table className="w-full border-collapse border border-gray-300 rounded-md shadow-md">
      <thead>
        <tr className="bg-gray-800 text-white">
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Phone Number</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Estimated Income</th>
          <th className="px-4 py-2">Hometown</th>
          <th className="px-4 py-2">Notes</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead) => (
          <tr key={lead.id}>
            <td className="px-4 py-2">{lead.name}</td>
            <td className="px-4 py-2">{lead.phoneNumber}</td>
            <td className="px-4 py-2">{lead.email}</td>
            <td className="px-4 py-2">{lead.estimatedIncome}</td>
            <td className="px-4 py-2">{lead.hometown}</td>
            <td className="px-4 py-2">{lead.notes}</td>
            <td className="px-4 py-2">
              <button
                type="button"
                className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600"
                onClick={() => handleEditClick(lead.id)}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeadTable;