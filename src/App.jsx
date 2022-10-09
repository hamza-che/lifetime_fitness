import React from "react";
import { Routes, Route } from "react-router-dom";
// Components
import Navbar from "./components/Navbar";
// Pages
import About from "./pages/About";
import Discover from "./pages/Discover";
import MembersPlans from "./pages/MembersPlans";
import ContactUs from "./pages/ContactUs";
import BecomePartner from "./pages/BecomePartner";
import Login from "./pages/Login";
import Help from "./pages/Help";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<MembersPlans />} />
        <Route path="/about" element={<About />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/become-a-partner" element={<BecomePartner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
