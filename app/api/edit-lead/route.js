import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const petName = searchParams.get('petName');
  const ownerName = searchParams.get('ownerName');
  const requestBody = await request.json();

  console.log("Wew hit the endpoint!");
  console.log(requestBody.notes); 

 
  const leads = await sql`SELECT * FROM people;`;
  return NextResponse.json({ leads }, { status: 200 });
}
