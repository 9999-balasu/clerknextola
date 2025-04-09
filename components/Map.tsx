/*'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

type MapProps = {
  driverLocation: { lat: number; lng: number };
};

const Map = ({ driverLocation }: MapProps) => {
  if (driverLocation.lat === 0 && driverLocation.lng === 0) {
    return <div>Loading...</div>; // Show loading until location is available
  }

  return (
    <MapContainer
      center={[driverLocation.lat, driverLocation.lng] as LatLngExpression}
      zoom={12}
      style={{ width: '100%', height: '400px' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[driverLocation.lat, driverLocation.lng] as LatLngExpression}>
        <Popup>Driver Location</Popup>
      </Marker>


      
    </MapContainer>
  );
};

export default Map;*/



'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression, Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  driverLocation: { lat: number; lng: number };
  pickupLocation: { lat: number; lng: number };
  dropLocation: { lat: number; lng: number };
  vehicleType?: 'auto' | 'sedan'; // Optional
};

// Utility function to load icons
const createIcon = (url: string) =>
  new Icon({
    iconUrl: url,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

const Map = ({
  driverLocation,
  pickupLocation,
  dropLocation,
  vehicleType = 'sedan',
}: MapProps) => {
  if (
    driverLocation.lat === 0 &&
    driverLocation.lng === 0 &&
    pickupLocation.lat === 0 &&
    dropLocation.lat === 0
  ) {
    return <div>Loading...</div>;
  }

  const center: LatLngExpression = [
    driverLocation.lat || pickupLocation.lat,
    driverLocation.lng || pickupLocation.lng,
  ];

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ width: '100%', height: '500px' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Pickup Marker (Green) */}
      <Marker
        position={[pickupLocation.lat, pickupLocation.lng]}
        icon={createIcon('/icons/pickup-green.png')}
      >
        <Popup>Pickup Location</Popup>
      </Marker>

      {/* Drop Marker (Red) */}
      <Marker
        position={[dropLocation.lat, dropLocation.lng]}
        icon={createIcon('/icons/drop-red.png')}
      >
        <Popup>Drop Location</Popup>
      </Marker>

      {/* Driver Marker (Yellow) */}
      <Marker
        position={[driverLocation.lat, driverLocation.lng]}
        icon={createIcon(
          vehicleType === 'auto'
            ? '/icons/auto-yellow.png'
            : '/icons/sedan-yellow.png'
        )}
      >
        <Popup>Driver</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;



