import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const petName = searchParams.get("petName");
  const ownerName = searchParams.get("ownerName");
  const requestBody = await request.json();
  const notes = requestBody.notes;
  const isContacted = requestBody.isContacted;
  const user = requestBody.user;

  const leads = await sql`UPDATE LEADS
  SET notes = array_append(notes, ${notes}),
      contacted = ${isContacted}
  WHERE id = ${user};`;
  return NextResponse.json({ leads }, { status: 200 });
}
