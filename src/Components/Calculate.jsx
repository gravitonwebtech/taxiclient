import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
  Marker,
  Autocomplete,
 
} from "@react-google-maps/api";

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "400px",
};

const mapStyle = {
  width: "100%",
  height: "100%",
};

const controlPanelStyle = {
  position: "absolute",
  top: "20px",
  left: "10px",
  padding: "10px",
  background: "white",
  borderRadius: "5px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const markerPosition = {
  lat: 23.1815,
  lng: 79.9864,
};
function Calculate() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [originAutocomplete, setOriginAutocomplete] = useState(null);
  const [destinationAutocomplete, setDestinationAutocomplete] = useState(null);

  const apiKey = "AIzaSyCP266W0_rbXWYld5T0YHE7NshSL8mc9-g";

  const directionsCallback = (response) => {
    if (response !== null) {
      const route = response.routes[0];
      if (route) {
        const distanceInKm = route.legs[0].distance.value / 1000; // Convert distance to kilometers
        setDistance(route.legs[0].distance.text);
        setDuration(route.legs[0].duration.text);
        setTotalDistance(distanceInKm); // Set the distance in totalDistance
      }
    }
  };

  const handleCalculateRoute = () => {
    if (origin && destination) {
      setDistance("");
      setDuration("");
    }
  };

  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [totalDistance, setTotalDistance] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [amount, setAmount] = useState(0);
  const [tourType, setTourType] = useState("");

  const calculateAmount = () => {
    const amountPer10Km = 100;
    const sameDayCharge = 1200;
    const nextDayLessThan6HoursCharge = 500;
    const nextDayMoreThan6HoursCharge = 1200;

    let calculatedAmount = Math.ceil(totalDistance / 10) * amountPer10Km;

    const startDateTime = new Date(`${startDate}T${startTime}`);

    if (tourType === "single") {
        calculatedAmount += sameDayCharge; // Add same day charge for single tour
    } else if (tourType === "rounded") {
        calculatedAmount *= 2; // Double the amount for rounded tours

        const endDateTime = new Date(`${endDate}T${endTime}`);
        const daysDifference = Math.ceil((endDateTime - startDateTime) / (1000 * 60 * 60 * 24));

        calculatedAmount += sameDayCharge; // Add same day charge for rounded tour

        if (daysDifference >= 1) {
            // If tour extends to the next day(s)
            for (let i = 1; i < daysDifference; i++) {
                const nextDayStartDateTime = new Date(startDateTime);
                nextDayStartDateTime.setDate(nextDayStartDateTime.getDate() + i);

                const nextDayTimeDifferenceInHours =
                    Math.abs(endDateTime - nextDayStartDateTime) / (1000 * 60 * 60);

                if (nextDayTimeDifferenceInHours > 6) {
                    calculatedAmount += nextDayMoreThan6HoursCharge;
                } else {
                    calculatedAmount += nextDayLessThan6HoursCharge;
                }
            }
        }
    }

    setAmount(calculatedAmount);
};

  const handleTourTypeChange = (e) => {
    setTourType(e.target.value);
    // Reset end date and time when tour type changes
    setEndDate("");
    setEndTime("");
  };

  return (
    <div className="mt-56">
      <div className="mt-56">
        <h1 className="text-2xl font-bold mb-4">Google Map Distance</h1>
        <div style={controlPanelStyle}>
          <div className="mb-2 ">
            <label className="block text-sm font-medium  text-gray-700">
              Origin
            </label>
            <Autocomplete
              onLoad={(autocomplete) => {
                // Set the origin autocomplete instance
                setOriginAutocomplete(autocomplete);
                autocomplete.setFields(["formatted_address"]);
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
            <label className="block text-sm font-medium text-gray-700">
              Destination
            </label>
            <Autocomplete
              onLoad={(autocomplete) => {
                // Set the destination autocomplete instance
                setDestinationAutocomplete(autocomplete);
                autocomplete.setFields(["formatted_address"]);
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
        <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
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
                  travelMode: "DRIVING",
                }}
                callback={directionsCallback}
              />
            )}
            <DirectionsRenderer key={JSON.stringify(origin + destination)} />
          </GoogleMap>
        </LoadScript>
      </div>
      <br />
      <label>
        Total Distance (in km):
        <input
          className="border-2 border-gray-300"
          type="number"
          value={distance}
          onChange={(e) => setTotalDistance(parseInt(distance))}
        />
      </label>

      <br />
      <label>
        Start Date:
        <input
          className="border-2 border-gray-300"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label>
        Start Time:
        <input
          className="border-2 border-gray-300"
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </label>
      <br />
      <label>
        Tour Type:
        <select
          className="border-2 border-gray-300"
          value={tourType}
          onChange={handleTourTypeChange}
        >
          <option value="">Select Tour Type</option>
          <option value="rounded">Rounded</option>
          <option value="single">Single</option>
        </select>
      </label>
      <br />
      {tourType === "rounded" && (
        <>
          <label>
            End Date:
            <input
              className="border-2 border-gray-300"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
          <label>
            End Time:
            <input
              className="border-2 border-gray-300"
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </label>
        </>
      )}
      <br />
      <button className="bg-green-500 p-3" onClick={calculateAmount}>
        Calculate Amount
      </button>
      <br />
      <h2>Amount: ${amount}</h2>
    </div>
  );
}

export default Calculate;
