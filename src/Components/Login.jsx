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

  const [loginErrors, setLoginErrors] = useState({});
  const [registrationErrors, setRegistrationErrors] = useState({});

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  
    // Clear the corresponding error when the user starts typing
    if (loginErrors[name]) {
      setLoginErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };
  
  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  
    // Clear the corresponding error when the user starts typing
    if (registrationErrors[name]) {
      setRegistrationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const errors = validateLogin();
    if (Object.keys(errors).length === 0) {
      // Implement login logic here using loginFormData
      console.log("Login clicked", loginFormData);
      setLoginFormData({
        email: "",
        password: "",
      });
    } else {
      setLoginErrors(errors);
    }
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    const errors = validateRegistration();
    if (Object.keys(errors).length === 0) {
      // Implement registration logic here using registrationFormData
      console.log("Registration clicked", registrationFormData);
      setRegistrationFormData({
        fullName: "",
        email: "",
        password: "",
        rePassword: "",
        phoneNumber: "",
      });
    } else {
      setRegistrationErrors(errors);
    }
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

  const validateLogin = () => {
    const errors = {};
    if (!loginFormData.email) {
      errors.email = "Email is required";
    }
    if (!loginFormData.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const validateRegistration = () => {
    const errors = {};
    if (!registrationFormData.fullName) {
      errors.fullName = "Fullname is required";
    }
    if (!registrationFormData.phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    }
    if (!registrationFormData.email) {
      errors.email = "Email is required";
    }
    if (!registrationFormData.password) {
      errors.password = "Password is required";
    } else if (
      registrationFormData.password !== registrationFormData.rePassword
    ) {
      errors.rePassword = "Passwords do not match";
    }
    return errors;
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
          <form
            onSubmit={isLogin ? handleLoginSubmit : handleRegistrationSubmit}
          >
            {isLogin ? (
              <div>
                <p>
                  <input
                    type="email"
                    name="email"
                    value={loginFormData.email}
                    onChange={handleLoginChange}
                    className={`border border-gray-300 w-full px-3 py-2 mb-2 rounded ${
                      loginErrors.email ? "border-red-500" : ""
                    }`}
                    placeholder="Enter Email"
                  />
                  {loginErrors.email && (
                    <span className="text-red-500">{loginErrors.email}</span>
                  )}
                </p>

                <p>
                  <input
                    type="password"
                    name="password"
                    value={loginFormData.password}
                    onChange={handleLoginChange}
                    className={`border border-gray-300 w-full px-3 py-2 mb-2 mt-4 rounded ${
                      loginErrors.password ? "border-red-500" : ""
                    }`}
                    placeholder="Enter Password"
                  />
                  {loginErrors.password && (
                    <span className="text-red-500">{loginErrors.password}</span>
                  )}
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
                    className={`border border-gray-300 w-full px-3 py-2 mb-2 rounded ${
                      registrationErrors.fullName ? "border-red-500" : ""
                    }`}
                  />
                  {registrationErrors.fullName && (
                    <span className="text-red-500">
                      {registrationErrors.fullName}
                    </span>
                  )}
                </p>

                <p>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={registrationFormData.phoneNumber}
                    onChange={handleRegistrationChange}
                    placeholder="Phone Number"
                    className={`border border-gray-300 w-full px-3 py-2 mb-2 mt-4 rounded ${
                      registrationErrors.phoneNumber ? "border-red-500" : ""
                    }`}
                  />
                  {registrationErrors.phoneNumber && (
                    <span className="text-red-500">
                      {registrationErrors.phoneNumber}
                    </span>
                  )}
                </p>
                <p>
                  <input
                    type="email"
                    name="email"
                    value={registrationFormData.email}
                    onChange={handleRegistrationChange}
                    placeholder="Enter Email"
                    className={`border border-gray-300 w-full px-3 py-2 mb-2 mt-4 rounded ${
                      registrationErrors.email ? "border-red-500" : ""
                    }`}
                  />
                  {registrationErrors.email && (
                    <span className="text-red-500">
                      {registrationErrors.email}
                    </span>
                  )}
                </p>

                <p>
                  <input
                    type="password"
                    name="password"
                    value={registrationFormData.password}
                    onChange={handleRegistrationChange}
                    placeholder="Enter Password"
                    className={`border border-gray-300 w-full px-3 py-2 mb-2 mt-4 rounded ${
                      registrationErrors.password ? "border-red-500" : ""
                    }`}
                  />
                  {registrationErrors.password && (
                    <span className="text-red-500">
                      {registrationErrors.password}
                    </span>
                  )}
                </p>

                <p>
                  <input
                    type="password"
                    name="rePassword"
                    value={registrationFormData.rePassword}
                    onChange={handleRegistrationChange}
                    placeholder="Re-enter Password"
                    className={`border border-gray-300 w-full px-3 py-2 mb-2 mt-4 rounded ${
                      registrationErrors.rePassword ? "border-red-500" : ""
                    }`}
                  />
                  {registrationErrors.rePassword && (
                    <span className="text-red-500">
                      {registrationErrors.rePassword}
                    </span>
                  )}
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
