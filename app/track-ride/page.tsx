

/*'use client'

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Map component to avoid SSR issues
const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function TrackRidePage() {
  const [driverLocation, setDriverLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/driver-location')
        .then((res) => res.json())
        .then((data) => {
          console.log(data); // Log the response
          setDriverLocation(data);
        });
    }, 3000); // Update every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-2xl font-bold text-green-400">🧭 Track Your Ride</h1>
      <Map driverLocation={driverLocation} />
    </div>
  );
}*/

'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function TrackRidePage() {
  const [driverLocation, setDriverLocation] = useState({ lat: 0, lng: 0 });

  // Temporary dummy coordinates
  const pickupLocation = { lat: 17.416, lng: 78.392 };
  const dropLocation = { lat: 17.426, lng: 78.402 };

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/driver-location')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setDriverLocation(data);
        });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-2xl font-bold mb-4 text-green-400">🧭 Track Your Ride</h1>
      <Map
        driverLocation={driverLocation}
        pickupLocation={pickupLocation}
        dropLocation={dropLocation}
        vehicleType="auto" // or "sedan"
      />
    </div>
  );
}
