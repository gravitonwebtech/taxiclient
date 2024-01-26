// TaxiDetails.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TaxiDataDisplay = () => {
  const [taxiData, setTaxiData] = useState(null);
  const navigate=useNavigate()
  useEffect(() => {
   
    if (localStorage.getItem("userData") == null) {
      navigate("/loginRegistration");
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://taxitravellers.pythonanywhere.com/api/get_taxi/');
        const data = await response.json();

        const userData = JSON.parse(localStorage.getItem("userData"));

        // Filter data based on user preferences
        const filteredData = data.filter(item => {
          return Object.entries(userData).every(([key, value]) => item[key] === value);
        });

        // Reverse the array to get the latest filtered data
        const reversedData = filteredData.reverse();

        // Assuming the latest filtered data is now the first element
        setTaxiData(reversedData[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const phoneNumber = "+918210888071";

  const handleWhatsappChat = () => {
    const defaultText = encodeURIComponent("Hello! I wanted to reach out to you.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultText}`;
    window.open(whatsappUrl, "_blank");
  };
  const registrationNumber = "+917909072226";
  const handleCall = () => {
    const telUrl = `tel:${registrationNumber}`;
    window.open(telUrl, "_blank");
  };

 

  return (
   <>
    <div className="flex items-center justify-center h-screen bg-black opacity-90">
      {taxiData ? (
        <div className="flex items-center max-w-screen-md bg-white rounded-lg p-8 space-x-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">
              {taxiData.action === 'pending' ? 'Processing' : 'Completed'}
            </h2>
          </div>
          <div className="border-r border-gray-400 h-24"></div>
          <div>
          <p className="mb-2">
              <span className="font-bold">Booking Id:</span> {taxiData.bookingId}
            </p>
            <p className="mb-2">
              <span className="font-bold">From Address:</span> {taxiData.fromaddress}
            </p>
            <p className="mb-2">
              <span className="font-bold">To Address:</span> {taxiData.toaddress}
            </p>
            <p className="mb-2">
              <span className="font-bold">Date:</span> {taxiData.date}
            </p>
            <p className="mb-2">
              <span className="font-bold">Time:</span> {taxiData.time}
            </p>
            <p className="mb-2">
              <span className="font-bold">Phone:</span> {taxiData.phone}
            </p>
            <p className="mb-4">
              <span className="font-bold">Name:</span> {taxiData.name}
            </p>
            {taxiData.action === 'pending' && (
              <>
                <button className='bg-green-600 p-2 mr-4 rounded-xl' onClick={handleWhatsappChat}>
                  Chat With Whatsapp
                </button>
                <button className='bg-green-600 p-2 rounded-xl' onClick={handleCall}>
                  Call US
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </div>
   </>
  );
};




export default TaxiDataDisplay;
