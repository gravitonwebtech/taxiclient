import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Car1 from "../Assests/Homepageimages/car1.png";
import Car2 from "../Assests/Homepageimages/car2.png";
import Car3 from "../Assests/Homepageimages/car3.png";
import Car4 from "../Assests/Homepageimages/car4.png";
import "./TaxiDataModel.css";

const TaxiDataDisplay = () => {
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

  const lastFilter = taxiData.filter((item) => item.username === localData);
  const lastFilteredData = lastFilter.slice(-1)[0]; // Get the last item of the filtered array

  // Now you can use lastFilteredData as the last data of the filtered result
  console.log("Last Filtered Data:", lastFilteredData);

  return (
    <>
      <div className="current-data-bg mt-16">
        <div className="flex items-center justify-center h-screen">
          {lastFilteredData ? (
            <div className="current-data bg-white bg-opacity-10 shadow rounded p-5 w-[400px] md:w-[500px] mx-5 md:mx-0">
              <div className="">
                <h2 className="text-2xl font-bold text-[#FFC61A] mb-5">
                  {lastFilteredData.action === "pending"
                    ? "Processing"
                    : "Completed"}
                </h2>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-5">
                {lastFilteredData.typeOfCar === "Mini" ? (
                  <div className="bg-[#FFC61A] flex flex-col justify-center px-3 py-2 rounded cursor-pointer">
                    <img src={Car1} alt="Mini Car" />
                    <h1 className="text-sm font-semibold text-center text-white mt-2">
                      Mini
                    </h1>
                  </div>
                ) : lastFilteredData.typeOfCar === "Syden" ? (
                  <div className="hover:bg-[#FFC61A] flex flex-col justify-center  px-3 py-2 rounded cursor-pointer">
                    <img src={Car2}></img>
                    <h1 className="text-sm font-semibold text-center text-white mt-2">
                      Syden
                    </h1>
                  </div>
                ) : lastFilteredData.typeOfCar === "SUV" ? (
                  <div className="hover:bg-[#FFC61A] flex flex-col justify-center  px-3 py-2 rounded cursor-pointer">
                    <img src={Car4}></img>
                    <h1 className="text-sm font-semibold text-center text-white mt-2">
                      SUV
                    </h1>
                  </div>
                ) : null}
              </div>

              <div className="mt-5">
                <div className="mb-3 grid grid-cols-12">
                  <div className="col-span-5">
                    <span className="font-bold text-md text-white">
                      Booking Id :{" "}
                    </span>
                  </div>
                  <div className="col-span-7">
                    <span className="text-md font-semibold text-white">
                      {lastFilteredData.bookingId}
                    </span>
                  </div>
                </div>

                <div className="mb-3 grid grid-cols-12">
                  <div className="col-span-5">
                    <span className="font-bold text-md text-white">
                      From Address :{" "}
                    </span>
                  </div>
                  <div className="col-span-7">
                    <span className="text-md font-semibold text-white">
                      {lastFilteredData.fromaddress}
                    </span>
                  </div>
                </div>

                <div className="mb-3 grid grid-cols-12">
                  <div className="col-span-5">
                    <span className="font-bold text-md text-white">
                      To Address :{" "}
                    </span>
                  </div>
                  <div className="col-span-7">
                    <span className="text-md font-semibold text-white">
                      {lastFilteredData.toaddress}
                    </span>
                  </div>
                </div>

                <div className="mb-3 grid grid-cols-12">
                  <div className="col-span-5">
                    <span className="font-bold text-md text-white">
                      Date :{" "}
                    </span>
                  </div>
                  <div className="col-span-7">
                    <span className="text-md font-semibold text-white">
                      {lastFilteredData.date}
                    </span>
                  </div>
                </div>

                <div className="mb-3 grid grid-cols-12">
                  <div className="col-span-5">
                    <span className="font-bold text-md text-white">
                      Time :{" "}
                    </span>
                  </div>
                  <div className="col-span-7">
                    <span className="text-md font-semibold text-white">
                      {lastFilteredData.time}
                    </span>
                  </div>
                </div>

                <div className="mb-3 grid grid-cols-12">
                  <div className="col-span-5">
                    <span className="font-bold text-md text-white">
                      Phone :{" "}
                    </span>
                  </div>
                  <div className="col-span-7">
                    <span className="text-md font-semibold text-white">
                      {lastFilteredData.phone}
                    </span>
                  </div>
                </div>

                <div className="mb-5 grid grid-cols-12">
                  <div className="col-span-5">
                    <span className="font-bold text-md text-white">
                      Name :{" "}
                    </span>
                  </div>
                  <div className="col-span-7">
                    <span className="text-md font-semibold text-white">
                      {lastFilteredData.name}
                    </span>
                  </div>
                </div>

                {lastFilteredData.action === "pending" && (
                  <>
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
                  </>
                )}
              </div>
            </div>
          ) : (
            <p className="text-white">Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default TaxiDataDisplay;
