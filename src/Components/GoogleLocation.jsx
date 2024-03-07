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
  const [originAutocomplete, setOriginAutocomplete] = useState(null);
  const [destinationAutocomplete, setDestinationAutocomplete] = useState(null);

  const apiKey = 'AIzaSyCP266W0_rbXWYld5T0YHE7NshSL8mc9-g';

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
    <div className='mt-56'>
      <h1 className="text-2xl font-bold mb-4">Google Map Distance</h1>
      <div style={controlPanelStyle}>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Origin</label>
          <Autocomplete
            onLoad={(autocomplete) => {
              // Set the origin autocomplete instance
              setOriginAutocomplete(autocomplete);
              autocomplete.setFields(['formatted_address']);
            }}
            onPlaceChanged={() => {
              const place = originAutocomplete.getPlace();
              setOrigin(place.formatted_address);
            }}
          >
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </Autocomplete>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Destination</label>
          <Autocomplete
            onLoad={(autocomplete) => {
              // Set the destination autocomplete instance
              setDestinationAutocomplete(autocomplete);
              autocomplete.setFields(['formatted_address']);
            }}
            onPlaceChanged={() => {
              const place = destinationAutocomplete.getPlace();
              setDestination(place.formatted_address);
            }}
          >
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </Autocomplete>
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
