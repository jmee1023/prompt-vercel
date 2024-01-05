"use client";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Lead({ id }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isContacted, setIsContacted] = useState(false);
  const [notes, setNotes] = useState("");
  const router = useRouter();
  const user = id.id;

  const showToastMessage = () => {
    toast.success("Lead Submitted", {
      position: toast.POSITION.TOP_CENTER,
      className: "toast-message",
    });
  };

  const handleContactedChange = () => {
    setIsContacted(!isContacted);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send a POST request to your API endpoint with the notes using fetch
      const response = await fetch("/api/edit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Set appropriate content type
        body: JSON.stringify({ notes, isContacted, user }), // Serialize notes as JSON
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log("Notes saved successfully------:", responseData);
      // Handle successful response (e.g., clear notes, display success message)
      setNotes("");
      showToastMessage();
      setTimeout(() => {
        router.push("/see-leads");
      }, 3000);
    } catch (error) {
      console.error("Error saving notes:", error);
      alert("Error saving notes:" + error.message);
    }
  };
  //Loads in user info on intial render
  useEffect(() => {
    fetch(`/api/get-lead?User=${user}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.leads.rows[0]);
        setLoading(false);
      });
  }, []);
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  if (!data) return <p>No profile data</p>;

  return (
    <table className="w-full table-auto shadow-md rounded-md overflow-hidden">
      <tbody>
        <tr>
          <td className="px-4 py-2 text-left text-gray-400">Name:</td>
          <td className="px-4 py-2 text-left text-gray-100">
            {`${data.prefix} ${data.first_name} ${data.last_name}`}
          </td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-gray-400">Address:</td>
          <td className="px-4 py-2 text-left text-gray-100">{data.address}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-gray-400">City:</td>
          <td className="px-4 py-2 text-left text-gray-100">{data.city}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-gray-400">State:</td>
          <td className="px-4 py-2 text-left text-gray-100">{data.state}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-gray-400">Phone:</td>
          <td className="px-4 py-2 text-left text-gray-100">{data.phone}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-gray-400">
            Estimated Income:
          </td>
          <td className="px-4 py-2 text-left text-gray-100">
            {data.estimated_income}
          </td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-white">Notes:</td>
          <td className="px-4 py-2 text-left text-gray-100">
            <ul>
              {data.notes?.map((note, index) => <li key={index}>{note}</li>) ||
                "No notes available"}
            </ul>
          </td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-left text-gray-100">Is contacted:</td>
          <td className="px-4 py-2 text-left text-gray-100">
            <input
              type="radio"
              id="isContactedYes"
              name="isContacted"
              value="true"
              checked={data.contacted === true}
              onChange={handleContactedChange}
            />
            <label htmlFor="isContactedYes">Yes</label>

            <input
              type="radio"
              id="isContactedNo"
              name="isContacted"
              value="false"
              checked={data.contacted === false}
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
              <button
                type="submit"
                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-4"
              >
                Save Notes
              </button>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

const page = ({ params }) => {
  return (
    <section>
      <div>This is employee {params.id}</div>
      <Lead id={params} />
      <ToastContainer />
    </section>
  );
};

export default page;
