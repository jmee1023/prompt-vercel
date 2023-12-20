import { sql } from '@vercel/postgres';
import Link from 'next/link';

async function GetLeads() {
  const leads = await sql`SELECT * FROM PEOPLE;`; // Make sure it's PEOPLE not people for case sensitivity
  const headerCells = leads.rows[0] &&
    Object.keys(leads.rows[0]).map((key) => (
      <th key={key} className="px-4 py-2 bg-gray-200 border border-gray-300 font-bold text-left">
        {key}
      </th>
    ));
  headerCells.push(
    <th key="edit" className="px-4 py-2 bg-gray-200 border border-gray-300 font-bold text-left">
      Edit
    </th>
  ); // Add the Edit header cell

  const tableBody = leads.rows.map((lead) => (
    <tr key={lead.email}>
      {Object.entries(lead).map(([key, value]) => (
        <td key={key} className="px-4 py-2 border border-gray-300 text-left">
          {value}
        </td>
      ))}
    
      <td key="edit" className="px-4 py-2 border border-gray-300 text-left">
        <Link href={`/edit/${lead.first_name}`}>
          Edit
        </Link>
      </td>
    </tr>
  ));

  return (
    <table className="w-full min-w-full table-auto shadow-md rounded-md overflow-hidden">
      <thead>{headerCells && <tr>{headerCells}</tr>}</thead>
      <tbody>{tableBody}</tbody>
    </table>
  );
}

export const page = () => {
  return (
    <div>
      <h1 className="text-lg font-bold text-center py-4">Pipeline Leads</h1>
      <GetLeads />
    </div>
  );
};

export default page;