import React from 'react';

// Define the type for the 'tracking' prop
interface TrackingMapProps {
  tracking: {
    lat: number;
    lng: number;
    // Add other properties if necessary based on your tracking data structure
  };
}

// Define the TrackingMap component with the 'tracking' prop typed
const TrackingMap: React.FC<TrackingMapProps> = ({ tracking }) => {
  return (
    <div>
      <h2>Tracking Ride</h2>
      <p>Latitude: {tracking.lat}</p>
      <p>Longitude: {tracking.lng}</p>
      {/* You can integrate a map here using the lat and lng */}
    </div>
  );
};

export default TrackingMap;
