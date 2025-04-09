/*'use client';

import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */
        /*<Link href="/" className="text-2xl font-bold text-green-400">YokRide</Link>

        {/* Navigation Links */
        /*<div className="space-x-6">
          <Link href="/" className="hover:text-green-400">Home</Link>
          <Link href="/book-ride" className="hover:text-green-400">Book Ride</Link>
          <Link href="/track-ride" className="hover:text-green-400">Track Ride</Link>
        </div>

        {/* Auth Section */
        /*<div className="space-x-3">
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
*/



/*'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { Menu, X } from 'lucide-react'; // Optional: Hamburger Icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */
        /*<Link href="/" className="text-2xl font-bold text-green-400">
          YokRide
        </Link>

        {/* Hamburger Icon (Mobile) */
        /*<div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Links (Desktop) */
       /* <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-green-400">Home</Link>
          <Link href="/book-ride" className="hover:text-green-400">Book Ride</Link>
          <Link href="/track-ride" className="hover:text-green-400">Track Ride</Link>

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

      {/* Mobile Menu */
     /* {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block hover:text-green-400" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/book-ride" className="block hover:text-green-400" onClick={() => setMenuOpen(false)}>Book Ride</Link>
          <Link href="/track-ride" className="block hover:text-green-400" onClick={() => setMenuOpen(false)}>Track Ride</Link>

          <div className="pt-2 space-x-2">
            <SignedOut>
              <SignInButton>
                <button className="bg-green-500 w-full py-2 rounded hover:bg-green-600">Sign In</button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-blue-500 w-full py-2 rounded hover:bg-blue-600">Sign Up</button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
}*/


'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-400">
          YokRide
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-green-400">Home</Link>
          <Link href="/book-ride" className="hover:text-green-400">Book Ride</Link>
          <Link href="/track-ride" className="hover:text-green-400">Track Ride</Link>

          <SignedOut>
            <div className="flex gap-x-3">
              <SignInButton>
                <button className="bg-green-500 px-4 py-1 rounded hover:bg-green-600">Sign In</button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-blue-500 px-4 py-1 rounded hover:bg-blue-600">Sign Up</button>
              </SignUpButton>
            </div>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block hover:text-green-400" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/book-ride" className="block hover:text-green-400" onClick={() => setMenuOpen(false)}>Book Ride</Link>
          <Link href="/track-ride" className="block hover:text-green-400" onClick={() => setMenuOpen(false)}>Track Ride</Link>

          <div className="pt-3 space-y-3">
            <SignedOut>
              <SignInButton>
                <button className="bg-green-500 w-full py-2 rounded hover:bg-green-600">Sign In</button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-blue-500 w-full py-2 rounded hover:bg-blue-600">Sign Up</button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
}
