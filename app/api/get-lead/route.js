import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('User');
  //const ownerName = searchParams.get('ownerName');ß
  console.log("Here is the id from api")
  console.log(id)
 

 
  const leads = await sql`SELECT * FROM LEADS WHERE ID = ${id};`;
  return NextResponse.json({ leads }, { status: 200 });
}