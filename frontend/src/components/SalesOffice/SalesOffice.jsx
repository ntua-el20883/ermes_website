import React, { useState, useEffect, useRef } from 'react';
import './SalesOffice.css';  // Update to the new CSS file
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';

const locations = [
  {
    name: "Los Angeles",
    coordinates: [34.0522, -118.2437],  // LA Coordinates
    description: "The city of angels, full of energy and culture."
  },
  {
    name: "Toronto",
    coordinates: [43.6532, -79.3832],  // Toronto Coordinates
    description: "Canada's largest city with a diverse culture and history."
  }
];

// Countdown function
const calculateTimeLeft = () => {
  const targetDate = new Date("2024-12-31T00:00:00"); // Change to your desired target date
  const currentDate = new Date();
  const difference = targetDate - currentDate;
  
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

const SalesOffice = () => {
  const [category, setCategory] = useState("All");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [zoomLevel, setZoomLevel] = useState(1); // Zoomed out more to start with (global view)
  const circleRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Map zoom event handler
  const HandleMapZoom = () => {
    const map = useMap();
    map.on('zoomend', () => {
      const zoom = map.getZoom();
      setZoomLevel(zoom); // Update zoom level state
    });

    return null;
  };

  return (
    <div className="sales-office" id="sales-office">
      <h1>Find our Sales Offices in...</h1>
      <p className="sales-office-text">
        Explore our global sales offices! Click on the pins to discover more about our locations in Los Angeles and Toronto.
      </p>

      {/* Announcement for Europe */}
      <div className="announcement">
        <h2>Big news! A new office is coming to Europe!</h2>
        <p>Stay tuned for the big reveal...</p>
        <div className="countdown">
          <p>Opening in:</p>
          <div>
            <span>{timeLeft.days} days</span> 
            <span>{timeLeft.hours} hours</span> 
            <span>{timeLeft.minutes} minutes</span> 
            <span>{timeLeft.seconds} seconds</span>
          </div>
        </div>
      </div>

      {/* Map container */}
      <MapContainer 
        center={[40, 0]} // Center the map on the world (equator, prime meridian)
        zoom={zoomLevel} 
        style={{ height: '400px', width: '100%' }}
        minZoom={1.3} // Allow zooming out to level 1 for global view
        maxZoom={10} // Set a max zoom limit for closer zooming
        maxBounds={[
          [-90, -180], // Minimum latitude and longitude (South-West)
          [90, 180]    // Maximum latitude and longitude (North-East)
        ]}
        maxBoundsViscosity={1.0} // Prevent panning beyond the bounds
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Handle zooming */}
        <HandleMapZoom />

        {/* Existing markers for LA and Toronto */}
        {locations.map((location, index) => (
          <Marker key={index} position={location.coordinates} icon={new L.Icon({
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          })}>
            <Popup>
              <h3>{location.name}</h3>
              <p>{location.description}</p>
            </Popup>
          </Marker>
        ))}

        {/* Conditionally display glowing circle based on zoom level */}
        {zoomLevel <= 6 && (
          <Circle
            ref={circleRef}
            center={[50.1109, 8.6821]} // Set the center to Europe (around Germany)
            radius={3000000} // Larger radius to cover Europe
            color="yellow" 
            fillColor="yellow" 
            fillOpacity={0.2}
          >
            <Popup>
              <h3>New office coming soon in Europe!</h3>
              <p>Can you guess where?</p>
            </Popup>
          </Circle>
        )}

      </MapContainer>

      <hr />
    </div>
  );
};

export default SalesOffice;
