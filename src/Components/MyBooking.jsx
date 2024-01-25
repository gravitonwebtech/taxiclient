// TaxiDataDisplay.js
import React, { useState, useEffect } from 'react';

const MyBooking = () => {
  const [taxiData, setTaxiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/get_taxi/');
        const data = await response.json();

        setTaxiData(data);
      } catch (error) {
        console.error('Error fetching taxi data:', error);
      }
    };

    fetchData();
  }, []);
 
const localData=localStorage.getItem("userData")
//   const filterData=taxiData.filter(item=> item.username ===localData)
  const filteredData = taxiData.filter(item => item.username ===localData);
  console.log(filteredData)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">Taxi Data</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
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
              <tr key={index}>
                <td className="border p-4">{dataItem.fromaddress}</td>
                <td className="border p-4">{dataItem.toaddress}</td>
                <td className="border p-4">{dataItem.date}</td>
                <td className="border p-4">{dataItem.time}</td>
                <td className="border p-4">{dataItem.phone}</td>
                <td className="border p-4">{dataItem.name}</td>
                <td className="border bg-red-600 text-white font-bold rounded-xl p-2">Pending</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};




export default MyBooking