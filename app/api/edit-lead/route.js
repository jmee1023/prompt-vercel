import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const petName = searchParams.get('petName');
  const ownerName = searchParams.get('ownerName');
  const requestBody = await request.json();
  const notes = requestBody.notes
  const isContacted = requestBody.isContacted
  const user = requestBody.user

  console.log("Wew hit the endpoint!");
  console.log(notes); 
  console.log("Is user contacted?")
  console.log(isContacted)
  console.log("What user?")
  console.log(user)

 
  const leads = await sql`UPDATE LEADS
  SET notes = array_append(notes, ${notes}),
      contacted = ${isContacted}
  WHERE id = ${user};`;
  return NextResponse.json({ leads }, { status: 200 });
}
