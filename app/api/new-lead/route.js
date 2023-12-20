import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const petName = searchParams.get('petName');
  const ownerName = searchParams.get('ownerName');
  console.log(request)
 

 
  const leads = await sql`SELECT * FROM people;`;
  return NextResponse.json({ leads }, { status: 200 });
}