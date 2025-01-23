import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home";
import "./App.css";
import Background from "./pages/background";
import Aboutus from "./pages/aboutus";
import Fromimg from "./pages/fromimg";
import Fromvid from "./pages/fromvid";
import Contactus from "./pages/contactus";
import Realtime from "./pages/realtime";

function App() {
  return (
    <>
      <Router>
        <nav className="Nav-bar">
          <NavigationBar />
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/realtime" element={<Realtime />} />
          <Route path="/background" element={<Background />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/fromimg" element={<Fromimg />} />
          <Route path="/fromvid" element={<Fromvid />} />
        </Routes>

        <div className="footer">
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
