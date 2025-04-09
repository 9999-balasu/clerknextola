// app/components/RideCompanion.tsx
'use client';

import { useEffect, useState } from 'react';

export default function RideCompanion({ pickup, drop }: { pickup: string; drop: string }) {
  const [tips, setTips] = useState('');
  const [nearbyHelp, setNearbyHelp] = useState('');

  useEffect(() => {
    // Fake AI tip generator (later can integrate AI or maps API)
    const tipList = [
      '🔋 Ensure your phone is charged during the ride.',
      '🛑 Always share your ride status with someone you trust.',
      '📍 Keep an eye on the route. Avoid diversions unless necessary.',
    ];

    setTips(tipList[Math.floor(Math.random() * tipList.length)]);
    setNearbyHelp('🚑 Nearest hospital: Apollo | 🚓 Nearest Police Station: SR Nagar PS');
  }, []);

  return (
    <div className="bg-yellow-50 text-black p-4 mt-4 rounded-xl shadow space-y-2">
      <h3 className="font-bold text-lg">🤖 Smart Ride Companion</h3>
      <p>📍 Route: {pickup} ➡️ {drop}</p>
      <p>💡 Safety Tip: {tips}</p>
      <p>🚨 Emergency Nearby: {nearbyHelp}</p>
    </div>
  );
}
