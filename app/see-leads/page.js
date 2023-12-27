import { sql } from '@vercel/postgres';
import Link from 'next/link';

import React from 'react'

async function GetNewLeads(){
    const leads = await sql`SELECT * FROM LEADS `;
    console.log(leads.rows)
    const headerCells = leads.rows[0] &&
    Object.keys(leads.rows[0])
    .filter((key) => key !== "notes") // Filter out the "notes" key
    .map((key) => (
      <th key={key} className="px-4 py-2 font-bold text-center">
        {key.toUpperCase()}
      </th>
    ));
headerCells.push(
  <th key="edit" className="px-4 py-2 font-bold text-left">
    Edit
  </th>
); 

  const tableBody = leads.rows.map((lead) => (
    <tr key={lead.id}>
   {Object.entries(lead)
      .filter(([key]) => key !== "notes")
      .map(([key, value]) => (
  <td key={key} className="text-gray-200 px-4 py-2 border border-gray-300 text-left hover:transform hover:scale-105 transition-transform">
          {key === "contacted" ? (value ? "Yes" : "No") : value} {/* Conditional rendering for boolean */}
        </td>
      ))}
      

    <td key="edit" className="px-4 py-2 border text-gray-200 underline border-gray-300 text-left">
      <Link href={`/edit/${lead.id}`}>
        Edit
      </Link>
    </td>
  </tr>
));

  return (
    <table className=" table-container w-full min-w-full table-auto shadow-md rounded-md overflow-hidden">
      <thead>{headerCells && <tr>{headerCells}</tr>}</thead>
      <tbody>{tableBody}</tbody>
    </table>
  );
}

const page = () => {


  return (
    <div >page
        <GetNewLeads/>
    </div>
  )
}

export default page