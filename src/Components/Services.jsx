import React from "react";
import Service1 from "../Assests/Homepageimages/services-1.png";
import Service2 from "../Assests/Homepageimages/services-2.png";
import Service3 from "../Assests/Homepageimages/services-3.png";
import Service4 from "../Assests/Homepageimages/services-4.png";
import Traffic1 from "../Assests/Homepageimages/tariff-1.png";
import Traffic2 from "../Assests/Homepageimages/tariff-2.png";
import Traffic3 from "../Assests/Homepageimages/tariff-3.png";
import Traffic4 from "../Assests/Homepageimages/tariff-4.png";
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
        <p className="mt-4 text-[#737373]">
          Nulla egestas ante sit amet tincidunt bibendum. Duis id aliquet
          tellus, ut iaculis orci. Suspendisse efficitur <br></br> ornare neque, rhoncus
          viverra dui semper in. Ut nec gravida enim. Maecenas viverra elit id
          nulla euismod<br></br> tempus. Proin hendrerit nibh mauris, eget mollis ex
          elementum vel. Sed facilisis scelerisque viverra.
        </p>
      </div>

      <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 xl:gap-20 mt-10 md:mt-20 mx-5 sm:mx-10 md:mx-20 lg:mx-28">
        <div className="">
          <div className="">
            <img src={Service1} alt="" />
          </div>
          <h1 className="mt-5 font-bold text-xl">RAPID CITY TRANSFER</h1>
          <p className="mt-3 text-justify text-[#737373]">
            We will bring you quickly and comfortably to anywhere in your city.
          </p>
        </div>

        <div className="">
          <div className="">
            <img src={Service2} alt="" />
          </div>
          <h1 className="mt-5 font-bold text-xl">BOOKING A HOTEL</h1>
          <p className="mt-3 text-justify text-[#737373]">
            If you need a comfortable hotel, our operators will book it for you,
            and take a taxi to the address.
          </p>
        </div>

        <div className="">
          <div className="">
            <img src={Service3} alt="" />
          </div>
          <h1 className="mt-5 font-bold text-xl">AIRPORT TRANSFER</h1>
          <p className="mt-3 text-justify text-[#737373]">
            We will bring you quickly and comfortably to anywhere in your city.
          </p>
        </div>

        <div className="">
          <div className="">
            <img src={Service4} alt="" />
          </div>
          <h1 className="mt-5 font-bold text-xl">BAGGAGE TRANSPORT</h1>
          <p className="mt-3 text-justify text-[#737373]">
            If you need a comfortable hotel, our operators will book it for you,
            and take a taxi to the address.
          </p>
        </div>
      </div>


      {/* 3-part */}
      <div className="mt-10 md:mt-20 text-center">
        <span className="text-[#FFC61A] font-bold text-xl">SEE OUR</span>
        <h1 className=" font-bold text-2xl md:text-4xl mt-3">TARIFFS</h1>
      </div>

      <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10  xl:gap-20 mt-10 md:mt-20 mx-5 sm:mx-10 md:mx-20 lg:mx-28">
        <div className="bg-white shadow-md  p-5">
          <div className="flex justify-center">
            <img src={Traffic1} alt="" />
          </div>
          <h1 className="mt-5 md:mt-14 font-bold text-xl text-center">STANDARD</h1>
          <p className="mt-4  text-[#737373] text-center">
            Standard sedan for a drive around the city at your service.
          </p>
          <div class="text-3xl font-bold text-center mt-4">
            $2<span className="text-xl font-bold"> /km </span>
          </div>
        </div>

        <div className="bg-white shadow-md p-5">
          <div className="flex justify-center">
            <img src={Traffic2} alt="" />
          </div>
          <h1 className="mt-5 md:mt-10 font-bold text-xl text-center">BUSINESS</h1>
          <p className="mt-4  text-[#737373] text-center">
            Standard sedan for a drive around the city at your service.
          </p>
          <div class="text-3xl font-bold text-center mt-4">
            $2,7<span className="text-xl font-bold"> /km </span>
          </div>
        </div>

        <div className="bg-white shadow-md  p-5">
          <div className="flex justify-center">
            <img src={Traffic3} alt="" />
          </div>
          <h1 className="mt-5 md:mt-10 font-bold text-xl text-center">VIP</h1>
          <p className="mt-4  text-[#737373] text-center">
            Standard sedan for a drive around the city at your service.
          </p>
          <div class="text-3xl font-bold text-center mt-4">
            $5<span className="text-xl font-bold"> /km </span>
          </div>
        </div>

        <div className="bg-white shadow-md  p-5">
          <div className="flex justify-center">
            <img src={Traffic4} alt="" />
          </div>
          <h1 className="mt-5 font-bold text-xl text-center">BUS-MINIVAN</h1>
          <p className="mt-4  text-[#737373] text-center">
            Standard sedan for a drive around the city at your service.
          </p>
          <div class="text-3xl font-bold text-center mt-4">
            $4.5<span className="text-xl font-bold"> /km </span>
          </div>
        </div>
      </div>
    </>
  );
}
