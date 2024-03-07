import Navbar from "./Common/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Footer from "./Common/Footer";
import Location from "./Components/Location";
import Booking from "./Components/Booking";
import TaxiDataModal from "./Components/TaxiDataModal";
import MyBooking from "./Components/MyBooking";
import RegistrationLogin from "./Components/RegistrationLogin";
import GoogleLocation from "./Components/GoogleLocation";
import InvoiceForm from "./Components/InvoiceForm";
import ProfileCard from "./Components/ProfileCard";
import Calculate from "./Components/Calculate";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/location" element={<Location />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/currentData" element={<TaxiDataModal />} />
        <Route path="/allBooking" element={<MyBooking />} />
        <Route path="/loginRegistration" element={<RegistrationLogin />} />
        <Route path="/map" element={<GoogleLocation />} />
        <Route path="/invoice" element={<InvoiceForm />} />
        <Route path="/profile" element={<ProfileCard />} />
        <Route path="/cal" element={<Calculate />} />




      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
