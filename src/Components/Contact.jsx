import React, { useState } from "react";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    textarea: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data:", formData);
      // Proceed with any further actions (e.g., API call) here

      // Clear form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        textarea: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.textarea.trim()) {
      newErrors.textarea = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  return (
    <>
     {/* banner */}
     <div className="contact-banner-img mt-16"></div>

      <div className="overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 mx-5 sm:mx-10 md:mx-20 lg:mx-28 mt-10 md:mt-14">
          <div className="md:col-span-5">
            <h1 className=" font-bold text-2xl md:text-3xl ">
              <span className="text-[#FFC61A]"> OPENING HOURS :</span> 24/7
            </h1>
            <p className="text-[#737373] text-lg mt-3">
              Quisque sollicitudin feugiat risus, eu posuere ex euismod eu.
              Phasellus hendrerit,
            </p>
            <div className="mt-5 md:mt-8">
              <div className="flex">
              <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[#f0bb3a] text-lg font-semibold"
                />
                <h1 className=" font-bold pl-2">PHONE</h1>
              </div>

              <div className="border-t border-[#ADADAD] w-100 h-1 mt-2" />
              <p className="mt-3">+91-1234567890</p>
            </div>

            <div className="mt-5">
              <div className="flex">
              <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-[#f0bb3a] text-lg font-semibold"
                />

                <h1 className="font-bold pl-2">E-MAIL</h1>
              </div>

              <div className="border-t border-[#ADADAD] w-100 h-1 mt-2" />
              <p className="mt-3">abc@taxi.com</p>
            </div>

            <div className="mt-5">
              <div className="flex">
              <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[#f0bb3a] text-lg font-semibold "
                />

                <h1 className="font-bold pl-2">ADDRESS</h1>
              </div>

              <div className="border-t border-[#ADADAD] w-100 h-1 mt-2" />
              <p className="mt-3">xyz</p>
            </div>
          </div>
          <div className="md:col-span-2"></div>

          <div className="md:col-span-5 p-5 bg-white shadow-md rounded border-2 border-gray-200">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <h2 className="text-2xl font-bold text-center ">
                  Send Message
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="py-2 w-full rounded font-semibold text-gray-500 border-2 border-gray-100 px-5"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="py-2 w-full rounded font-semibold text-gray-500 border-2 border-gray-100 px-5"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                 <input
                  type="text"
                  name="phone"
                  placeholder="Enter Your Number"
                  className="py-2 w-full rounded font-semibold text-gray-500 border-2 border-gray-100 px-5"
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
                  maxLength="10"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

                <textarea
                  name="textarea"
                  placeholder="Enter Your Message..."
                  className="py-2 w-full rounded font-semibold text-gray-500 border-2 border-gray-100 px-5"
                  rows={4}
                  value={formData.textarea}
                  onChange={handleChange}
                />
                {errors.textarea && (
                  <p className="text-red-500 text-sm">{errors.textarea}</p>
                )}
              </div>

              <div className="flex justify-center mt-5">
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
      </div>

      {/* map start   */}
      <div className="mt-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.94958618667!2d75.69903414952232!3d22.724204998667577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1704170978249!5m2!1sen!2sin"
        className="w-full h-[50vh] px-1"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
     
      {/* map End    */}
    </>
  );
}
