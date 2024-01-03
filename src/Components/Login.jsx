import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({
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

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    rePassword: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Implement login logic here
      console.log("Login clicked", loginFormData);
    } else {
      // Implement registration logic here
      console.log("Registration clicked", formData);
    }

    setFormData({
      fullName: "",
      email: "",
      password: "",
      rePassword: "",
      phoneNumber: "",
    });
  };

  const [isLogin, setIsLogin] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleCancel = () => {
    setIsLogin(true);
    setFormData({
      fullName: "",
      email: "",
      password: "",
      rePassword: "",
      phoneNumber: "",
    });
  };

  const handleClose = () => {
    setIsFormOpen(false);
    console.log("Form closed");
  };

  if (!isFormOpen) {
    return null;
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-lg border-2 border-gray-200 rounded w-[400px] mx-5 p-3">
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
          <form onSubmit={isLogin ? handleLoginSubmit : handleSubmit}>
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

                <div className="mt-4 flex justify-end">
                  <h1 className="text-[#42B5DE]">Forget Password?</h1>
                </div>

                <div className="mt-5 flex justify-end">
                  <button
                    type="button"
                    onClick={handleToggle}
                    className="bg-[#FFC61A] text-white rounded px-4 py-2 mr-2"
                  >
                    Register
                  </button>
                  <button
                    type="submit"
                    className="bg-[#FFC61A] text-white rounded px-4 py-2"
                  >
                    Login
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Fullname"
                    className="border border-gray-300 w-full px-3 py-2 mb-4 rounded"
                  />
                </p>

                <p>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="border border-gray-300 w-full px-3 py-2 mb-4 rounded"
                  />
                </p>
                <p>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    className="border border-gray-300 w-full px-3 py-2 mb-4 rounded"
                  />
                </p>

                <p>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                    className="border border-gray-300 w-full px-3 py-2 mb-4 rounded"
                  />
                </p>

                <p>
                  <input
                    type="password"
                    name="rePassword"
                    value={formData.rePassword}
                    onChange={handleChange}
                    placeholder="Re-enter Password"
                    className="border border-gray-300 w-full px-3 py-2 rounded"
                  />
                </p>

                <div className="mt-5 flex justify-end">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-[#808080] text-white rounded px-4 py-2 mr-2"
                  >
                    Cancel
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
