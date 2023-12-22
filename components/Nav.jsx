"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Nav = () => {
  const isUserLoggedIn = true;

  return (
    <nav className="bg-gray-500 text- py-4 px-6 flex items-center justify-between w-full">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={50}
          height={30}
          className="object-contain"
        />
        <p className="font-bold text-3xl tracking-tight text-white uppercase">
          Pipeline
        </p>
      </Link>
      {isUserLoggedIn ? (
        <div className="flex items-center gap-4">
          <Link href="/new-lead" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            New Lead
          </Link>
          <Link href="/see-leads" className="bg-blue-500 hover:bg-blue-700 text-white font-sans font-bold py-2 px-4 rounded">
            See Leads
          </Link>
          <button
            type="button"
            className="bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-500"
          >
            Sign out
          </button>
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
      ) : (
        <p className="text-sm">Not signed in</p>
      )}
    </nav>
  );
};

export default Nav;