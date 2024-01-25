import React from "react";
import Traffic1 from "../Assests/Homepageimages/tariff-1.png";
import Traffic2 from "../Assests/Homepageimages/tariff-2.png";
import Traffic3 from "../Assests/Homepageimages/tariff-3.png";
import Traffic4 from "../Assests/Homepageimages/tariff-4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faCarSide,
  faGifts,
  faHotel,
  faPlane,
  faRoad,
  faShoppingCart,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import "./Service.css";

export default function Services() {
  return (
    <>
      {/* banner */}
      <div className="contact-banner-img mt-16"></div>
      {/* <div className="service-banner-img flex flex-col items-center justify-center mt-12">
        <div className="text-center">
          <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl">
            Services
          </h1>
        </div>
      </div> */}

      {/* 2-part */}
      <div className="mt-10 md:mt-20 text-center">
        <span className="text-[#FFC61A] font-bold text-xl"> WELCOME</span>
        <h1 className=" font-bold text-2xl md:text-4xl mt-4">Our Services</h1>
        <p className="mt-4 text-[#737373] hidden md:block">
          Nulla egestas ante sit amet tincidunt bibendum. Duis id aliquet
          tellus, ut iaculis orci. Suspendisse efficitur <br></br> ornare neque,
          rhoncus viverra dui semper in. Ut nec gravida enim. Maecenas viverra
          elit id nulla euismod<br></br> tempus. Proin hendrerit nibh mauris,
          eget mollis ex elementum vel. Sed facilisis scelerisque viverra.
        </p>
        <p className="mt-4 text-[#737373] block md:hidden mx-5 md:mx-0">
          Nulla egestas ante sit amet tincidunt bibendum. Duis id aliquet
          tellus, ut iaculis orci. Suspendisse efficitur ornare neque,
          rhoncus viverra dui semper in. Ut nec gravida enim. Maecenas viverra
          elit id nulla euismod tempus. Proin hendrerit nibh mauris,
          eget mollis ex elementum vel. Sed facilisis scelerisque viverra.
        </p>
      </div>

      <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 xl:gap-20 mt-10 md:mt-24 mx-5 sm:mx-10 md:mx-20 lg:mx-28">
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

      <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10  xl:gap-20 mt-10 md:mt-20 mx-5 sm:mx-10 md:mx-20 lg:mx-28  mb-14">
        <div className="bg-white shadow-md border rounded p-5">
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

        <div className="bg-white shadow-md border rounded p-5">
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

        <div className="bg-white shadow-md border rounded p-5">
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

        <div className="bg-white shadow-md border rounded p-5">
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
    </>
  );
}
