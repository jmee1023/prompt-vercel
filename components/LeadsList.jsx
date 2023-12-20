
"use client"
import React, { useState, useEffect } from 'react';

function LeadsList() {
  const [leads, setLeads] = useState([]);

  const handleClickSearch = async () => {
    // Simulate search parameters based on static values for simplicity
    const petName = 'Fluffy'; // Replace with actual search input values
    const ownerName = 'John'; // Replace with actual search input values

    const response = await fetch(`/api/see-leads?petName=${petName}&ownerName=${ownerName}`);
    const data = await response.json();

    // Extract the actual pet data from the response object
    setLeads(data.leads.rows);
  };

  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        onClick={handleClickSearch}
      >
        Search Leads
      </button>
      {leads.length > 0 && (
        <table className="w-full border-collapse border border-gray-300 rounded-md shadow-md">
          <thead>

            
<tr
 
className="bg-gray-800 text-white">

              
<th
 
className="px-4 py-2">Name</th>

              
<th
 
className="px-4 py-2">Email</th>

              
<th
 
className="px-4 py-2">Estimated Income</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.email}>
                <td className="px-4 py-2">{lead.first_name}</td>
                <td className="px-4 py-2">{lead.email}</td>
                <td className="px-4 py-2 text-right">$ {lead.estimated_income}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LeadsList;