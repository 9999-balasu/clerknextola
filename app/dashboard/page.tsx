// app/dashboard/page.tsx




/*import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth(); // Ensure auth is really a callable function
  if (!userId) return redirect("/sign-in");

  return <div>Welcome to your dashboard!</div>;
}*/




/*import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

interface Ride {
  _id: ObjectId;
  pickup: string;
  drop: string;
  vehicle: string;
  amount: number;
  paymentId: string;
  createdAt: Date;
}


export default async function DashboardPage() {


  const client = await clientPromise;
  const db = client.db('yokrid');
  const rides = await db.collection<Ride>('rides').find().sort({ createdAt: -1 }).toArray();






  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-3xl w-full text-center transform transition-all duration-500 hover:scale-105">
        <div className="flex justify-center mb-6">
          {/* Inline SVG Car Icon */
          /*<svg
            className="w-20 h-20 text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            <path d="M22 11h-1V7a3 3 0 00-3-3H6A3 3 0 003 7v4H2a1 1 0 000 2h1v5a3 3 0 003 3h1a3 3 0 003-3v-1h8v1a3 3 0 003 3h1a3 3 0 003-3v-5h1a1 1 0 100-2zm-16-4a1 1 0 011-1h10a1 1 0 011 1v4H6V7zm11 11a1 1 0 01-1 1H8a1 1 0 01-1-1v-1h10v1z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to your Dashboard
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          We're glad to have you back!
        </p>
        {/* Example stats cards */
       /* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-blue-800">Stat 1</h2>
            <p className="text-blue-700">
                {/* Book a Ride Button */
       /* <Link href="/book-ride">
          <button className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 transition rounded-xl text-white font-semibold text-lg shadow-md">
            🧭 Book a Ride
          </button>
        </Link>
            </p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-green-800">Stat 2</h2>
            <p className="text-green-700"> 

            <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🚖 Ride Dashboard</h1>
      <div className="grid gap-4">
        {rides.map((ride) => (
          <div
            key={ride._id.toString()}
            className="border rounded-xl p-4 shadow-sm bg-white"
          >
            <p><strong>Pickup:</strong> {ride.pickup}</p>
            <p><strong>Drop:</strong> {ride.drop}</p>
            <p><strong>Vehicle:</strong> {ride.vehicle}</p>
            <p><strong>Amount:</strong> ₹{ride.amount / 100}</p>
            <p><strong>Payment ID:</strong> {ride.paymentId}</p>
            <p className="text-sm text-gray-500">
              <strong>Date:</strong> {new Date(ride.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
     
    </p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-purple-800">Stat 3</h2>
            <p className="text-purple-700">Value 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}*/






/*import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import Link from 'next/link';

interface Ride {
  _id: ObjectId;
  pickup: string;
  drop: string;
  vehicle: string;
  amount: number;
  paymentId: string;
  createdAt: Date;
}



type Props = {
  searchParams: { page?: string };
};


export default async function Dashboard({ searchParams }: Props) {




  const page = parseInt(searchParams.page || '1');
  const limit = 5;
  const skip = (page - 1) * limit;

  const client = await clientPromise;
  const db = client.db('yokrid');

  const totalRides = await db.collection<Ride>('rides').countDocuments();
  const rides = await db
    .collection<Ride>('rides')
    .find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .toArray();

  const totalPages = Math.ceil(totalRides / limit);









  const client = await clientPromise;
  const db = client.db('yokrid');
  const rides = await db.collection<Ride>('rides').find().sort({ createdAt: -1 }).toArray();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 flex flex-col items-center justify-start p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-5xl w-full text-center transform transition-all duration-500 hover:scale-[1.02]">
        {/* Hero Section */
       /* <div className="flex justify-center mb-6">
          <svg
            className="w-20 h-20 text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M5.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            <path d="M22 11h-1V7a3 3 0 00-3-3H6A3 3 0 003 7v4H2a1 1 0 000 2h1v5a3 3 0 003 3h1a3 3 0 003-3v-1h8v1a3 3 0 003 3h1a3 3 0 003-3v-5h1a1 1 0 100-2zm-16-4a1 1 0 011-1h10a1 1 0 011 1v4H6V7zm11 11a1 1 0 01-1 1H8a1 1 0 01-1-1v-1h10v1z" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Welcome to your Dashboard
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We're glad to have you back!
        </p>

        {/* Book a Ride Button */
       /* <Link href="/book-ride">
          <button className="mb-10 px-6 py-3 bg-green-500 hover:bg-green-600 transition rounded-xl text-white font-semibold text-lg shadow-md">
            🧭 Book a Ride
          </button>
        </Link>

        {/* Stats Cards */
       /* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
          <div className="bg-blue-100 p-5 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-blue-800 mb-1">Total Rides</h2>
            <p className="text-blue-700 text-2xl ">{rides.length}</p>
          </div>
          <div className="bg-green-100 p-5 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-green-800 mb-1">Total Earnings</h2>
            <p className="text-green-700 text-2xl">₹{rides.reduce((acc, r) => acc + r.amount, 0) / 100}</p>
          </div>
          <div className="bg-purple-100 p-5 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-purple-800 mb-1">Vehicles Used</h2>
            <p className="text-purple-700 text-2xl">
              {Array.from(new Set(rides.map((r) => r.vehicle))).join(', ')}
            </p>
          </div>
        </div>

        {/* Ride Data List */
      /*  <div className="text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🚖 Recent Rides</h2>

          <a
  href="/api/export-rides"
  className="inline-block mb-4 text-green-600 underline text-sm"
>
  ⬇️ Export Ride History (CSV)
</a>



          <div className="grid gap-4">
            {rides.map((ride) => (
              <div
                key={ride._id.toString()}
                className="border rounded-xl p-4 shadow-sm bg-white text-amber-950"
              >
                <p><strong>Pickup:</strong> {ride.pickup}</p>
                <p><strong>Drop:</strong> {ride.drop}</p>
                <p><strong>Vehicle:</strong> {ride.vehicle}</p>
                <p><strong>Amount:</strong> ₹{ride.amount / 100}</p>
                <p><strong>Payment ID:</strong> {ride.paymentId}</p>
                <p className="text-sm text-gray-500">
                  <strong>Date:</strong> {new Date(ride.createdAt).toLocaleString()}
                </p>


                <Link
  href={`/book-ride?pickup=${ride.pickup}&drop=${ride.drop}&vehicle=${ride.vehicle}`}
  className="text-blue-500 text-sm underline mt-1 inline-block"
>
  🚕 Book Again
</Link>



              </div>
            )
             )}


<div className="flex justify-between mt-8">
  {page > 1 && (
    <Link href={`/dashboard?page=${page - 1}`} className="text-blue-600">
      ⬅️ Previous
    </Link>
  )}
  {page < totalPages && (
    <Link href={`/dashboard?page=${page + 1}`} className="text-blue-600">
      Next ➡️
    </Link>
  )}
</div>







          </div>
        </div>
      </div>
    </div>
  );
}*/





import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import Link from 'next/link';
import { headers } from 'next/headers';

interface Ride {
  _id: ObjectId;
  pickup: string;
  drop: string;
  vehicle: string;
  amount: number;
  paymentId: string;
  createdAt: Date;
}

export default async function Dashboard() {
  const requestHeaders = await headers();
  const someHeader = requestHeaders.get('your-header-name');

  const client = await clientPromise;
  const db = client.db('yokrid');

  const rides = await db
    .collection<Ride>('rides')
    .find()
    .sort({ createdAt: -1 })
    .toArray();

  const totalRides = rides.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 flex flex-col items-center justify-start p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-5xl w-full text-center transform transition-all duration-500 hover:scale-[1.02]">
        {/* Hero Section */}
        <div className="flex justify-center mb-6">
          <svg className="w-20 h-20 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            <path d="M22 11h-1V7a3 3 0 00-3-3H6A3 3 0 003 7v4H2a1 1 0 000 2h1v5a3 3 0 003 3h1a3 3 0 003-3v-1h8v1a3 3 0 003 3h1a3 3 0 003-3v-5h1a1 1 0 100-2zm-16-4a1 1 0 011-1h10a1 1 0 011 1v4H6V7zm11 11a1 1 0 01-1 1H8a1 1 0 01-1-1v-1h10v1z" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to your Dashboard</h1>
        <p className="text-lg text-gray-600 mb-6">We're glad to have you back!</p>

        {/* Book a Ride Button */}
        <Link href="/book-ride">
          <button className="mb-10 px-6 py-3 bg-green-500 hover:bg-green-600 transition rounded-xl text-white font-semibold text-lg shadow-md">
            🧭 Book a Ride
          </button>
        </Link>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-left">
          <div className="bg-blue-100 p-5 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-blue-800 mb-1">Total Rides</h2>
            <p className="text-blue-700 text-2xl">{totalRides}</p>
          </div>
          <div className="bg-green-100 p-5 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-green-800 mb-1">Total Earnings</h2>
            <p className="text-green-700 text-2xl">
              ₹{rides.reduce((acc, r) => acc + r.amount, 0) / 100}
            </p>
          </div>
          <div className="bg-purple-100 p-5 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-purple-800 mb-1">Vehicles Used</h2>
            <p className="text-purple-700 text-2xl">
              {Array.from(new Set(rides.map((r) => r.vehicle))).join(', ')}
            </p>
          </div>
        </div>

        {/* Export CSV Button */}
        <a
          href="/api/export-rides"
          className="inline-block mb-4 text-green-600 underline text-sm"
        >
          ⬇️ Export Ride History (CSV)
        </a>

        {/* Ride Data List */}
        <div className="text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🚖 Recent Rides</h2>
          <div className="grid gap-4">
            {rides.map((ride) => (
              <div
                key={ride._id.toString()}
                className="border rounded-xl p-4 shadow-sm bg-white text-amber-950"
              >
                <p><strong>Pickup:</strong> {ride.pickup}</p>
                <p><strong>Drop:</strong> {ride.drop}</p>
                <p><strong>Vehicle:</strong> {ride.vehicle}</p>
                <p><strong>Amount:</strong> ₹{ride.amount / 100}</p>
                <p><strong>Payment ID:</strong> {ride.paymentId}</p>
                <p className="text-sm text-gray-500">
                  <strong>Date:</strong> {new Date(ride.createdAt).toLocaleString()}
                </p>
                <Link
                  href={`/book-ride?pickup=${ride.pickup}&drop=${ride.drop}&vehicle=${ride.vehicle}`}
                  className="text-blue-500 text-sm underline mt-1 inline-block"
                >
                  🚕 Book Again
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
