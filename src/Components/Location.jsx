import { useState } from "react";
import "./Location.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Ujjain from "../Assests/Locationimage/UjjainImg.jfif";
import KaliaDevi from "../Assests/Locationimage/KaliaDeviImage.jfif";
import SchoolImg from "../Assests/Locationimage/SchoolImage.jfif";
import KaliyaImg from "../Assests/Locationimage/KaliyaDehImage.jfif";
import IndoreWaterPark from "../Assests/Locationimage/IndoreWaterparkImg.jfif";
import Iskconimg from "../Assests/Locationimage/Iskconimg.jfif";
import JaiMaaImg from "../Assests/Locationimage/JaiMaaImg.jfif";
import MaharshiImg from "../Assests/Locationimage/MaharshiImg.jfif";
import MangalDoshImg from "../Assests/Locationimage/MangalDoshImg.jfif";
import ShreeKalImg from "../Assests/Locationimage/ShreeKalImg.jfif";
import ShreeKamalMataImg from "../Assests/Locationimage/ShreeKamalMataImg.jfif";
import TinchaWaterParkImg from "../Assests/Locationimage/TinchaWaterParkImg.jfif";


export default function Location() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-16">
        <div className="">
          <div className="location-banner-image flex flex-col items-center justify-center">
            <h1
              className="font-bold text-xl md:text-2xl lg:text-4xl text-white text-center"
              style={{ fontFamily: "Poppins" }}
            >
              31 Best Stops Between Bhopal and<br></br> Indore
            </h1>
            <div className="bg-white p-3 mt-5 md:mt-10 rounded">
              <h1 className="font-bold text-sm">When is your Trip?</h1>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
                <div className="">
                  <label for="calendarInput" className="text-[#878C91]">
                    Start Date:
                  </label>
                  <p>
                    <input
                      type="date"
                      id="calendarInput"
                      name="calendarInput"
                      className="text-[#878C91]"
                    ></input>
                  </p>
                </div>

                <div className="">
                  <label for="calendarInput" className="text-[#878C91]">
                    End Date:
                  </label>
                  <p>
                    <input
                      type="date"
                      id="calendarInput"
                      name="calendarInput"
                      className="text-[#878C91]"
                    ></input>
                  </p>
                </div>

                <div className="">
                  <button className="bg-[#FFC61A] text-white px-5 py-2 rounded-[30px] text-lg font-semibold">
                    Start Planning
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 mx-5 md:mx-10">
            <h1
              className="font-bold text-xl md:text-2xl"
              style={{ fontFamily: "Poppins" }}
            >
              How long is the drive from Bhopal to Indore?
            </h1>

            <p className="text-[#737373] font-medium mt-3">
              The direct drive from{" "}
              <span className="text-[#A6AFF2]"> Bhopal</span> to
              <span className="text-[#A6AFF2]"> Indore</span> is 118 mi (190
              km), and should have a drive time of 2 hrs 25 mins in normal
              traffic.
            </p>

            <p className="text-[#737373] font-medium mt-3">
              If you’re going on a road trip from Bhopal to Indore, we did the
              research for you and compiled some great stops along the way —
              with <span className="text-[#A6AFF2]">Ujjain</span> , as well as
              top places to visit like School Of Engineering And Technology,
              Vikram University and Kaliyadeh Palace, or the ever-popular Kaila
              Devi Mandir Dewas MP.
            </p>

            <p className="text-[#737373] font-medium mt-3">
              Visiting Bhopal or Indore? See our{" "}
              <span className="text-[#A6AFF2]">Bhopal Trip Planner</span> and
              our
              <span className="text-[#A6AFF2]"> Indore Trip Planner.</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 md:mt-8">
              <div className="border-2 border-gray-100 rounded p-3 ">
                <p className="flex justify-center">
                  <svg
                    aria-hidden="true"
                    className="w-[20px] h-[20px]"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    color="#f75940"
                  >
                    <path
                      fill="currentColor"
                      d="M512 96c0 50.2-59.1 125.1-84.6 155c-3.8 4.4-9.4 6.1-14.5 5H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c53 0 96 43 96 96s-43 96-96 96H139.6c8.7-9.9 19.3-22.6 30-36.8c6.3-8.4 12.8-17.6 19-27.2H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-53 0-96-43-96-96s43-96 96-96h39.8c-21-31.5-39.8-67.7-39.8-96c0-53 43-96 96-96s96 43 96 96zM117.1 489.1c-3.8 4.3-7.2 8.1-10.1 11.3l-1.8 2-.2-.2c-6 4.6-14.6 4-20-1.8C59.8 473 0 402.5 0 352c0-53 43-96 96-96s96 43 96 96c0 30-21.1 67-43.5 97.9c-10.7 14.7-21.7 28-30.8 38.5l-.6 .7zM128 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM416 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                    ></path>
                  </svg>
                </p>
                <h1 className="text-center mt-2">118 mins</h1>
                <h1 className="text-xs font-bold text-[#878C91] text-center mt-2">
                  TOTAL DISTANCE
                </h1>
              </div>

              <div className="border-2 border-gray-100 rounded p-3 ">
                <p className="flex justify-center">
                  <svg
                    aria-hidden="true"
                    className="w-[20px] h-[20px]"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    color="#f75940"
                  >
                    <path
                      fill="currentColor"
                      d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                    ></path>
                  </svg>
                </p>
                <h1 className="text-center mt-2">2hrs 25 mins</h1>
                <h1 className="text-xs font-bold text-[#878C91] text-center mt-2">
                  DRIVE TIME
                </h1>
              </div>

              <div className="border-2 border-gray-100 rounded p-3 ">
                <p className="flex justify-center">
                  <svg
                    aria-hidden="true"
                    className="w-[20px] h-[20px]"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    color="#f75940"
                  >
                    <path
                      fill="currentColor"
                      d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                    ></path>
                  </svg>
                </p>
                <h1 className="text-center mt-2">31 stops</h1>
                <h1 className="text-xs font-bold text-[#878C91] text-center mt-2">
                  CITIES/ATTRACTIONS
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-16 mx-5 md:mx-10">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={toggleAccordion}
            >
              <span
                className="font-bold text-xl md:text-2xl"
                style={{ fontFamily: "Poppins" }}
              >
                Top city between Bhopal and Indore
              </span>

              <svg
                className={`w-5 h-5 ${isOpen ? "transform rotate-180" : ""}`}
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
                />
              </svg>
            </div>
            {isOpen && (
              <div className="mt-4">
                <p className="text-[#737373] font-medium">
                  The top city between Bhopal and Indore is Ujjain. It's 3 hours
                  from Bhopal and less than an hour from Indore.
                </p>
                <div className="border-b-2 border-blue-600 py-2"></div>
                <div className="mt-3">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-[#f75940] fa-2x"
                  />
                  <span className="text-lg md:text-xl font-bold pl-5">
                    Ujaain
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-5">
                    <div className="md:col-span-10">
                      <span className="bg-[#E9ECEF] text-[#9D9FA1] font-bold text-xs px-3 py-1 rounded mr-3">
                        Historic Sites
                      </span>
                      <span className="bg-[#E9ECEF] text-[#9D9FA1] font-bold text-xs px-3 py-1 rounded mr-3">
                        Monuments & Statues
                      </span>
                    </div>

                    <div className="md:col-span-2"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 mt-3">
                    <div className="md:col-span-8 text-justify text-[#737373]">
                      Ujjain is an ancient city beside the Kshipra River in the
                      central Indian state of Madhya Pradesh. An important Hindu
                      pilgrimage destination, it’s known for the centuries-old
                      Mahakaleshwar Temple, a towering structure with a
                      distinctively ornate roof. Nearby, Bade Ganesh Temple
                      houses a colorful statue of Ganesh, the elephant-headed
                      Hindu deity. Harsiddhi Temple features a pair of tall dark
                      pillars studded with lamps.
                    </div>
                    <div className="md:col-span-4">
                      <img src={Ujjain} alt="" className="rounded" />
                    </div>
                  </div>

                  <h1 className="mt-3">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="chart-line"
                      class="svg-inline--fa fa-chart-line fa-w-16 fa-fw "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      color="#f75940"
                    >
                      <path
                        fill="currentColor"
                        d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"
                      ></path>
                    </svg>
                    <span className="text-[#f75940] pl-5">
                      Most popular city on this route
                    </span>
                  </h1>

                  <h1 className="text-[#737373] font-medium mt-2">
                    37 minutes off the main route, 73% of way to Indore
                  </h1>
                </div>
              </div>
            )}
          </div>

          <div className="mt-10 md:mt-16 mx-5 md:mx-10">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={toggleAccordion1}
            >
              <span
                className="font-bold text-xl md:text-2xl"
                style={{ fontFamily: "Poppins" }}
              >
                Best stops along Bhopal to Indore drive
              </span>

              <svg
                className={`w-5 h-5 ${isOpen1 ? "transform rotate-180" : ""}`}
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
                />
              </svg>
            </div>
            {isOpen1 && (
              <>
                <div className="mt-4">
                  <p className="text-[#737373] font-medium">
                    The top stops along the way from Bhopal to Indore (with
                    short detours) are Khajrana Ganesh Mandir, Shree Kaal
                    Bhairav Mandir, Ujjain, and Shree Harsiddhi Mata Shaktipeeth
                    Temple. Other popular stops include Treasure Island Mall (TI
                    Mall), Mangal Dosh Shanti Pujan, and Tincha Water Fall
                    Ticket Counter.
                  </p>
                  <div className="border-b-2 border-blue-600 py-2"></div>

                  <div className="mt-3">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-[#f75940] fa-2x"
                    />
                    <span className="text-lg md:text-xl font-bold pl-5">
                      Kaila Devi Mandir Dewas MP
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-5">
                      <div className="md:col-span-10">
                        <span className="bg-[#E9ECEF] text-[#9D9FA1] font-bold text-xs px-3 py-1 rounded mr-3">
                          Hindu Temple
                        </span>
                        <span className="bg-[#E9ECEF] text-[#9D9FA1] font-bold text-xs px-3 py-1 rounded mr-3">
                          Sights & Landmarks
                        </span>
                      </div>

                      <div className="md:col-span-2"></div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-10 mt-3">
                      <div className="lg:col-span-8 text-justify text-[#737373]">
                        Beautiful temple to visit in Dewas... A peaceful place
                        to visit. You can hangout with kids during evening
                        time... The surroundings of temple have been best to
                        worship.. There is huge statue of Bajrang Bali and Devi
                        Maa.. Also there are small small gardens inside, sitting
                        arrangements.. There is parking area as well.
                      </div>
                      <div className="lg:col-span-4">
                        <img src={KaliaDevi} alt="" className="rounded" />
                      </div>
                    </div>
                  </div>

                  <div className="border-b-2 border-gray-200 py-2"></div>

                  <div className="mt-3">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-[#f75940] fa-2x"
                    />
                    <span className="text-lg md:text-xl font-bold pl-5">
                      School Of Engineering And Technology, Vikram University
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-5">
                      <div className="md:col-span-10">
                        <span className="bg-[#E9ECEF] text-[#9D9FA1] font-bold text-xs px-3 py-1 rounded mr-3">
                          University department
                        </span>
                        <span className="bg-[#E9ECEF] text-[#9D9FA1] font-bold text-xs px-3 py-1 rounded mr-3">
                          Educational sites
                        </span>
                      </div>

                      <div className="md:col-span-2"></div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-10 mt-3">
                      <div className="lg:col-span-8 text-justify text-[#737373]">
                        The School of Engineering and Technology at Vikram
                        University boasts excellent infrastructure, including a
                        well-stocked library with an extensive collection of
                        books. Additionally, the college offers a computer lab
                        and fully equipped labs for all streams, complete with
                        state-of-the-art instruments. The faculty and staff are
                        known for their pleasant nature, providing guidance and
                        advice when needed.
                      </div>
                      <div className="lg:col-span-4">
                        <img src={SchoolImg} alt="" className="rounded" />
                      </div>
                    </div>
                  </div>

                  <div className="border-b-2 border-gray-200 py-2"></div>

                  <div className="mt-3">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-[#f75940] fa-2x"
                    />
                    <span className="text-lg md:text-xl font-bold pl-5">
                      Kaliyadeh Palace
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-5">
                      <div className="md:col-span-10">
                        <span className="bg-[#E9ECEF] text-[#9D9FA1] font-bold text-xs px-3 py-1 rounded mr-3">
                          Historical landmark
                        </span>
                        <span className="bg-[#E9ECEF] text-[#9D9FA1] font-bold text-xs px-3 py-1 rounded mr-3">
                          Sights & Landmarks
                        </span>
                      </div>

                      <div className="md:col-span-2"></div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-10 mt-3">
                      <div className="lg:col-span-8 text-justify text-[#737373]">
                        Renowned river island palace dating from the 15th
                        century, with Persian-style domes &
                        inscriptions.Kaliadeh Palace is not only one of the most
                        important and visited sites of Ujjain but of Madhya
                        Pradesh as well. The architecture of this palace is of
                        Persian type. This palace is situated on the banks of
                        Kshipra river and the river flows on both sides of the
                        palace.
                      </div>
                      <div className="lg:col-span-4">
                        <img src={KaliyaImg} alt="" className="rounded" />
                      </div>
                    </div>
                  </div>

                  <div className="border-b-2 border-gray-200 py-2"></div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="">
          <div className="md:fixed w-full h-[50vh] md:h-screen overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.94958618667!2d75.69903414952232!3d22.724204998667577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1704170978249!5m2!1sen!2sin"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
