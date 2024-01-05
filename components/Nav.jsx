import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { options } from "@app/api/auth/[...nextauth]/options";

const Nav = async () => {
  const session = await getServerSession(options);

  return (
    <nav className="text-white py-2 px-1 flex items-center justify-between w-full border-b-4 border-gray-500 shadow-md">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={50}
          height={30}
          className="object-contain"
        />
        <p className="font-bold text-3xl tracking-tight text-white uppercase hover:text-gray-400">
          Pipeline
        </p>
      </Link>
      <div className="flex items-center gap-7">
        <Link
          href="/new-lead"
          className="bg-gray-500 hover:bg-gray-700 text-gray-200 font-bold py-2 px-4 rounded"
        >
          New Lead
        </Link>
        <Link
          href="/see-leads"
          className="bg-gray-500 hover:bg-gray-700 text-gray-200 font-sans font-bold py-2 px-4 rounded"
        >
          See Leads
        </Link>
        {session ? (
          <Link
            href="/api/auth/signout?callbackUrl=/"
            className="bg-gray-500 hover:bg-gray-700 text-gray-200 font-sans font-bold py-2 px-4 rounded"
          >
            Logout
          </Link>
        ) : (
          <Link
            href="/api/auth/signin?callbackUrl=/"
            className="bg-gray-500 hover:bg-gray-700 text-gray-200 font-sans font-bold py-2 px-4 rounded"
          >
            Login
          </Link>
        )}

        <Link href="/profile">
          <Image
            src="/assets/images/logo.svg"
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
