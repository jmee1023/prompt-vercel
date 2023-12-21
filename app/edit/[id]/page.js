"use client"
import React from 'react'
import {useState} from 'react'

function Lead({id}){

    
   const details = {
    id: 1,
    first_name: 'JACOBB',
    last_name: 'HESSON',
    prefix: 'MR',
    address: '2000 SW 70TH ST',
    city: 'LINCOLN',
    state: 'NE',
    phone: '4024325484',
    email: 'JAKEHESSON13@YAHOO.COM',
    county: 'LANCASTER',
    estimated_income: 100000,
    contacted: false,
    notes: [ 'New note text', 'New note text number 2' , "Another test", "and one more"]
  }
    const [notes, setNotes] = useState('');
    const [isContacted, setIsContacted] = useState(details.contacted);
    console.log("Is user contact?")
    console.log(isContacted)

    const handleNotesChange = (event) => {
        setNotes(event.target.value);
    }

    const handleContactedChange = () => {
        setIsContacted(!isContacted);
    };
  

  // Implement logic to handle form submission and save notes (e.g., using fetch or a library like Axios)
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a POST request to your API endpoint with the notes using fetch
      const response = await fetch('/api/edit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // Set appropriate content type
        body: JSON.stringify({ notes,isContacted }), // Serialize notes as JSON
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log('Notes saved successfully------:', responseData);
      // Handle successful response (e.g., clear notes, display success message)
      setNotes('');
      alert('Notes saved successfully!');
    } catch (error) {
      console.error('Error saving notes:', error);
      // Handle error (e.g., display error message)
      alert('Error saving notes:' + error.message);
    }
  };

  return (
    <table className="w-full table-auto shadow-md rounded-md overflow-hidden">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2 text-left font-bold text-gray-700">Field</th>
          <th className="px-4 py-2 text-left font-bold text-gray-700">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 text-left text-gray-600">Name:</td>
          <td className="px-4 py-2 text-left text-gray-600">
            {`${details.prefix} ${details.first_name} ${details.last_name}`}
          </td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-gray-600">Address:</td>
          <td className="px-4 py-2 text-left text-gray-600">{details.address}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-gray-600">City:</td>
          <td className="px-4 py-2 text-left text-gray-600">{details.city}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-gray-600">State:</td>
          <td className="px-4 py-2 text-left text-gray-600">{details.state}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-gray-600">Phone:</td>
          <td className="px-4 py-2 text-left text-gray-600">{details.phone}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-gray-600">Estimated Income:</td>
          <td className="px-4 py-2 text-left text-gray-600">{details.estimated_income}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-gray-600">Notes:</td>
          <td className="px-4 py-2 text-left text-gray-600">
            <ul>
              {details.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-gray-600">Is contacted:</td>
          <td className="px-4 py-2 text-left text-gray-600">{details.contacted.toString()}</td>
          <td className="px-4 py-2 text-left text-gray-600">
            <input
              type="radio"
              id="isContactedYes"
              name="isContacted"
              value="true"
              checked={isContacted}
              onChange={handleContactedChange}
            />
            <label htmlFor="isContactedYes">Yes</label>

            <input
              type="radio"
              id="isContactedNo"
              name="isContacted"
              value="false"
              checked={!isContacted}
              onChange={handleContactedChange}
            />
            <label htmlFor="isContactedNo">No</label>
          </td>
        </tr>
        
        <tr>
          <td className="px-4 py-2 text-left text-gray-600">Notes:</td>
          <td className="px-4 py-2 text-left">
            <form onSubmit={handleSubmit}>
              <textarea
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={notes}
                onChange={handleNotesChange}
              />
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-4">
                Save Notes
              </button>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
  );
}


const page = ({params}) => {
  return (
    <section>
    <div>This is employee {params.id}</div>
    <Lead id={(params)} />
   
    </section>
  );
};

export default page