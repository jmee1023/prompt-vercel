"use client"
import { useState, useEffect } from 'react'
 
function Lead({id}) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const user = id.id
  console.log(user)
 
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
    
    <div>
      <h1>{data.first_name}</h1>
      <p>{data.bio}</p>
    </div>
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