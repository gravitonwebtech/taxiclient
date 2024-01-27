// TaxiDataDisplay.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { servieUrl } from "../env/env";
import "./TaxiDataModel.css";

const MyBooking = () => {
  const [taxiData, setTaxiData] = useState([]);
  const [open, setOpen] = useState(true);

  const localData = localStorage.getItem("userData");
  const [booking, setBooking] = useState([]);
  const [driverData, setDriverData] = useState([]);

  const phoneNumber = "+918210888071";

  const handleWhatsappChat = () => {
    const defaultText = encodeURIComponent(
      "Hello! I wanted to reach out to you."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultText}`;
    window.open(whatsappUrl, "_blank");
  };
  const registrationNumber = "+917909072226";
  const handleCall = () => {
    const telUrl = `tel:${registrationNumber}`;
    window.open(telUrl, "_blank");
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userData") == null) {
      navigate("/loginRegistration");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://taxitravellers.pythonanywhere.com/api/get_taxi/"
        );
        const data = await response.json();

        // Assuming you want to set a single key, change 'item.someKey' to the key you want to use
        const singleKeyData = data.map((item) => item.bookingId);

        // Set the single key data in the booking state
        setBooking(singleKeyData);
        console.log("book---->", singleKeyData);
        setTaxiData(data);
      } catch (error) {
        console.error("Error fetching taxi data:", error);
      }
    };

    fetchData();
  }, []);

  const GetTaxi = () => {
    setOpen(!open);
    alert("Thank you");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(servieUrl.url + "/api/drivers/");
        const data = await response.json();

        // Assuming bookingId is stored in localData variable
        const filteredData = data.filter((item) =>
          booking.includes(item.bookingId)
        );

        setDriverData(filteredData);
      } catch (error) {
        console.error("Error fetching driver data:", error);
      }
    };

    fetchData();
  }, [booking]); // Add booking as a dependency to re-run the effect when it changes

  // Rest of your code...

  // ...

  const BackHandle = () => {
    setOpen(!open);
  };

  //   const filterData=taxiData.filter(item=> item.username ===localData)
  const filteredData = taxiData.filter((item) => item.username === localData);
  console.log(filteredData);

  return (
    <>
      <div className="current-data-bg mt-16">
        {open ? (
          <div className="min-h-screen flex items-center justify-center">
            <div className="current-data bg-white bg-opacity-10 shadow rounded p-5 w-full mx-5 md:mx-14 lg:mx-20 xl:mx-28">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold mb-4 text-[#FFC61A]">
                  Your Booked
                </h2>
                <div className="hidden md:block">
                  <button
                    className="bg-[#25d366] text-white px-4 py-2 font-semibold mr-4 rounded-xl"
                    onClick={handleWhatsappChat}
                  >
                    Chat With Whatsapp
                  </button>
                  <button
                    className="bg-blue-400 text-white px-4 py-2 font-semibold rounded-xl"
                    onClick={handleCall}
                  >
                    Call US
                  </button>
                </div>

                
              </div>

              <div className="block md:hidden">
                  <p>
                    <button
                      className="bg-[#25d366] w-full text-white px-4 py-2 font-semibold rounded-xl"
                      onClick={handleWhatsappChat}
                    >
                      Chat With Whatsapp
                    </button>
                  </p>

                  <p className="mt-4">
                    <button
                      className="bg-blue-400 w-full text-white px-4 py-2 font-semibold rounded-xl"
                      onClick={handleCall}
                    >
                      Call US
                    </button>
                  </p>
              </div>


              <div className="overflow-x-auto ">

              <table className="min-w-full mt-5">
                <thead>
                  <tr className="text-white">
                    <th className="border p-4">Booking Id</th>
                    <th className="border p-4">From Address</th>
                    <th className="border p-4">To Address</th>
                    <th className="border p-4">Date</th>
                    <th className="border p-4">Time</th>
                    <th className="border p-4">Phone</th>
                    <th className="border p-4">Name</th>
                    <th className="border p-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((dataItem, index) => (
                    <tr key={index} className="text-white">
                      <td className="border p-4">{dataItem.bookingId}</td>
                      <td className="border p-4">{dataItem.fromaddress}</td>
                      <td className="border p-4">{dataItem.toaddress}</td>
                      <td className="border p-4">{dataItem.date}</td>
                      <td className="border p-4">{dataItem.time}</td>
                      <td className="border p-4">{dataItem.phone}</td>
                      <td className="border p-4">{dataItem.name}</td>
                      {dataItem.action == "active" ? (
                        <td
                          className="border bg-yellow-600 text-white font-bold rounded-xl p-2"
                          onClick={GetTaxi}
                        >
                          Check Your Taxi
                        </td>
                      ) : dataItem.action == "pending" ? (
                        <td className="border">
                          <div className="flex justify-center">
                            <span className="cursor-pointer bg-red-600 text-white font-bold rounded mx-5 xl:mx-0 px-4 py-1">
                              Pending
                            </span>
                          </div>
                        </td>
                      ) : (
                        <td className="border">
                          <div className="flex justify-center">
                            <span className="cursor-pointer bg-red-600 text-white font-bold rounded mx-5 xl:mx-0 px-4 py-1">
                              Completed
                            </span>
                          </div>
                        </td>
                      )}
                      {/* <td className="border bg-red-600 text-white font-bold rounded-xl p-2">Pending</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>

              </div>
              
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="flex justify-center items-center min-h-screen bg-blue-50">
              <div className="max-w-4xl p-8 bg-white rounded shadow-md relative">
                <Link
                  onClick={BackHandle}
                  className="absolute top-0 left-0 text-blue-500"
                >
                  {/* Back Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </Link>
                <div className="flex justify-between mb-4 ">
                  <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">
                    Your Booking Detail
                  </h2>
                  <div>
                    <button
                      onClick={handleCall}
                      className="border bg-green-600 text-white font-semibold rounded-xl p-2"
                    >
                      Call Us
                    </button>
                    <button
                      onClick={handleWhatsappChat}
                      className="border bg-green-600 text-white font-semibold rounded-xl p-2"
                    >
                      {" "}
                      Chat With WhatsApp
                    </button>
                  </div>
                </div>

                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="py-2 px-4 border">BookindId</th>
                      <th className="py-2 px-4 border">Name</th>
                      <th className="py-2 px-4 border">Address</th>
                      <th className="py-2 px-4 border">Vehicle Model</th>
                      <th className="py-2 px-4 border">Vehicle Number</th>
                      <th className="py-2 px-4 border">Seat Capacity</th>
                      <th className="py-2 px-4 border">Total Amount</th>
                      <th className="py-2 px-4 border">Amount Per Km</th>
                      <th className="py-2 px-4 border">Sell Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {driverData.map((driver) => (
                      <tr key={driver.DriverId} className="bg-blue-50">
                        <td className="py-2 px-4 border">{driver.bookingId}</td>
                        <td className="py-2 px-4 border">
                          {driver.DriverName}
                        </td>
                        <td className="py-2 px-4 border">
                          {driver.DriverAddress}
                        </td>
                        <td className="py-2 px-4 border">
                          {driver.VehicleModel}
                        </td>
                        <td className="py-2 px-4 border">
                          {driver.VehicleNumber}
                        </td>
                        <td className="py-2 px-4 border">
                          {driver.SeatCapacity}
                        </td>
                        <td className="py-2 px-4 border">
                          {driver.TotalAmount}
                        </td>
                        <td className="py-2 px-4 border">
                          {driver.AmountPerKm}
                        </td>
                        <td className="py-2 px-4 border">
                          {driver.SellAmount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyBooking;
