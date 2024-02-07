import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const ProfileCard = () => {
  const [users, setUsers] = useState([]);
  const localData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('https://taxitravellers.pythonanywhere.com/api/register/')
      .then(response => response.json())
      .then(data => {setUsers(data)
      console.log(data)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Filter users based on localData (assuming localData has a property like username)
  const filteredUsers = users.filter(user => user.username == localData);
  console.log(filteredUsers)

  return (
    <>
    <div className="max-w-sm overflow-hidden shadow-lg mt-[150px] mx-auto border border-gray-300 rounded-[20px] bg-white p-6">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">

          <span className="text-gray-500 text-2xl">Avatar</span>
        </div>
        <h1 className="text-xl font-bold mt-4">{localData}</h1>
      </div>

      {filteredUsers.map(user => (
        <div className="mt-6" key={user.id}>
          <div className="flex items-center mt-2">
            <span className="font-semibold">Email:</span>
            <span className="ml-2 text-gray-700">{user.email}</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="font-semibold">Mobile No.:</span>
            <span className="ml-2 text-gray-700">{user.phone_number}</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="font-semibold">User Id.:</span>
            <span className="ml-2 text-gray-700">{user.username}</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="font-semibold">Fullname:</span>
            <span className="ml-2 text-gray-700">{user.fullname}</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="font-semibold">Date_joined.:</span>
            <span className="ml-2 text-gray-700">{user.date_joined}</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="font-semibold">Password.:</span>
            <span className="ml-2 text-gray-700">{user.password}</span>
          </div>
          <div className="flex items-center mt-2">
       
            <Link to='/' className='bg-green-500 p-3 mt-10 font-bold'>Book Now</Link>
          </div>

        </div>
      ))}
     
    </div>
    
    </>
  );
};

export default ProfileCard;
