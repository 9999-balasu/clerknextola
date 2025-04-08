
// app/book-ride/page.tsx
/*'use client';

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
}*/



'use client';

import Script from 'next/script';
import { useState } from 'react';

export default function BookRidePage() {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
    if (!pickup || !drop || !vehicle) {
      alert('Please fill all the fields');
      return;
    }

    setLoading(true);
    const res = await fetch('/api/razorpay', { method: 'POST' });
    const order = await res.json();

    const options: RazorpayOptions = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
      amount: order.amount,
      currency: order.currency,
      name: 'YokRide',
      description: `Ride from ${pickup} to ${drop}`,
      order_id: order.id,
      handler: function (response) {
        alert(`✅ Ride booked!\nPayment ID: ${response.razorpay_payment_id}`);
        console.log({ pickup, drop, vehicle, paymentId: response.razorpay_payment_id });
      },
      prefill: {
        name: 'Yokshitha',
        email: 'yok@example.com',
        contact: '9876543210',
      },
      theme: {
        color: '#22c55e',
      },
    };

    const razor = new (window as typeof window & { Razorpay: any }).Razorpay(options);
    razor.open();
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
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
          disabled={loading}
          className="w-full py-2 bg-green-500 hover:bg-green-600 transition rounded-xl font-semibold text-lg shadow"
        >
          {loading ? 'Processing...' : 'Pay & Confirm Ride'}
        </button>
      </div>
    </div>
  );
}

type RazorpayOptions = {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
};

