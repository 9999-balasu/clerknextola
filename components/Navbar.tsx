'use client';

import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-400">YokRide</Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/" className="hover:text-green-400">Home</Link>
          <Link href="/book-ride" className="hover:text-green-400">Book Ride</Link>
          <Link href="/track-ride" className="hover:text-green-400">Track Ride</Link>
        </div>

        {/* Auth Section */}
        <div className="space-x-3">
          <SignedOut>
            <SignInButton>
              <button className="bg-green-500 px-4 py-1 rounded hover:bg-green-600">Sign In</button>
            </SignInButton>
            <SignUpButton>
              <button className="bg-blue-500 px-4 py-1 rounded hover:bg-blue-600">Sign Up</button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
