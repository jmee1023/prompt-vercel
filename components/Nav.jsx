"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
    const isUserLoggedIn = true

    const [providers, setProviders] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false)

    // useEffect(() => {
    //     (async () => {
    //       const res = await getProviders();
    //       setProviders(res);
    //     })();
    //   }, []);


  return (
    <nav className='flex-between w-full mb-16 pt-3'>
         <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={50}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>PipeLine</p>
      </Link>
      {/*Desdktop nav */}
      <div >
        {isUserLoggedIn ? (
        <div className="flex gap-5 ">
            <Link href="people" className="black_btn">
                New Lead
            </Link>
            <Link href="see-people" className="black_btn">
                See Leads
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">Sign out</button>
            <Link href='/profile'>
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
            
             </div>
        ):(
            <>
            Not signed in
          </>
        
        )}
      </div>

    </nav>
  )
}

export default Nav