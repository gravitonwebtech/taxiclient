// SingleMapComponent.js
import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, Marker, Autocomplete } from '@react-google-maps/api';

const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '400px',
};

const mapStyle = {
  width: '100%',
  height: '100%',
};

const controlPanelStyle = {
  position: 'absolute',
  top: '10px',
  left: '10px',
  padding: '10px',
  background: 'white',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const markerPosition = {
  lat: 23.1815,
  lng: 79.9864,
};

const GoogleLocation = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const apiKey = 'AIzaSyDsowYI0vycxLqTE2Lvr3I9UErnBDo8Sbg';

  const directionsCallback = (response) => {
    if (response !== null) {
      const route = response.routes[0];
      if (route) {
        setDistance(route.legs[0].distance.text);
        setDuration(route.legs[0].duration.text);
      }
    }
  };

  const handleCalculateRoute = () => {
    if (origin && destination) {
      setDistance('');
      setDuration('');
    }
  };

  return (
    <div className='mt-72'>
      <h1 className="text-2xl font-bold mb-4">Google Map Distance</h1>
      <div style={controlPanelStyle}>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Origin</label>
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Destination</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={handleCalculateRoute}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Calculate Route
        </button>
        {distance && duration && (
          <div className="mt-2">
            <p>
              <strong>Distance:</strong> {distance}
            </p>
            <p>
              <strong>Duration:</strong> {duration}
            </p>
          </div>
        )}
      </div>
      <LoadScript googleMapsApiKey={apiKey} libraries={['places']}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={markerPosition}
          zoom={8}
          options={{ styles: mapStyle }}
        >
          <Marker position={markerPosition} />
          {origin && destination && (
            <DirectionsService
              options={{
                destination: destination,
                origin: origin,
                travelMode: 'DRIVING',
              }}
              callback={directionsCallback}
            />
          )}
          <DirectionsRenderer key={JSON.stringify(origin + destination)} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleLocation;
