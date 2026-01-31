import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home";
import Background from "./pages/background";
import Aboutus from "./pages/aboutus";
import Fromimg from "./pages/fromimg";
import Fromvid from "./pages/fromvid";
import Contactus from "./pages/contactus";
import Realtime from "./pages/realtime";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "luxury");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "luxury" ? "winter" : "luxury");
  };

  return (
    <div data-theme={theme} className="min-h-screen flex flex-col transition-colors duration-300">
      <Router>
        <NavigationBar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow">
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
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
