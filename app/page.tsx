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


/*'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';






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



<img
          src="/image1.jpg"
          alt="Ride Illustration"
          className="w-full max-w-md mx-auto mt-6 rounded-xl shadow-lg"
        />
<img
          src="/image2.jpg"
          alt="Ride Illustration"
          className="w-full max-w-md mx-auto mt-6 rounded-xl shadow-lg"
        />
        <img
          src="/image3.jpg"
          alt="Ride Illustration"
          className="w-full max-w-md mx-auto mt-6 rounded-xl shadow-lg"
        />
        <img
          src="/image4.jpg"
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

      {/* Vehicle categories and pricing */
     /* <div className="mt-12 grid gap-6 md:grid-cols-3 w-full max-w-5xl">
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
}*/





/*'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Home() {
  const router = useRouter();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/dashboard');
    }
  }, [isSignedIn, router]);

  const heroImages = [
    { src: '/ride-illustration.png', title: 'Seamless Booking Experience' },
    { src: '/image1.jpg', title: 'Explore Cities with YokRide' },
    { src: '/image2.jpg', title: 'Comfortable Rides, Anytime' },
    { src: '/image3.jpg', title: 'Reliable and Affordable' },
    { src: '/image4.jpg', title: 'Your Daily Commute, Upgraded' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-4 py-10 space-y-10">
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold text-green-400 drop-shadow-lg">
          YokRide
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 italic">
          "Your Journey, Our Drive"
        </p>
      </div>

      {/* Full-width images with captions */
      /*<div className="w-full space-y-10">
        {heroImages.map(({ src, title }) => (
          <div key={src} className="w-full">
            <img
              src={src}
              alt={title}
              className="w-full max-h-[600px] object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <h2 className="mt-4 text-center text-2xl font-semibold text-green-300">{title}</h2>
          </div>
        ))}
      </div>





{/* Bikes section */
/*<div className="w-full max-w-5xl mt-12">
  <h2 className="text-3xl font-bold text-green-400 text-center mb-6">Popular Bike Rides</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      { src: '/bike1.jpg', title: 'SpeedX Electric Bike' },
      { src: '/bike2.jpg', title: 'Roadster Classic Bike' }
    ].map(({ src, title }) => (
      <div key={src} className="rounded-xl overflow-hidden shadow-lg bg-gray-900">
        <img
          src={src}
          alt={title}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
        <h3 className="text-xl font-semibold text-center text-green-300 mt-4 mb-4">{title}</h3>
      </div>
    ))}
  </div>
</div>






      {/* Auth Buttons */
     /* <div className="text-center">
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

      {/* Vehicle categories and pricing */
     /* <div className="mt-12 grid gap-6 md:grid-cols-3 w-full max-w-5xl">
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



{/* Footer */
/*<footer className="mt-24 w-full bg-gray-900 text-white py-10 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

    {/* Logo and tagline */
   /* <div>
      <h1 className="text-3xl font-bold text-green-400">YokRide</h1>
      <p className="mt-2 text-gray-400">Your Journey, Our Drive</p>
    </div>

    {/* Navigation */
    /*<div>
      <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
      <ul className="space-y-2 text-gray-300">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/book">Book a Ride</Link></li>
        <li><Link href="/about">About Us</Link></li>
      </ul>
    </div>

    {/* Socials */
   /* <div>
      <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-green-400 transition"><i className="fab fa-facebook-f"></i> Facebook</a>
        <a href="#" className="hover:text-green-400 transition"><i className="fab fa-twitter"></i> Twitter</a>
        <a href="#" className="hover:text-green-400 transition"><i className="fab fa-instagram"></i> Instagram</a>
      </div>
    </div>
  </div>

  {/* Bottom copyright */
 /* <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
    © {new Date().getFullYear()} YokRide. All rights reserved.
  </div>
</footer>





    </div>
  );
}*/






'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  const router = useRouter();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/dashboard');
    }
  }, [isSignedIn, router]);

  const heroImages = [
    { src: '/ride-illustration.png', title: 'Seamless Booking Experience' },
    { src: '/image1.jpg', title: 'Explore Cities with YokRide' },
    { src: '/image2.jpg', title: 'Comfortable Rides, Anytime' },
    { src: '/image3.jpg', title: 'Reliable and Affordable' },
    { src: '/image4.jpg', title: 'Your Daily Commute, Upgraded' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-4 py-10 space-y-10">
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold text-green-400 drop-shadow-lg">
          YokRide
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 italic">
          "Your Journey, Our Drive"
        </p>
      </div>

      {/* Full-width images with captions */}
      <div className="w-full space-y-10">
        {heroImages.map(({ src, title }) => (
          <div key={src} className="w-full">
            <Image
              src={src}
              alt={title}
              width={1200}
              height={600}
              className="w-full max-h-[600px] object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              quality={100}
            />
            <h2 className="mt-4 text-center text-2xl font-semibold text-green-300">{title}</h2>
          </div>
        ))}
      </div>

      {/* Bikes section */}
      <div className="w-full max-w-5xl mt-12">
        <h2 className="text-3xl font-bold text-green-400 text-center mb-6">Popular Bike Rides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { src: '/bike1.jpg', title: 'SpeedX Electric Bike' },
            { src: '/bike2.jpg', title: 'Roadster Classic Bike' }
          ].map(({ src, title }) => (
            <div key={src} className="rounded-xl overflow-hidden shadow-lg bg-gray-900">
              <Image
                src={src}
                alt={title}
                width={800}
                height={256}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                quality={100}
              />
              <h3 className="text-xl font-semibold text-center text-green-300 mt-4 mb-4">{title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Auth Buttons */}
      <div className="text-center">
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

      {/* Footer */}
      <footer className="mt-24 w-full bg-gray-900 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo and tagline */}
          <div>
            <h1 className="text-3xl font-bold text-green-400">YokRide</h1>
            <p className="mt-2 text-gray-400">Your Journey, Our Drive</p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/dashboard">Dashboard</Link></li>
              <li><Link href="/book">Book a Ride</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex flex-col space-y-2 text-gray-300">
              <a href="#" className="hover:text-green-400 transition"><i className="fab fa-facebook-f mr-2" /> Facebook</a>
              <a href="#" className="hover:text-green-400 transition"><i className="fab fa-twitter mr-2" /> Twitter</a>
              <a href="#" className="hover:text-green-400 transition"><i className="fab fa-instagram mr-2" /> Instagram</a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} YokRide. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

