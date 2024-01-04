import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Booking = ({ onClose }) => {
  const [bookingFormData, setBookingFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    startDate: "",
    endDate: "",
  });

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Add your booking logic here using bookingFormData
    console.log("Booking form submitted", bookingFormData);

    // Reset form data to empty state after submission
    setBookingFormData({
      name: "",
      phoneNumber: "",
      email: "",
      startDate: "",
      endDate: "",
    });

    // After submission, close the popup
    // handleClose();
  };

  const handleClose = () => {
    onClose();
    console.log("Booking form closed");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white shadow-lg border-2 border-gray-200 rounded w-[400px] p-3 mx-5 md:mx-0">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-semibold">Booking Now</h1>
          <button
            type="button"
            onClick={handleClose}
            className="text-black cursor-pointer"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <form onSubmit={handleBookingSubmit}>
          <p>
            <input
              type="text"
              name="name"
              value={bookingFormData.name}
              onChange={handleBookingChange}
              placeholder="Name"
              className="border border-gray-300 w-full px-3 py-2 mb-2 rounded"
            />
          </p>

          <p>
            <input
              type="text"
              name="phoneNumber"
              value={bookingFormData.phoneNumber}
              onChange={handleBookingChange}
              placeholder="Phone Number"
              className="border border-gray-300 w-full px-3 py-2 mb-2 mt-4 rounded"
            />
          </p>

          <p>
            <input
              type="email"
              name="email"
              value={bookingFormData.email}
              onChange={handleBookingChange}
              placeholder="Enter Email"
              className="border border-gray-300 w-full px-3 py-2 mb-2 mt-4 rounded "
            />
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
            <div className="">
              <label htmlFor="startDate" className="text-gray-600 px-1">
                Start Date:
              </label>
              <input
                type="date"
                name="startDate"
                value={bookingFormData.startDate}
                onChange={handleBookingChange}
                placeholder="Start Date"
                className="border border-gray-300 w-full px-3 py-2 mt-4 rounded"
              />
            </div>

            <div className="">
              <label htmlFor="endDate" className="mb-2 text-gray-600">
                End Date:
              </label>
              <input
                type="date"
                name="endDate"
                value={bookingFormData.endDate}
                onChange={handleBookingChange}
                placeholder="End Date"
                className="border border-gray-300 w-full px-3 py-2  mt-4 rounded"
              />
            </div>
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="bg-[#FFC61A] text-white rounded px-4 py-2"
            >
              Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
