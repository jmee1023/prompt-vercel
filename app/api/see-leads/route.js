import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const petName = searchParams.get('petName');
  const ownerName = searchParams.get('ownerName');
 

 
  const leads = await sql`SELECT * FROM people;`;
  return NextResponse.json({ leads }, { status: 200 });
}

async function Quizzes(){
  const quizzes = await sql `SELECT * FROM quizzes`;
  //console.log(quizzes)
  return (
    <ul>
      {quizzes.map((quiz) => (
        <li key={quiz.quiz_id} className="underline">
          <Link href={`/quiz/${quiz.quiz_id}`}>Quiz: {quiz.quiz_id}</Link>
          </li>
      ))}
    </ul>
  );
}
