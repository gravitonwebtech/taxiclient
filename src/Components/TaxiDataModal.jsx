import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Car1 from "../Assests/Homepageimages/car1.png";
import Car2 from "../Assests/Homepageimages/car2.png";
import Car3 from "../Assests/Homepageimages/car3.png";
import Car4 from "../Assests/Homepageimages/car4.png";
import "./TaxiDataModel.css";

const TaxiDataDisplay = () => {
  const [taxiData, setTaxiData] = useState(null);

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
        const userData = JSON.parse(localStorage.getItem("userData"));

        // Filter data based on user preferences
        const filteredData = data.filter((item) => {
          return Object.entries(userData).every(
            ([key, value]) => item[key] === value
          );
        });

        // Reverse the array to get the latest filtered data
        const reversedData = filteredData.reverse();

        // Assuming the latest filtered data is now the first element
        setTaxiData(reversedData[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
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

  return (
    <>
      <div className="current-data-bg mt-16">
        <div className="flex items-center justify-center h-screen">
          {taxiData ? (
            <div className="current-data bg-white bg-opacity-10 shadow rounded p-5 w-[400px] md:w-[500px] mx-5 md:mx-0">

              <div className="">
                <h2 className="text-2xl font-bold text-[#FFC61A] mb-5">
                  {taxiData.action === "pending" ? "Processing" : "Completed"}
                </h2>
              </div>


              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-5">
                <div className="bg-[#FFC61A] flex flex-col justify-center px-3 py-2 rounded cursor-pointer">
                  <img src={Car1}></img>
                  <h1 className="text-sm font-semibold text-center text-white mt-2">
                    Mini
                  </h1>
                </div>

                <div className="hover:bg-[#FFC61A] flex flex-col justify-center  px-3 py-2 rounded cursor-pointer">
                  <img src={Car2}></img>
                  <h1 className="text-sm font-semibold text-center text-white mt-2">
                    Syden
                  </h1>
                </div>

                <div className="hover:bg-[#FFC61A] flex flex-col justify-center  px-3 py-2 rounded cursor-pointer">
                  <img src={Car4}></img>
                  <h1 className="text-sm font-semibold text-center text-white mt-2">
                    SUV
                  </h1>
                </div>
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
                      {taxiData.bookingId}
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
                      {taxiData.fromaddress}
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
                      {taxiData.toaddress}
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
                      {taxiData.date}
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
                      {taxiData.time}
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
                      {taxiData.phone}
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
                      {taxiData.name}
                    </span>
                  </div>
                </div>

                {taxiData.action === "pending" && (
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
