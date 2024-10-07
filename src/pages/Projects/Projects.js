// src/pages/Projects/Projects.js
import React from "react";
import Header from "../../components/client/common/Header/Header";
import Footer from "../../components/client/common/Footer/Footer";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <Header />
      <main>
        <section className="projects">
          <h1>Projects</h1>
          <p>Details of the projects completed by EAMSQUARE.</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
