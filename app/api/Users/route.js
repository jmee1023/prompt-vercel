import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.formData;

    //confirm they exist
    if (!userData?.email || !userData.password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    const hashPassword = await bcrypt.hash(userData.password, 10);
    console.log("Username: ", userData.email);
    console.log("Password: ", userData.password);
    console.log("Name: ", userData.name);
    console.log("Hashed Pass: ", hashPassword);
    const newUser =
      await sql`INSERT INTO UserCredentials (username, password, name)
    VALUES (${userData.email}, ${hashPassword}, ${userData.name});`;

    return NextResponse.json({ message: "User Submitted" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
