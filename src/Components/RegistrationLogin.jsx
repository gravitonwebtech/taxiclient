import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { servieUrl } from "../env/env";

function RegistrationLogin() {
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

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const errors = validateLogin();

    if (Object.keys(errors).length === 0) {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append(
          "Cookie",
          "csrftoken=tZQ0YhIzvFexGiWzliaB4MH6PoHbq2eu"
        );

        const raw = JSON.stringify({
          username: loginFormData.email,
          password: loginFormData.password,
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        const response = await fetch(
          "https://taxitravellers.pythonanywhere.com/api/login/",
          requestOptions
        );

        if (response.ok) {
          // Credentials are correct
          const result = await response.text();
          localStorage.setItem("userData", loginFormData.email);
          navigate("/");
          console.log(result);
          setLoginFormData({
            email: "",
            password: "",
          });
        } else {
          // Credentials are incorrect
          console.error("Incorrect credentials");
          alert("Wrong Id And Password");
          // You may want to update state or display an error message
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle other errors, like network issues, server errors, etc.
      }
    } else {
      setLoginErrors(errors);
    }
  };

  const [username, setUserName] = useState("");

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    const errors = validateRegistration();
    if (Object.keys(errors).length === 0) {
      setUserName(Math.floor(100000 + Math.random() * 900000));

      // Move the subsequent code inside the then block
      setUserName((newUsername) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append(
          "Cookie",
          "csrftoken=tZQ0YhIzvFexGiWzliaB4MH6PoHbq2eu"
        );

        var raw = JSON.stringify({
          username: newUsername,
          password: registrationFormData.password,
          fullname: registrationFormData.fullName,
          email: registrationFormData.email,
          phone_number: registrationFormData.phoneNumber,
          address: registrationFormData.rePassword,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://taxitravellers.pythonanywhere.com/api/register/",
          requestOptions
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("User registration failed");
            }
            return response.json();
          })
          .then((result) => {
            alert("Form Submitted");
            emailSending(newUsername);
          })
          .catch((error) => {
            console.error("Error during registration:", error);
            alert("User registration failed. Email is already registered.");
          });

        setRegistrationFormData({
          fullName: "",
          email: "",
          password: "",
          rePassword: "",
          phoneNumber: "",
        });
      });
    } else {
      setRegistrationErrors(errors);
    }
  };

  const emailSending = (newUsername) => {
    var formdata = new FormData();
    formdata.append("to", registrationFormData.email);
    formdata.append("userid", newUsername);
    formdata.append("password", registrationFormData.password);
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(servieUrl.url + "api/emailNewRegistratinos/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
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

  const showRegistration = () => {
    setIsLogin(!isLogin);
  };
  const showLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <div className="my-20 mt-20  flex items-center justify-center">
        <div className="bg-white shadow-lg border-2 border-gray-200 rounded w-[400px] p-3 mx-5 md:mx-0">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-2xl font-semibold">
              {isLogin ? "Login" : "Register"}
            </h1>
          </div>

          {isLogin ? (
            <form onSubmit={handleLoginSubmit}>
              <div>
                <p>
                  <input
                    type="text"
                    name="email"
                    value={loginFormData.email}
                    onChange={handleLoginChange}
                    className={`border border-gray-300 w-full px-3 py-2 mb-2 rounded ${
                      loginErrors.email ? "border-red-500" : ""
                    }`}
                    placeholder="Enter UserName"
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
            </form>
          ) : (
            <form onSubmit={handleRegistrationSubmit}>
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
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default RegistrationLogin;
