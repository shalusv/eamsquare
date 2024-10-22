import React, { useState } from "react";
import "./Projects.css";
import { IoCloseCircle } from "react-icons/io5";
import PageHeading from "../../components/client/common/widgets/PageHeading/PageHeading";

const projects = [
  {
    name: "Simple Villa",
    location: "Kochi, India",
    description: "5 Bedrooms, 4 Bathrooms, Private Pool",
    thumbnail: require("../../assets/images/projects/villa-1/main.jpg"),
    gallery: [
      {
        img: require("../../assets/images/projects/villa-1/main.jpg"),
        label: "Out Door",
      },
      {
        img: require("../../assets/images/projects/villa-1/living.jpg"),
        label: "Living",
      },

      {
        img: require("../../assets/images/projects/villa-1/kitchen.jpg"),
        label: "Kitchen",
      },
    ],
  },
  {
    name: "Villa ",
    location: "Kottyam, India",
    description: "4 Bedrooms, 3 Bathrooms, Infinity Pool",
    thumbnail: require("../../assets/images/projects/villa-2/main.jpg"),
    gallery: [
      {
        img: require("../../assets/images/projects/villa-2/main.jpg"),
        label: "Home Out Door",
      },
      {
        img: require("../../assets/images/projects/villa-2/living.jpg"),
        label: "Living Room",
      },
      {
        img: require("../../assets/images/projects/villa-2/sitout.jpg"),
        label: "Sitout Area",
      },
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleGalleryOpen = (project) => {
    setSelectedProject(project);
    setSelectedImageIndex(0);
  };

  const handleGalleryClose = () => {
    console.log("Close button clicked"); // Debug log
    setSelectedProject(null);
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === selectedProject.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.gallery.length - 1 : prevIndex - 1
    );
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal")) {
      console.log("from out");
      handleGalleryClose();
    }
  };

  return (
    <div className="page-section">
      <PageHeading title="our projects" highlight="projects" />
      <div className="projects-page-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.thumbnail}
              alt={project.name}
              className="project-thumbnail"
              onClick={() => handleGalleryOpen(project)}
            />
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.location}</p>
              <p>{project.description}</p>
              <button onClick={() => handleGalleryOpen(project)}>
                View Gallery
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* <IoCloseCircle className="close" onClick={handleGalleryClose} /> */}
            <div className="modal-gallery">
              <button className="prev" onClick={handlePrev}>
                &#8249;
              </button>
              <img
                src={selectedProject.gallery[selectedImageIndex].img}
                alt={`Gallery ${selectedImageIndex + 1}`}
                className="main-image"
              />
              <div className="image-label">
                {selectedProject.gallery[selectedImageIndex].label}
              </div>
              <button className="next" onClick={handleNext}>
                &#8250;
              </button>
            </div>
            <div className="thumbnail-container">
              {selectedProject.gallery.map((image, idx) => (
                <img
                  key={idx}
                  src={image.img}
                  alt={`Thumbnail ${idx + 1}`}
                  className={`thumbnail ${
                    idx === selectedImageIndex ? "active" : ""
                  }`}
                  onClick={() => setSelectedImageIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
