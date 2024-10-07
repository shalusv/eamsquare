// src/pages/Home/Home.js
import React from "react";
import Hero from "../../components/client/common/Hero/Hero";
import About from "../../components/client/other/About/About";
import Services from "../../components/client/other/Services/Services";
import Projects from "../../components/client/other/Projects/Projects";
import Testimonial from "../../components/client/other/Testimonial/Testimonial";
import Contact from "../../components/client/other/Contact/Contact";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Services />
      {/* <Projects /> */}
      {/* <Testimonial /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
