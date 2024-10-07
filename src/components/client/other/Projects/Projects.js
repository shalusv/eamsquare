// src/components/Projects/Projects.js
import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects section">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-box">Project 1</div>
        <div className="project-box">Project 2</div>
        <div className="project-box">Project 3</div>
      </div>
      <button className="button">More</button>
    </section>
  );
};

export default Projects;
