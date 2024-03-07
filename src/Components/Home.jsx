import React, { useState, useEffect } from "react";
import sliderimage1 from "./../Assests/Homepageimages/slider1.jpg";
import sliderimage2 from "./../Assests/Homepageimages/slider2.jpg";
import Car1 from "../Assests/Homepageimages/car1.png";
import Car2 from "../Assests/Homepageimages/car2.png";
import Car3 from "../Assests/Homepageimages/car3.png";
import Car4 from "../Assests/Homepageimages/car4.png";
import Traffic1 from "../Assests/Homepageimages/tariff-1.png";
import Traffic2 from "../Assests/Homepageimages/tariff-2.png";
import Traffic3 from "../Assests/Homepageimages/tariff-3.png";
import Traffic4 from "../Assests/Homepageimages/tariff-4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../Assests/Homepageimages/slider1.jpg";
import slide2 from "../Assests/Homepageimages/slider1.jpg";
import slide3 from "../Assests/Homepageimages/slider1.jpg";
import slide4 from "../Assests/Homepageimages/slider1.jpg";
import slide5 from "../Assests/Homepageimages/slider1.jpg";

import {
  faCheck,
  faBriefcase,
  faCarSide,
  faHotel,
  faPlane,
  faRoad,
  faShoppingCart,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import data from "../data.json";
import { servieUrl } from "../env/env";

export default function Home() {
  const homeSlideSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const isSmallScreen = window.innerWidth <= 768;

  if (isSmallScreen) {
    homeSlideSettings.slidesToShow = 1;
  }
  const images = [sliderimage1, sliderimage2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const [formData, setFormData] = useState({
    fromaddress: "",
    toaddress: "",
    date: "",
    time: "",
    phone: "",
    name: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const [errors, setErrors] = useState({
    fromaddress: "",
    toaddress: "",
    date: "",
    time: "",
    phone: "",
    name: "",
    selectedCar: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const handleShowPopup = () => {
    setShowPopup(true);

    // Adjust the timeout as needed
  };

  // SelectedCar
  const [selectedCar, setSelectedCar] = useState("");

  const handleCarSelect = (carType) => {
    // Log the selected car data to the console
    console.log(`Selected car: ${carType}`);

    setSelectedCar(carType);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    setSearchTerm(query);
    const filteredResults = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleSelect = (selectedItem) => {
    setSearchTerm(selectedItem);
    setSearchResults([]); // Clear search results after selection
  };

  const [searchTermTo, setSearchTermTo] = useState("");
  const [searchResultsTo, setSearchResultsTo] = useState([]);

  const handleSearchTo = (query) => {
    setSearchTermTo(query);
    const filteredResultsTo = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResultsTo(filteredResultsTo);
  };

  const handleSelectTo = (selectedItem) => {
    if (selectedItem === searchTerm) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        toaddress: "To Address cannot be the same as From Address.",
      }));
    } else {
      setSearchTermTo(selectedItem);
      setErrors((prevErrors) => ({
        ...prevErrors,
        toaddress: "",
      }));
    }
    setSearchResultsTo([]); // Clear search results after selection
  };

  // Load saved data from local storage on component mount
  useEffect(() => {
    const savedSearchTerm = localStorage.getItem("searchTerm");
    if (savedSearchTerm) {
      setSearchTerm(savedSearchTerm);
    }

    const savedSearchTermTo = localStorage.getItem("searchTermTo");
    if (savedSearchTermTo) {
      setSearchTermTo(savedSearchTermTo);
    }
  }, []); // Empty dependency array to run this effect only once on mount

  // Save input data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("searchTerm", searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem("searchTermTo", searchTermTo);
  }, [searchTermTo]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const navigate = useNavigate();
  const [bookingId, setBookingId] = useState("");
  useEffect(() => {
    setBookingId(Math.floor(100000 + Math.random() * 900000));
  }, []);

  const userData = localStorage.getItem("userData");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (localStorage.getItem("userData") === null) {
      navigate("/loginRegistration");
      return;
    }

    let isFormValid = true;

    // Validation for From Address
    if (!searchTerm.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fromaddress: "From Address is required.",
      }));
      isFormValid = false;
    }

    if (!selectedCar.trim()) {
      handleShowPopup();
      setErrors((prevErrors) => ({
        ...prevErrors,
        selectedCar: "Please Select a car.",
      }));
      isFormValid = false;
    }

    // Validation for To Address
    if (!searchTermTo.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        toaddress: "To Address is required.",
      }));
      isFormValid = false;
    }

    // Validation for Date
    if (!formData.date) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        date: "Date is required.",
      }));
      isFormValid = false;
    }

    // Validation for Time
    if (!formData.time) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        time: "Time is required.",
      }));
      isFormValid = false;
    }

    // Validation for Phone Number

    const validPhoneNumberRegex = /^[6-9]\d{9}$/;
    if (
      !formData.phone.trim() ||
      !validPhoneNumberRegex.test(formData.phone.trim())
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Enter a Valid Number",
      }));
      isFormValid = false;
    }

    // Validation for Name
    if (!formData.name.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name is required.",
      }));
      isFormValid = false;
    }

    if (isFormValid) {
      const currentBookingId = bookingId;

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Cookie", "csrftoken=tZQ0YhIzvFexGiWzliaB4MH6PoHbq2eu");

      var raw = JSON.stringify({
        fromaddress: searchTerm,
        toaddress: searchTermTo,
        date: formData.date,
        time: formData.time,
        phone: formData.phone,
        name: formData.name,
        username: userData,
        bookingId: currentBookingId,
        typeOfCar: selectedCar,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(servieUrl.url + "api/get_taxi/", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          navigate("/currentData");
        })
        .catch((error) => console.log("error", error));

      setFormData({
        fromaddress: "",
        toaddress: "",
        date: "",
        time: "",
        phone: "",
        name: "",
      });
      setSearchTermTo("");
      setSearchTerm("");

      setErrors({
        fromaddress: "",
        toaddress: "",
        date: "",
        time: "",
        phone: "",
        name: "",
      });
    }
  };

  const currentDate = new Date().toISOString().split("T")[0];
  const onClose = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      {showPopup && (
        <>
          <div className="fixed z-50 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="bg-black p-5 rounded shadow-md">
              <p className="text-red-500 text-center">
                Please select a car before submitting.
              </p>
            </div>
          </div>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="" onClick={onClose}></div>
            <div className="bg-white p-5 text-xl rounded-md shadow-md">
              <p>Please select a car before submitting.</p>
              <button
                className="mt-4 px-4 py-1  bg-blue-500 text-white rounded-md"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
      <div className="home-banner-section mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10 md:pt-20 px-5 md:px-10 xl:px-20">
          <div className="bg-white bg-opacity-10 shadow rounded p-5 md:p-8 md:w-[600px]">
            <form onSubmit={handleSubmit}>
              <h1 className="text-xl md:text-2xl font-bold text-white">
                Book Your Taxi
                <span className="text-[#FFC61A]"> ONLINE</span>
              </h1>
              <div
                className={`grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-5 `}
              >
                <div
                  className={`flex flex-col justify-center p-5 rounded cursor-pointer ${
                    selectedCar === "Mini" ? "bg-[#FFC61A]" : ""
                  }`}
                  onClick={() => handleCarSelect("Mini")}
                >
                  <img src={Car1} alt="Mini"></img>
                  <h1 className="text-sm font-semibold text-center text-white mt-2">
                    Mini
                  </h1>
                </div>
                <div
                  className={`flex flex-col justify-center p-5 rounded cursor-pointer ${
                    selectedCar === "Syden" ? "bg-[#FFC61A]" : ""
                  }`}
                  onClick={() => handleCarSelect("Syden")}
                >
                  <img src={Car2} alt="Syden"></img>
                  <h1 className="text-sm font-semibold text-center text-white mt-2">
                    Syden
                  </h1>
                </div>
                <div
                  className={`flex flex-col justify-center p-5 rounded cursor-pointer ${
                    selectedCar === "SUV" ? "bg-[#FFC61A]" : ""
                  }`}
                  onClick={() => handleCarSelect("SUV")}
                >
                  <img src={Car4} alt="SUV"></img>
                  <h1 className="text-sm font-semibold text-center text-white mt-2">
                    SUV
                  </h1>
                </div>
                          
              </div>
              {errors.selectedCar && (
                <span className="text-red-400 text-sm">
                  {errors.selectedCar}
                </span>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 ">
                <p>
                  <input
                    type="text"
                    id="fromaddress"
                    placeholder="From Address"
                    value={searchTerm}
                    autoComplete="off"
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full text-white bg-transparent border-2 rounded px-5 py-2 placeholder-white focus:outline-none"
                  />
                  {searchResults.length > 0 && (
                    <div className="search-results-container bg-gray-200 mt-2 p-2 max-h-32 overflow-y-auto">
                      <ul className="search-results-list">
                        {searchResults.map((result, index) => (
                          <li
                            key={index}
                            onClick={() => handleSelect(result)}
                            className="cursor-pointer hover:bg-gray-300 px-2 py-1 rounded"
                          >
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {errors.fromaddress && (
                    <span className="text-red-400 text-sm">
                      {errors.fromaddress}
                    </span>
                  )}
                </p>
                <p>
                  <input
                    type="text"
                    id="toaddress"
                    placeholder="To Address"
                    autoComplete="off"
                    value={searchTermTo}
                    onChange={(e) => handleSearchTo(e.target.value)}
                    className="w-full text-white bg-transparent border-2 rounded px-5 py-2 placeholder-white focus:outline-none"
                  />
                  {searchResultsTo.length > 0 && (
                    <div className="search-results-container bg-gray-200 mt-2 p-2 max-h-32 overflow-y-auto">
                      <ul className="search-results-list">
                        {searchResultsTo.map((result, index) => (
                          <li
                            key={index}
                            onClick={() => handleSelectTo(result)}
                            className="cursor-pointer hover:bg-gray-300 px-2 py-1 rounded"
                          >
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {errors.toaddress && (
                    <span className="text-red-400 text-sm">
                      {errors.toaddress}
                    </span>
                  )}
                </p>
                <p>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={currentDate}
                    className="w-full text-white bg-transparent border-2 rounded px-5 py-2 placeholder-white focus:outline-none"
                  />
                  {errors.date && (
                    <span className="text-red-400 text-sm">{errors.date}</span>
                  )}
                </p>
                <p>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full text-white bg-transparent border-2 rounded px-5 py-2 placeholder-white focus:outline-none"
                  />
                  {errors.time && (
                    <span className="text-red-400 text-sm">{errors.time}</span>
                  )}
                </p>

                <p>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => {
                      const numericValue = e.target.value.replace(
                        /[^0-9]/g,
                        ""
                      );
                      if (numericValue !== formData.phone) {
                        setFormData({
                          ...formData,
                          phone: numericValue,
                        });
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          phone: "",
                        }));
                      }
                    }}
                    className="w-full text-white bg-transparent border-2 rounded px-5 py-2 placeholder-white focus:outline-none"
                    maxLength="10"
                  />
                  {errors.phone && (
                    <span className="text-red-400 text-sm">{errors.phone}</span>
                  )}
                </p>

                <p>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full text-white bg-transparent border-2 rounded px-5 py-2 placeholder-white focus:outline-none"
                  />
                  {errors.name && (
                    <span className="text-red-400 text-sm">{errors.name}</span>
                  )}
                </p>
              </div>

              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="px-5 py-2  font-bold border-2 border-[#FFC61A]
                  text-lg rounded-[30px] bg-[#FFC61A] text-white"
                >
                  GET TAXI
                </button>
              </div>
            </form>
          </div>
          <div></div>
        </div>
      </div>

      {/* 2-part */}
      <div className="mt-10 md:mt-20 text-center">
        <span className="text-[#FFC61A] font-bold text-xl"> WELCOME</span>
        <h1 className=" font-bold text-2xl md:text-4xl mt-3">Our Services</h1>
      </div>

      <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 xl:gap-20 mt-10 md:mt-20 mx-5 sm:mx-10 md:mx-20 lg:mx-28">
        <div className="">
          <FontAwesomeIcon
            icon={faPlane}
            className="text-2xl md:text-4xl text-[#FFD03F]"
          />
          <h1 className="mt-5 font-bold text-xl">AIRPORT PICKUP & DROP</h1>
          <p className="mt-3 text-justify text-[#737373]">
            Providing convenient airport pickup and drop services, our reliable
            transportation ensures timely arrivals and departures.
          </p>
        </div>

        <div className="">
          <FontAwesomeIcon
            icon={faBriefcase}
            className="text-2xl md:text-4xl text-[#FFD03F]"
          />
          <h1 className="mt-5 font-bold text-xl">OFFICE PICKUP & DROP</h1>
          <p className="mt-3 text-justify text-[#737373]">
            Efficient office pickup and drop for a seamless daily commute,
            ensuring punctuality and convenience for professionals.
          </p>
        </div>

        <div className="">
          <FontAwesomeIcon
            icon={faHotel}
            className="text-2xl md:text-4xl text-[#FFD03F]"
          />
          <h1 className="mt-5 font-bold text-xl">
            MARRIAGE & PARTY GUEST PICKUP & DROP
          </h1>
          <p className="mt-3 text-justify text-[#737373]">
            Efficient event transportation for seamless logistics, ensuring
            guests' comfort and timely arrivals.
          </p>
        </div>

        <div className="">
          <FontAwesomeIcon
            icon={faTruck}
            className="text-2xl md:text-4xl text-[#FFD03F]"
          />
          <h1 className="mt-5 font-bold text-xl">EVENT TRANSPORTATION</h1>
          <p className="mt-3 text-justify text-[#737373]">
            If you need a comfortable hotel, our operators will book it for you,
            and take a taxi to the address.
          </p>
        </div>

        <div className="">
          <FontAwesomeIcon
            icon={faCarSide}
            className="text-2xl md:text-4xl text-[#FFD03F]"
          />
          <h1 className="mt-5 font-bold text-xl">TRAVEL ANYWHERE IN M.P</h1>
          <p className="mt-3 text-justify text-[#737373]">
            Explore Madhya Pradesh effortlessly with our reliable travel
            services, ensuring comfort, convenience, and safety for your
            journey.
          </p>
        </div>

        <div className="">
          <FontAwesomeIcon
            icon={faRoad}
            className="text-2xl md:text-4xl text-[#FFD03F]"
          />
          <h1 className="mt-5 font-bold text-xl">
            OUTSTATION TRAVELLING (ALL OVER INDIA)
          </h1>
          <p className="mt-3 text-justify text-[#737373]">
            Safe, comfortable outstation travel across India for a memorable
            journey experience.
          </p>
        </div>

        <div className="">
          <FontAwesomeIcon
            icon={faServicestack}
            className="text-2xl md:text-4xl text-[#FFD03F]"
          />
          <h1 className="mt-5 font-bold text-xl">
            HOURLY RENTAL SERVICE WITH DRIVER
          </h1>
          <p className="mt-3 text-justify text-[#737373]">
            Enjoy a flexible hourly rental service with a skilled driver for a
            convenient experience.
          </p>
        </div>

        <div className="">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-2xl md:text-4xl text-[#FFD03F]"
          />
          <h1 className="mt-5 font-bold text-xl">WATERPROOF LUGGAGE CARRIER</h1>
          <p className="mt-3 text-justify text-[#737373]">
            Reliable waterproof luggage carrier for safe and secure
            transportation of belongings in any weather condition.
          </p>
        </div>
      </div>

      {/* 3-part */}
      <div className="mt-10 md:mt-20 text-center">
        <span className="text-[#FFC61A] font-bold text-xl">SEE OUR</span>
        <h1 className=" font-bold text-2xl md:text-4xl mt-3">TARIFFS</h1>
      </div>

      <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10  xl:gap-20 mt-10 md:mt-20 mx-5 sm:mx-10 md:mx-20 lg:mx-28">
        <div className="bg-white border rounded shadow-md  p-5">
          <div className="flex justify-center">
            <img src={Traffic1} alt="" />
          </div>
          <h1 className="mt-5 md:mt-14 font-bold text-xl text-center">
            STANDARD
          </h1>
          <p className="mt-4  text-[#737373] text-center">
            Standard sedan for a drive around the city at your service.
          </p>
          <div class="text-3xl font-bold text-center mt-4">
            &#x20B9;4<span className="text-xl font-bold"> /km </span>
          </div>
        </div>

        <div className="bg-white border rounded shadow-md p-5">
          <div className="flex justify-center">
            <img src={Traffic2} alt="" />
          </div>
          <h1 className="mt-5 md:mt-10 font-bold text-xl text-center">
            BUSINESS
          </h1>
          <p className="mt-4  text-[#737373] text-center">
            Standard sedan for a drive around the city at your service.
          </p>
          <div class="text-3xl font-bold text-center mt-4">
            &#x20B9;3.5<span className="text-xl font-bold"> /km </span>
          </div>
        </div>

        <div className="bg-white border rounded shadow-md  p-5">
          <div className="flex justify-center">
            <img src={Traffic3} alt="" />
          </div>
          <h1 className="mt-5 md:mt-10 font-bold text-xl text-center">VIP</h1>
          <p className="mt-4  text-[#737373] text-center">
            Standard sedan for a drive around the city at your service.
          </p>
          <div class="text-3xl font-bold text-center mt-4">
            &#x20B9;7<span className="text-xl font-bold"> /km </span>
          </div>
        </div>

        <div className="bg-white border rounded shadow-md  p-5">
          <div className="flex justify-center">
            <img src={Traffic4} alt="" />
          </div>
          <h1 className="mt-5 font-bold text-xl text-center">BUS-MINIVAN</h1>
          <p className="mt-4  text-[#737373] text-center">
            Standard sedan for a drive around the city at your service.
          </p>
          <div class="text-3xl font-bold text-center mt-4">
            &#x20B9;5.6<span className="text-xl font-bold"> /km </span>
          </div>
        </div>
      </div>

      {/* 4-part */}
      <div className="mt-10 md:mt-20 text-center">
        <span className="text-[#FFC61A] font-bold text-xl">GET MORE</span>
        <h1 className=" font-bold text-2xl md:text-4xl mt-3">BENEFITS</h1>
      </div>

      <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 xl:gap-14  mt-10 md:mt-20 mx-5 sm:mx-10 md:mx-20 lg:mx-28">
        <div className="flex">
          <div className="bg-[#FFC61A] w-10 h-10 p-5 mr-5 rounded-full flex items-center justify-center">
            <h1 className="text-black font-bold">01.</h1>
          </div>

          <div className="">
            <h1 className="font-bold text-xl">FAST BOOKING</h1>
            <p className="mt-3 text-justify text-[#737373]">
              Nam ac ligula congue, interdum enim sit amet, fermentum nisi.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="bg-[#FFC61A] w-10 h-10 p-5 mr-5 rounded-full flex items-center justify-center">
            <h1 className="text-black font-bold">02.</h1>
          </div>

          <div className="">
            <h1 className="font-bold text-xl">EASY TO USE</h1>
            <p className="mt-3 text-justify text-[#737373]">
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="bg-[#FFC61A] w-10 h-10 p-5 mr-5 rounded-full flex items-center justify-center">
            <h1 className="text-black font-bold">03.</h1>
          </div>

          <div className="">
            <h1 className="font-bold text-xl">GPS SEARCHING</h1>
            <p className="mt-3 text-justify text-[#737373]">
              Ut elementum tincidunt erat vel ornare. Suspendisse ac felis non
              diam pretium.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="bg-[#FFC61A] w-10 h-10 p-5 mr-5 rounded-full flex items-center justify-center">
            <h1 className="text-black font-bold">04.</h1>
          </div>

          <div className="">
            <h1 className="font-bold text-xl">BONUSES FOR RIDE</h1>
            <p className="mt-3 text-justify text-[#737373]">
              Phasellus l et porta tortor dignissim at. Pellentesque gravida
              tortor at euismod mollis.
            </p>
          </div>
        </div>
      </div>

      {/* 5-part */}
      <div className="mt-10  md:mt-20 mx-5 sm:mx-10 md:mx-20 lg:mx-28">
        <span className="text-[#FFC61A] font-bold text-xl">FOR DRIVERS</span>
        <h1 className=" font-bold text-2xl md:text-4xl mt-3">
          DO YOU WANT TO EARN WITH US?
        </h1>
      </div>

      <div className="grid grid-col-1 md:grid-cols-2 gap-5 md:gap-10 xl:gap-20 mt-5 mx-5 sm:mx-10 md:mx-20 lg:mx-28 mb-14">
        <div className="">
          <p className="text-[#737373]  text-lg">
            Quisque sollicitudin feugiat risus, eu posuere ex euismod eu.
            Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien eros
            sodales ante, euismod aliquet nulla metus a mauris.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div className="">
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-[#FFC61A] text-xl font-bold mr-4"
                />
                <span className="text-[#737373]  font-semibold text-lg">
                  Luxury cars
                </span>
              </p>

              <p className="mt-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-[#FFC61A] text-xl font-bold mr-4"
                />
                <span className="text-[#737373]  font-semibold text-lg">
                  No fee
                </span>
              </p>

              <p className="mt-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-[#FFC61A] text-xl font-bold mr-4"
                />
                <span className="text-[#737373]  font-semibold text-lg">
                  Weekly payment
                </span>
              </p>
            </div>

            <div className="">
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-[#FFC61A] text-xl font-bold mr-4"
                />
                <span className="text-[#737373]  font-semibold text-lg">
                  Fixed price
                </span>
              </p>

              <p className="mt-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-[#FFC61A] text-xl font-bold mr-4"
                />
                <span className="text-[#737373]  font-semibold text-lg">
                  Good application
                </span>
              </p>

              <p className="mt-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-[#FFC61A] text-xl font-bold mr-4"
                />
                <span className="text-[#737373]  font-semibold text-lg">
                  Stable orders
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 mx-10 md:mx-20 lg:mx-30">
        <Slider {...homeSlideSettings}>
          <div className="p-4">
            <div
              className="border border-white rounded-tl-3xl rounded-tr-3xl rounded-br-3xl
              p-5 shadow-md bg-[#FFC61A] "
            >
              <div className="flex justify-center ">
                <img src={slide2} alt="slide1" className="rounded-[10%]" />
              </div>
              <div className="text-center text-black">
                <h1 className=" text-2xl mt-5  font-semibold">
                  Agra, Uttar Pradesh
                </h1>
                <p className="mt-5 text-lg font-lg">
                  Home to the magnificent Taj Mahal, Agra is a must-visit
                  destination in India. Explore the grandeur of this UNESCO
                  World Heritage site, along with other architectural marvels
                  like Agra Fort and Fatehpur Sikri.
                </p>
                <p className="mt-5 text-lg font-lg">
                  Full taxi Amount: Rs 5000 (3-day trip)
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div
              className="border border-white rounded-tl-3xl rounded-tr-3xl rounded-br-3xl
               p-5 shadow-md bg-[#FFC61A] p-5"
            >
              <div className="flex justify-center ">
                <img src={slide3} alt="slide1" className="rounded-[10%]" />
              </div>
              <div className="text-center text-black">
                <h1 className=" text-2xl mt-5  font-semibold">
                  Jaipur, Rajasthan
                </h1>
                <p className="mt-5 text-lg font-lg">
                  Known as the Pink City, Jaipur is famous for its rich history,
                  vibrant culture, and stunning architecture. Visit iconic
                  landmarks such as the Hawa Mahal, Amer Fort, and City Palace.
                  Enjoy shopping for traditional handicrafts and textiles in the
                  bustling markets.
                </p>
                <p className="mt-5 text-lg font-lg font-semibold">
                  Full taxi Amount: Rs 5000 (3-day trip)
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div
              className="border border-white rounded-tl-3xl rounded-tr-3xl rounded-br-3xl
              p-5 shadow-md bg-[#FFC61A] "
            >
              <div className="flex justify-center ">
                <img src={slide2} alt="slide1" className="rounded-[10%]" />
              </div>
              <div className="text-center text-black">
                <h1 className=" text-2xl mt-5  font-semibold">
                  Agra, Uttar Pradesh
                </h1>
                <p className="mt-5 text-lg font-lg">
                  Home to the magnificent Taj Mahal, Agra is a must-visit
                  destination in India. Explore the grandeur of this UNESCO
                  World Heritage site, along with other architectural marvels
                  like Agra Fort and Fatehpur Sikri.
                </p>
                <p className="mt-5 text-lg font-lg">
                  Full taxi Amount: Rs 5000 (3-day trip)
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div
              className="border border-white rounded-tl-3xl rounded-tr-3xl rounded-br-3xl
               p-5 shadow-md bg-[#FFC61A] p-5"
            >
              <div className="flex justify-center ">
                <img src={slide3} alt="slide1" className="rounded-[10%]" />
              </div>
              <div className="text-center text-black">
                <h1 className=" text-2xl mt-5  font-semibold">
                  Jaipur, Rajasthan
                </h1>
                <p className="mt-5 text-lg font-lg">
                  Known as the Pink City, Jaipur is famous for its rich history,
                  vibrant culture, and stunning architecture. Visit iconic
                  landmarks such as the Hawa Mahal, Amer Fort, and City Palace.
                  Enjoy shopping for traditional handicrafts and textiles in the
                  bustling markets.
                </p>
                <p className="mt-5 text-lg font-lg font-semibold">
                  Full taxi Amount: Rs 5000 (3-day trip)
                </p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div
              className="border border-white rounded-tl-3xl rounded-tr-3xl rounded-br-3xl
              p-5 shadow-md bg-[#FFC61A] "
            >
              <div className="flex justify-center ">
                <img src={slide2} alt="slide1" className="rounded-[10%]" />
              </div>
              <div className="text-center text-black">
                <h1 className=" text-2xl mt-5  font-semibold">
                  Agra, Uttar Pradesh
                </h1>
                <p className="mt-5 text-lg font-lg">
                  Home to the magnificent Taj Mahal, Agra is a must-visit
                  destination in India. Explore the grandeur of this UNESCO
                  World Heritage site, along with other architectural marvels
                  like Agra Fort and Fatehpur Sikri.
                </p>
                <p className="mt-5 text-lg font-lg">
                  Full taxi Amount: Rs 5000 (3-day trip)
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div
              className="border border-white rounded-tl-3xl rounded-tr-3xl rounded-br-3xl
               shadow-md bg-[#FFC61A] p-5"
            >
              <div className="flex justify-center ">
                <img src={slide3} alt="slide1" className="rounded-[10%]" />
              </div>
              <div className="text-center text-black">
                <h1 className=" text-2xl mt-5  font-semibold">
                  Jaipur, Rajasthan
                </h1>
                <p className="mt-5 text-lg font-lg">
                  Known as the Pink City, Jaipur is famous for its rich history,
                  vibrant culture, and stunning architecture. Visit iconic
                  landmarks such as the Hawa Mahal, Amer Fort, and City Palace.
                  Enjoy shopping for traditional handicrafts and textiles in the
                  bustling markets.
                </p>
                <p className="mt-5 text-lg font-lg font-semibold">
                  Full taxi Amount: Rs 5000 (3-day trip)
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
