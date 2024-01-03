import Navbar from "./Common/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Footer from "./Common/Footer";
import Location from "./Components/Location";
import Login from "./Components/Login";


function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/about"  element={<About/>}  />
        <Route path="/contact"  element={<Contact/>}  />
        <Route path="/services"  element={<Services/>}  />
        <Route path="/location"  element={<Location />} /> 
        <Route path="/login"  element={<Login />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
