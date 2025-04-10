// /app/track/[rideId]/page.tsx









'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';  // Correct import
import dynamic from 'next/dynamic';

// Dynamically import the map component
const MapComponent = dynamic(() => import('@/components/TrackingMap'), { ssr: false });

export default function TrackRidePage() {
  const { rideId } = useParams();  // Use useParams to get rideId from the URL
  const [tracking, setTracking] = useState(null);

  useEffect(() => {
    const fetchTracking = async () => {
      const res = await fetch(`/api/get-tracking?rideId=${rideId}`);
      const data = await res.json();
      setTracking(data);
    };

    fetchTracking();

    const interval = setInterval(fetchTracking, 5000); // refresh every 5 sec
    return () => clearInterval(interval);
  }, [rideId]);

  if (!tracking) return <p className="p-4">Loading map...</p>;

  return <MapComponent tracking={tracking} />;
}
