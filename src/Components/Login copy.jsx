import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Login({ onClose }) {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [registrationFormData, setRegistrationFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    rePassword: "",
    phoneNumber: "",
  });

  const [isLogin, setIsLogin] = useState(true);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here using loginFormData
    console.log("Login clicked", loginFormData);
    setLoginFormData({
      email: "",
      password: "",
    });
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Implement registration logic here using registrationFormData
    console.log("Registration clicked", registrationFormData);
    setRegistrationFormData({
      fullName: "",
      email: "",
      password: "",
      rePassword: "",
      phoneNumber: "",
    });
  };


  const handleClose = () => {
    onClose();
    console.log("Form closed");
  };

  const showLogin = () => {
    setIsLogin(true);
  };

  const showRegistration = () => {
    setIsLogin(false);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white shadow-lg border-2 border-gray-200 rounded w-[400px] p-3 mx-5 md:mx-0">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-2xl font-semibold">
              {isLogin ? "Login" : "Register"}
            </h1>
            <button
              type="button"
              onClick={handleClose}
              className="text-black cursor-pointer"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <form onSubmit={isLogin ? handleLoginSubmit : handleRegistrationSubmit}>
            {isLogin ? (
              <div>
                <p>
                  <input
                    type="email"
                    name="email"
                    value={loginFormData.email}
                    onChange={handleLoginChange}
                    className="border border-gray-300 w-full px-3 py-2 mb-5 rounded"
                    placeholder="Enter Email"
                  />
                </p>

                <p>
                  <input
                    type="password"
                    name="password"
                    value={loginFormData.password}
                    onChange={handleLoginChange}
                    className="border border-gray-300 w-full px-3 py-2 rounded"
                    placeholder="Enter Password"
                  />
                </p>

                <div className="mt-4 flex justify-end cursor-pointer">
                  <h1 className="text-[#42B5DE]">Forget Password?</h1>
                </div>

                <div className="mt-5 flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#FFC61A] text-white rounded px-4 py-2"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={showRegistration}
                    className="bg-[#FFC61A] text-white rounded px-4 py-2 ml-2"
                  >
                    Register
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p>
                  <input
                    type="text"
                    name="fullName"
                    value={registrationFormData.fullName}
                    onChange={handleRegistrationChange}
                    placeholder="Fullname"
                    className="border border-gray-300 w-full px-3 py-2 mb-4 rounded"
                  />
                </p>

                <p>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={registrationFormData.phoneNumber}
                    onChange={handleRegistrationChange}
                    placeholder="Phone Number"
                    className="border border-gray-300 w-full px-3 py-2 mb-4 rounded"
                  />
                </p>
                <p>
                  <input
                    type="email"
                    name="email"
                    value={registrationFormData.email}
                    onChange={handleRegistrationChange}
                    placeholder="Enter Email"
                    className="border border-gray-300 w-full px-3 py-2 mb-4 rounded"
                  />
                </p>

                <p>
                  <input
                    type="password"
                    name="password"
                    value={registrationFormData.password}
                    onChange={handleRegistrationChange}
                    placeholder="Enter Password"
                    className="border border-gray-300 w-full px-3 py-2 mb-4 rounded"
                  />
                </p>

                <p>
                  <input
                    type="password"
                    name="rePassword"
                    value={registrationFormData.rePassword}
                    onChange={handleRegistrationChange}
                    placeholder="Re-enter Password"
                    className="border border-gray-300 w-full px-3 py-2 rounded"
                  />
                </p>

                <div className="mt-5 flex justify-end">
                  <button
                    type="button"
                    onClick={showLogin}
                    className="bg-[#808080] text-white rounded px-4 py-2 mr-2"
                  >
                    Login
                  </button>
                  <button
                    type="submit"
                    className="bg-[#FFC61A] text-white rounded px-4 py-2"
                  >
                    Register
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
