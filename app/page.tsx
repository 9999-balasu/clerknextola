// app/page.tsx




/*'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';

export default function Home() {
  const router = useRouter();
  const { isSignedIn } = useUser();

  // Redirect if the user is already signed in
  useEffect(() => {
    if (isSignedIn) {
      router.push('/dashboard');
    }
  }, [isSignedIn, router]);

  return (
    <div className="p-4">
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <p>You're logged in!</p>
        <UserButton />
      </SignedIn>
    </div>
  );
}*/



/*'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';

export default function Home() {
  const router = useRouter();
  const { isSignedIn } = useUser();

  // Redirect if the user is already signed in
  useEffect(() => {
    if (isSignedIn) {
      router.push('/dashboard');
    }
  }, [isSignedIn, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-green-400 drop-shadow-lg">
          Your Ride, Your Way
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Book rides in seconds. Reliable. Affordable. Seamless.
        </p>

        <SignedOut>
          <SignInButton>
            <button className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 transition rounded-xl text-white font-semibold text-lg shadow-md">
              Sign In to Get Started
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <div className="space-y-3">
            <p className="text-xl font-medium text-green-300">You're logged in!</p>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </div>
  );
}*/


'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';

export default function Home() {
  const router = useRouter();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/dashboard');
    }
  }, [isSignedIn, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-6 py-10">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold text-green-400 drop-shadow-lg">
          YokRide
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 italic">
          "Your Journey, Our Drive"
        </p>

        <img
          src="/ride-illustration.png"
          alt="Ride Illustration"
          className="w-full max-w-md mx-auto mt-6 rounded-xl shadow-lg"
        />

        <SignedOut>
          <SignInButton>
            <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 transition rounded-xl text-white font-semibold text-lg shadow-md">
              Sign In to Get Started
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <div className="space-y-3 mt-6">
            <p className="text-xl font-medium text-green-300">You're logged in!</p>
            <UserButton />
          </div>
        </SignedIn>
      </div>

      {/* Vehicle categories and pricing */}
      <div className="mt-12 grid gap-6 md:grid-cols-3 w-full max-w-5xl">
        {[
          { type: 'Mini', price: '₹10/km', color: 'bg-blue-500' },
          { type: 'Sedan', price: '₹15/km', color: 'bg-green-500' },
          { type: 'SUV', price: '₹20/km', color: 'bg-yellow-500' }
        ].map(({ type, price, color }) => (
          <div key={type} className={`p-6 rounded-xl shadow-lg text-center ${color}`}>
            <h2 className="text-2xl font-bold text-white">{type}</h2>
            <p className="mt-2 text-lg text-white">Starts at {price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


