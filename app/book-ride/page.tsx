
// app/book-ride/page.tsx
'use client';

import { useState } from 'react';

export default function BookRidePage() {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [vehicle, setVehicle] = useState('');

  const handleBooking = () => {
    // Later we will send this data to backend
    console.log('Booking ride:', { pickup, drop, vehicle });
    alert(`Ride booked from ${pickup} to ${drop} by ${vehicle}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg max-w-md w-full space-y-4">
        <h1 className="text-2xl font-bold text-green-400">🧭 Book a Ride</h1>

        <input
          type="text"
          placeholder="Pickup Location"
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
        />

        <input
          type="text"
          placeholder="Drop Location"
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
        />

        <select
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
        >
          <option value="">Select Vehicle</option>
          <option value="Bike">Bike</option>
          <option value="Auto">Auto</option>
          <option value="Mini">Mini</option>
          <option value="SUV">SUV</option>
        </select>

        <button
          onClick={handleBooking}
          className="w-full py-2 bg-green-500 hover:bg-green-600 transition rounded-xl font-semibold text-lg shadow"
        >
          Confirm Ride
        </button>
      </div>
    </div>
  );
}
