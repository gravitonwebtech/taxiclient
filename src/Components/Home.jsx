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

export default function Home() {
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
    const savedData = localStorage.getItem('formData');
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
  });

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
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);
const navigate = useNavigate()
const [bookingId,setBookingId]=useState('')
useEffect(() => {
  setBookingId(Math.floor(100000 + Math.random() * 900000));
}, []);
const userData=localStorage.getItem('userData')
  const handleSubmit = (e) => { 
    e.preventDefault();
   
    if (localStorage.getItem("userData") === null) {
      navigate("/loginRegistration");
      return;
    }
    
    let isFormValid = true;

    // Validation for From Address
    if (!formData.fromaddress.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fromaddress: "From Address is required.",
      }));
      isFormValid = false;
    }

    // Validation for To Address
    if (!formData.toaddress.trim()) {
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

    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.trim())) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Please enter a valid 10-digit number.",
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
        "fromaddress": formData.fromaddress,
        "toaddress": formData.toaddress,
        "date": formData.date,
        "time": formData.time,
        "phone": formData.phone,
        "name":formData.name,
        "username": userData,
        'bookingId':currentBookingId
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("https://taxitravellers.pythonanywhere.com/api/get_taxi/", requestOptions)
        .then(response => response.text())
        .then(result => {console.log(result)
        navigate('/currentData')
        })
        .catch(error => console.log('error', error));

      setFormData({
        fromaddress: "",
        toaddress: "",
        date: "",
        time: "",
        phone: "",
        name: "",
      });

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

  return (
    <>
      {/* <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slider ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition duration-1000 ease-in-out ${
              index === currentImageIndex
                ? "opacity-100 scale-125"
                : "opacity-0 scale-100"
            }`}
          />
        ))}
      </div>
      <div
        className="absolute grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 pt-24 md:pt-32 px-5 md:px-10 xl:px-20"
      >
        <div className="bg-white shadow rounded p-5 md:p-8 md:w-[600px]">
            <form onSubmit={handleSubmit}>
              <h1 className="text-center text-xl md:text-2xl font-bold">
                GET TAXI
                <span className="text-[#FFC61A]"> ONLINE</span>
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-5">
                <div className="bg-[#FFC61A] flex justify-center p-5 rounded">
                  <img src={Car1}></img>
                </div>

                <div className="hover:bg-[#FFC61A] flex justify-center p-5 rounded">
                  <img src={Car2}></img>
                </div>

                <div className="hover:bg-[#FFC61A] flex justify-center p-5 rounded">
                  <img src={Car3}></img>
                </div>

                <div className="hover:bg-[#FFC61A] flex justify-center p-5 rounded">
                  <img src={Car4}></img>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mt-5 md:mt-10">
                <p>
                  <input
                    type="text"
                    id="fromaddress"
                    name="fromaddress"
                    placeholder="From Address..."
                    value={formData.fromaddress}
                    onChange={handleInputChange}
                    className={`w-full text-gray-500 border-2 border-gray-100 rounded px-5 py-2 ${
                      formErrors.fromaddress && "border-red-500"
                    }`}
                  />
                  {formErrors.fromaddress && (
                    <span className="text-red-500">
                      {formErrors.fromaddress}
                    </span>
                  )}
                </p>
                <p>
                  <input
                    type="text"
                    id="toaddress"
                    name="toaddress"
                    placeholder="To Address...."
                    value={formData.toaddress}
                    onChange={handleInputChange}
                    className={`w-full text-gray-500 border-2 border-gray-100 rounded px-5 py-2 ${
                      formErrors.toaddress && "border-red-500"
                    }`}
                  />
                  {formErrors.toaddress && (
                    <span className="text-red-500">{formErrors.toaddress}</span>
                  )}
                </p>
                <p>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full text-gray-500 border-2 border-gray-100 rounded px-5 py-2 ${
                      formErrors.phone && "border-red-500"
                    }`}
                  />
                  {formErrors.phone && (
                    <span className="text-red-500">{formErrors.phone}</span>
                  )}
                </p>
                <p>
                  <input
                    type="text"
                    id="datetime"
                    name="datetime"
                    placeholder="Date and Time"
                    value={formData.datetime}
                    onChange={handleInputChange}
                    className={`w-full text-gray-500 border-2 border-gray-100 rounded px-5 py-2 ${
                      formErrors.datetime && "border-red-500"
                    }`}
                  />
                  {formErrors.datetime && (
                    <span className="text-red-500">{formErrors.datetime}</span>
                  )}
                </p>
              </div>

              {formErrors.general && (
                <div className="text-red-500 text-center mt-2">
                  {formErrors.general}
                </div>
              )}

              <div className="flex justify-center mt-5 md:mt-10">
                <button
                  type="submit"
                  className="px-5 py-2 text-black font-bold border-2 border-gray-100 
        text-lg rounded-[30px] bg-[#FFC61A]"
                >
                  GET TAXI
                </button>
              </div>
            </form>
          </div>
      </div>
      </div> */}

      {/* banner */}
      {/* <div className="home-banner-section mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10 md:pt-20 px-5 md:px-10 xl:px-20">
          <div className="bg-white shadow rounded p-5 md:p-8 md:w-[600px]">
            <form onSubmit={handleSubmit}>
              <h1 className="text-center text-xl md:text-2xl font-bold">
                GET TAXI
                <span className="text-[#FFC61A]"> ONLINE</span>
              </h1>
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-5">
                <div className="bg-[#FFC61A] flex flex-col justify-center p-5 rounded cursor-pointer">
                  <img src={Car1}></img>
                  <h1 className="text-sm font-semibold text-center mt-2">
                    Mini
                  </h1>
                </div>

                <div className="hover:bg-[#FFC61A] flex flex-col justify-center p-5 rounded cursor-pointer">
                  <img src={Car2}></img>
                  <h1 className="text-sm font-semibold text-center mt-2">
                    Syden
                  </h1>
                </div>

                <div className="hover:bg-[#FFC61A] flex justify-center p-5 rounded">
                  <img src={Car3}></img>
                </div>

                <div className="hover:bg-[#FFC61A] flex flex-col justify-center p-5 rounded cursor-pointer">
                  <img src={Car4}></img>
                  <h1 className="text-sm font-semibold text-center mt-2">
                    SUV
                  </h1>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 md:mt-10">
                <p>
                  <input
                    type="text"
                    id="fromaddress"
                    name="fromaddress"
                    placeholder="From Address..."
                    value={formData.fromaddress}
                    onChange={handleInputChange}
                    className="w-full text-gray-500 border-2 border-gray-100 rounded px-5 py-2"
                  />
                  {errors.fromaddress && (
                    <span className="text-red-500 text-sm">
                      {errors.fromaddress}
                    </span>
                  )}
                </p>
                <p>
                  <input
                    type="text"
                    id="toaddress"
                    name="toaddress"
                    placeholder="To Address...."
                    value={formData.toaddress}
                    onChange={handleInputChange}
                    className="w-full text-gray-500 border-2 border-gray-100 rounded px-5 py-2"
                  />
                  {errors.toaddress && (
                    <span className="text-red-500 text-sm">
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
                    className="w-full text-gray-500 border-2 border-gray-100 rounded px-5 py-2"
                  />
                  {errors.date && (
                    <span className="text-red-500 text-sm">{errors.date}</span>
                  )}
                </p>
                <p>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full text-gray-500 border-2 border-gray-100 rounded px-5 py-2"
                  />
                  {errors.time && (
                    <span className="text-red-500 text-sm">{errors.time}</span>
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
                      setFormData({
                        ...formData,
                        phone: numericValue,
                      });
                    }}
                    className="w-full text-gray-500 border-2 border-gray-100 rounded px-5 py-2"
                    maxLength="10"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">{errors.phone}</span>
                  )}
                </p>
              </div>
              <div className="flex justify-center mt-5 md:mt-10">
                <button
                  type="submit"
                  className="px-5 py-2 text-black font-bold border-2 border-gray-100 
                  text-lg rounded-[30px] bg-[#FFC61A]"
                >
                  GET TAXI
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}

      <div className="home-banner-section mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10 md:pt-20 px-5 md:px-10 xl:px-20">
          <div className="bg-white bg-opacity-10 shadow rounded p-5 md:p-8 md:w-[600px]">
            <form onSubmit={handleSubmit}>
              <h1 className="text-xl md:text-2xl font-bold text-white">
                Book Your Taxi
                <span className="text-[#FFC61A]"> ONLINE</span>
              </h1>
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-5">
                <div className="bg-[#FFC61A] flex flex-col justify-center p-5 rounded cursor-pointer">
                  <img src={Car1}></img>
                  <h1 className="text-sm font-semibold text-center text-white mt-2">
                    Mini
                  </h1>
                </div>

                <div className="hover:bg-[#FFC61A] flex flex-col justify-center p-5 rounded cursor-pointer">
                  <img src={Car2}></img>
                  <h1 className="text-sm font-semibold text-center text-white mt-2">
                    Syden
                  </h1>
                </div>

                {/* <div className="hover:bg-[#FFC61A] flex justify-center p-5 rounded">
                  <img src={Car3}></img>
                </div> */}

                <div className="hover:bg-[#FFC61A] flex flex-col justify-center p-5 rounded cursor-pointer">
                  <img src={Car4}></img>
                  <h1 className="text-sm font-semibold text-center text-white mt-2">
                    SUV
                  </h1>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 md:mt-10">
                <p>
                  <input
                    type="text"
                    id="fromaddress"
                    name="fromaddress"
                    placeholder="From Address"
                    value={formData.fromaddress}
                    onChange={handleInputChange}
                    class="w-full text-white bg-transparent border-2 rounded px-5 py-2 placeholder-white focus:outline-none"
                  />

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
                    name="toaddress"
                    placeholder="To Address"
                    value={formData.toaddress}
                    onChange={handleInputChange}
                    className="w-full text-white bg-transparent border-2 rounded px-5 py-2 placeholder-white focus:outline-none"
                  />
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
    </>
  );
}
