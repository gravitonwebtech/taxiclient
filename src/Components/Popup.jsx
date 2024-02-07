// Popup.js
import React from 'react';

const Popup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="" onClick={onClose}></div>
      <div className="bg-white p-5 text-xl rounded-md shadow-md">
        <p>{message}</p>
        <button className="mt-4 px-4 py-1  bg-blue-500 text-white rounded-md" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
