// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/client/common/Header/Header";
import Footer from "./components/client/common/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import './App.css';
import ScrollToTop from "./components/client/common/widgets/ScrollTop/ScrollTop";
import ContactIcon from "./components/client/common/widgets/ContactIcon/ContactIcon";
import JobVacancies from "./pages/JobVacancies/JobVacancies";

const App = () => (
  <Router>
    <ScrollToTop /> {/* Include ScrollToTop component */}
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<JobVacancies />} />
      </Routes>
    </main>
    <Footer />
    <ContactIcon /> {/* Add the ContactIcon component */}
  </Router>
);

export default App;
