import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { sql } from "@vercel/postgres";

export const options = {
  providers: [
    GitHubProvider({
      profile(profile) {
        console.log("Profile of GitHub: ", profile);

        let userRole = "GitHub User";
        if (profile?.email == "jmee0823@gmail.com") {
          userRole = "admin";
        }

        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GitHub_ID,
      clientSecret: process.env.GitHub_Secret,
    }),
    GoogleProvider({
      profile(profile) {
        console.log("Profile of Google: ", profile);
        let userRole = "Google User";

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_Secret,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username: ",
          type: "text",
          placeholder: "Username",
        },
        password: {
          label: "password: ",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        try {
          //Query for user
          const newUser = await sql`SELECT COUNT(*) AS user_count
            FROM UserCredentials
            WHERE username = ${credentials.username};`;
          //Ensure User exists
          if (
            newUser.rows &&
            newUser.rows.length === 1 &&
            newUser.rows[0].user_count === "1"
            //Exuecute if User exists
          ) {
            console.log("User Exists.");
            const password = await sql`SELECT password
      FROM UserCredentials
      WHERE username = ${credentials.username};`;
            //Get Password from response
            const passwordHash =
              password.rows && password.rows.length === 1
                ? password.rows[0].password
                : null;
            //Check if password returned from DB is same as user provided
            const match = await bcrypt.compare(
              credentials.password,
              passwordHash
            );
            //If they match return object, with appropriate role
            if (match) {
              console.log("Good Pass!");
              newUser["role"] = "admin";
              return newUser;
            }
          } else {
            console.log("User count is not 1.");
          }
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
