import React from 'react'
import { SignedIn,SignedOut,UserButton } from '@clerk/nextjs'
import Link from 'next/link'
export default function NavBar() {
  return (
    <nav className="flex flex-row justify-between flex-wrap border-b border-b-slate-900 p-4">
          <div className="">
          <h2 className="text-amber-300 font-bold text-lg">Imdb Clone</h2>
          </div>
          <div className="flex flex-row gap-9">
            <Link href={"/favorites"}>Favorite</Link>
            <Link href={"/home/search"}>search</Link>
            <SignedIn>
                <UserButton/>
            </SignedIn>
            <SignedOut>
                <li className='list-none'>
                    <Link href={"/sign-in"}>Sign in</Link>
                </li>
            </SignedOut>
          </div>
    </nav>
  )
}
