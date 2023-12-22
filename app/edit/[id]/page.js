"use client"
import { useState, useEffect } from 'react'
 
function Lead({id}) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [isContacted, setIsContacted] = useState(false)
  const [notes, setNotes] = useState('');
  const user = id.id
  console.log(user)
  
  const handleContactedChange = () => {
    setIsContacted(!isContacted);
    };

  const handleNotesChange = (event) => {
        setNotes(event.target.value);
    }
const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          // Send a POST request to your API endpoint with the notes using fetch
          const response = await fetch('/api/edit-lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, // Set appropriate content type
            body: JSON.stringify({ notes,isContacted, user }), // Serialize notes as JSON
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
          alert('Error saving notes:' + error.message);
        }
      };
 
//Loads in user info on intial render
  useEffect(() => {
    fetch(`/api/get-lead?User=${user}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.leads.rows[0])
        setLoading(false)
        
      })
  }, [])
  console.log(data)
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
 
  return (
    
<table className="w-full table-auto shadow-md rounded-md overflow-hidden">

      <tbody>
        <tr>
          <td className="px-4 py-2 text-left text-gray-100">Name:</td>
          <td className="px-4 py-2 text-left text-gray-100">
            {`${data.prefix} ${data.first_name} ${data.last_name}`}
          </td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-gray-100">Address:</td>
          <td className="px-4 py-2 text-left text-gray-100">{data.address}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-gray-100">City:</td>
          <td className="px-4 py-2 text-left text-gray-100">{data.city}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-gray-100">State:</td>
          <td className="px-4 py-2 text-left text-gray-100">{data.state}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-gray-100">Phone:</td>
          <td className="px-4 py-2 text-left text-gray-100">{data.phone}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-gray-100">Estimated Income:</td>
          <td className="px-4 py-2 text-left text-gray-100">{data.estimated_income}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-gray-100">Notes:</td>
          <td className="px-4 py-2 text-left text-gray-100">
            <ul>
              {data.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-gray-100">Is contacted:</td>
          <td className="px-4 py-2 text-left text-gray-100">{data.contacted.toString()}</td>
          <td className="px-4 py-2 text-left text-gray-100">
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
          <td className="px-4 py-2 text-left text-gray-100">Notes:</td>
          <td className="px-4 py-2 text-left">
            <form onSubmit={handleSubmit}>
              <textarea
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={notes}
                onChange={handleNotesChange}
              />
              <button type="submit" className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-4">
                Save Notes
              </button>
            </form>
          </td>
        </tr>

        
    </tbody>
    </table>
  )
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