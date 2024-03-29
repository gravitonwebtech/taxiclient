import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../Common/Images/Logo.jpeg";
import Login from "../Components/Login";
import Booking from "../Components/Booking";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);
  const [isTrainingOpen, setIsTrainingOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeDropdowns = () => {};

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

 
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const openLoginForm = () => {
    setIsLoginFormVisible(true);
    setIsDrawerOpen(false);
  };


  const [isBookingModalVisible, setIsBookingModalVisible] = useState(false);
  const openBookingModal = () => {
    setIsBookingModalVisible(true);
    setIsDrawerOpen(false);
  };

  const LogoutHandle = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("userData");

    navigate("/");
  };

  const [isLogoutVisible, setIsLogoutVisible] = useState(false);

  const handleLogoutClick = () => {
    setIsLogoutVisible(true);
  };

  const handleCancelClick = () => {
    setIsLogoutVisible(false);
  };

  const handleLogoutSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("login");
    localStorage.removeItem("userData");

    navigate("/");
    setIsLogoutVisible(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled
            ? "bg-white text-black shadow-b-lg px-5 py-2 sm:px-10 sm:py-2 md:px-20 md:py-3 lg:px-28"
            : "bg-white text-black shadow-b-lg  px-5 py-2 sm:px-10 sm:py-2 md:px-20 md:py-3 lg:px-28"
        }`}
      >
        {/* <Scrollup /> */}
        <div className="flex justify-between items-center">
          <Link to="/">
            {isScrolled ? (
              <img
                className="w-[50px] h-auto cursor-pointer"
                src={Logo}
                alt=""
              />
            ) : (
              <img
                className="w-[50px] h-auto cursor-pointer"
                src={Logo}
                alt=""
              />
            )}
          </Link>

          <div className="lg:hidden">
            {/* Hamburger Icon */}

            <button
              className="p-2 focus:outline-none third-dropdown-button"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Drawer */}

          {isDrawerOpen && (
            <div className="lg:hidden absolute top-0 right-0 h-screen w-64 bg-[#DDDDDD] text-black p-4 shadow-md">
              <button
                className="text-white p-2 focus:outline-none absolute top-2 right-2"
                onClick={() => setIsDrawerOpen(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className=" hover:text-blue-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Home
                  </Link>
                </li>

                {/* <li>
                  <Link
                    to="/about"
                    className=" hover:text-blue-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    About
                  </Link>
                </li> */}

                <li>
                  <Link
                    to="/services"
                    className="hover:text-blue-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Services
                  </Link>
                </li>

                {/* <li>
                  <button
                    className="text-black hover:text-blue-500 focus:outline-none"
                    onClick={() => {
                      setIsBusinessOpen(!isBusinessOpen);
                      setIsTrainingOpen(false);
                    }}
                  >
                    <Link
                      to="/services"
                      className="hover:text-blue-500"
                      onClick={() => setIsDrawerOpen(true)}
                    >
                      Services
                    </Link>

                    {isBusinessOpen ? (
                      <svg
                        className="w-4 h-4 inline ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 inline ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    )}
                  </button>

                  {isBusinessOpen && (
                    <div className="ml-2">
                      <ul className="mt-2 space-y-1">
                        <p>
                          <Link
                            to="/listingService"
                            className="hover:text-blue-500"
                            onClick={() => setIsDrawerOpen(false)}
                          >
                            Service Listing
                          </Link>
                        </p>

                        <p>
                          <Link
                            to="/digitalwebinar"
                            className="hover:text-blue-500"
                            onClick={() => setIsDrawerOpen(false)}
                          >
                            Digital Webinar
                          </Link>
                        </p>

                      </ul>
                    </div>
                  )}
                </li> */}

                <li>
                  <Link
                    to="/contact"
                    className="hover:text-blue-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Contact
                  </Link>
                </li>

                {/* <li>
                  <Link
                    to="/location"
                    className="hover:text-blue-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Location
                  </Link>
                </li> */}

                {/* <li>
                  <Link
                    to="/login"
                    className="hover:text-blue-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Login
                  </Link>
                </li> */}
                {localStorage.getItem("userData") === null ? (
                  <li>
                    <button
                      onClick={() => openLoginForm()}
                      className="hover:text-blue-500 font-bold"
                    >
                     Login/register
                    </button>
                  </li>
                ) : null}

                {localStorage.getItem("userData") !== null &&
                localStorage.getItem("userData") !== "" ? (
                  <li>
                    <Link to="/allBooking" className="hover:text-blue-500">
                      My Booking
                    </Link>
                  </li>
                ) : null}

                {/* <li>
                  <button
                    onClick={() => openBookingModal()}
                    className="hover:text-blue-500"
                  >
                    Booking Now
                  </button>
                </li> */}

                {localStorage.getItem("userData") !== null &&
                localStorage.getItem("userData") !== "" ? (
                  <li>
                    <button
                       onClick={() => handleLogoutClick()}
                      className="hover:text-blue-500"
                    >
                      Logout
                    </button>
                  </li>
                ) : null}
              </ul>
            </div>
          )}

          {/* for desktop */}

          <ul className="hidden lg:flex text-md font-medium space-x-6">
            <li>
              <Link
                to="/"
                className="hover:text-blue-500"
                onClick={() => closeDropdowns()}
              >
                Home
              </Link>
            </li>

            {/* <li>
              <Link
                to="/about"
                className="hover:text-blue-500"
                onClick={() => closeDropdowns()}
              >
                About
              </Link>
            </li> */}

            <li>
              <Link
                to="/services"
                className="hover:text-blue-500"
                onClick={() => closeDropdowns()}
              >
                Services
              </Link>
            </li>

            {/* <li
              className="relative"
              onMouseEnter={() => setIsBusinessOpen(true)}
              onMouseLeave={() => setIsTrainingOpen(false)}
            >
              <Link
                to="/services"
                className="hover:text-blue-500"
                onClick={() => closeDropdowns()}
              >
                Services
              </Link>

              <button
                className="first-dropdown-button"
                onClick={() => {
                  setIsBusinessOpen(!isBusinessOpen);
                  setIsTrainingOpen(false);
                }}
              >
                <svg
                  className={` h-3 ml-2 transition-transform transform ${
                    isBusinessOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {isBusinessOpen && (
                <ul
                  onMouseEnter={() => setIsBusinessOpen(true)}
                  onMouseLeave={() => setIsBusinessOpen(false)}
                  className="absolute top-10 right-0 bg-white text-black border shadow-lg rounded-bl-lg rounded-br-lg text-center text-sm"
                >
                  <p className="px-5 py-3">
                    <Link
                      to="/listingService"
                      className=" text-orange-500"
                      onClick={() => closeDropdowns()}
                    >
                      Service Listing
                    </Link>
                  </p>

                  <p className="border-b-2 p-3">
                    <Link
                      to="/digitalwebinar"
                      className="text-black hover:text-blue-500"
                      onClick={() => closeDropdowns()}
                    >
                      Digital Webinar
                    </Link>
                  </p>

                </ul>
              )}
            </li> */}

            <li>
              <Link
                to="/contact"
                className="hover:text-blue-500"
                onClick={() => closeDropdowns()}
              >
                Contact
              </Link>
            </li>

            {/* <li>
              <Link
                to="/location"
                className="hover:text-blue-500"
                onClick={() => closeDropdowns()}
              >
                Location
              </Link>
            </li> */}

            {/* <li>
              <Link
                to="/login"
                className="hover:text-blue-500"
                onClick={() => closeDropdowns()}
              >
                Login
              </Link>
            </li> */}
            {console.log(localStorage.getItem("userData"))}
            {localStorage.getItem("userData") === null ? (
              <li>
                <button
                  onClick={() => openLoginForm()}
                  className="hover:text-blue-500 font-bold"
                >
                  Login/Register
                </button>
              </li>
            ) : null}

            {localStorage.getItem("userData") !== null &&
            localStorage.getItem("userData") !== "" ? (
              <li>
                <Link to="/allBooking" className="hover:text-blue-500">
                  My Booking
                </Link>
              </li>
            ) : null}
            {/* <li>
              <Link
                to="/booking"
                className="bg-[#FFC61A] px-4 py-2 text-white rounded"
                onClick={() => closeDropdowns()}
              >
                Booking
              </Link>
            </li> */}

            {/* <li>
              <button
                onClick={() => openBookingModal()}
                className="hover:text-blue-500"
              >
                Booking Now
              </button>
            </li> */}

            {localStorage.getItem("userData") !== null &&
            localStorage.getItem("userData") !== "" ? (
              <li>
                <button
                  onClick={() => handleLogoutClick()}
                  className="hover:text-blue-500"
                >
                  LogOut
                </button>
              </li>
            ) : null}
          </ul>
        </div>
      </nav>

      {isLoginFormVisible && (
        <Login onClose={() => setIsLoginFormVisible(false)} />
      )}

      {/* Booking Modal */}
      {isBookingModalVisible && (
        <Booking onClose={() => setIsBookingModalVisible(false)} />
      )}

      {isLogoutVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-2xl mb-4">Are you sure?</h2>

            <button
              type="button"
              onClick={handleCancelClick}
              className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleLogoutSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              LogOut
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
