import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaMapMarkerAlt } from "react-icons/fa";
import "./JobVacancies.css";
import PageHeading from "../../components/client/common/widgets/PageHeading/PageHeading";

const jobs = [
  {
    title: "Civil Engineer",
    qualifications: "BE/BTech/Diploma in Civil Engineering",
    experience: "1+ year preferred, freshers welcome",
    location: "Ettumanoor, Kottayam, Kerala",
    description:
      "Responsible for overseeing construction projects, ensuring safety and structural integrity.",
    responsibilities: [
      "Manage and supervise day-to-day site activities and ensure smooth project execution",
      "Prepare daily, weekly, and monthly reports on project progress",
      "Handle administrative tasks, including maintaining project documentation and reports",
      "Ensure compliance with safety regulations and industry standards",
      "Collaborate with architects, contractors, and project managers to ensure project alignment",
      "Prepare and review CAD drawings, blueprints, and project plans",
      "Estimate project costs, materials, and timelines",
      "Conduct site inspections and resolve any on-site issues",
      "Oversee quality control and ensure all work meets required standards"
    ],
    skills: [
      "Strong knowledge of civil engineering principles, structural design, and project management",
      "Proficiency in AutoCAD and other civil tools",
      "Good communication and problem-solving skills",
      "Willingness to travel"
    ],
    applyLink: "https://www.naukri.com/job-listings-071024023429", // Add your application link here
    conclusion: "Join Eamsquare Pvt Ltd and build the future with us!",
    status: "active",
    postedDate: "October 7, 2024"
  },
 
];

const JobVacancies = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleJobDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="page-section page-margin">
      <PageHeading title="job opportunities" highlight="opportunities" />
      <div className="job-page-container">
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`job-page-box ${expandedIndex === index ? "expanded" : ""}`}
            onClick={() => toggleJobDescription(index)}
          >
            <div className="job-header">
              <h3>{job.title.toUpperCase()}</h3>
              <div className="job-status">
                {job.status === "active" ? (
                  <FaCheckCircle className="status-open" />
                ) : (
                  <FaTimesCircle className="status-close" />
                )}
                <span className={job.status === "active" ? "status-open" : "status-close"}>
                  {job.status === "active" ? "Open" : "Closed"}
                </span>
              </div>
            </div>
            <div className="job-summary">
              <p><strong>Qualification:</strong> {job.qualifications}</p>
              <p className="experience"><strong>Experience:</strong> {job.experience}</p>
            </div>
            <div className="job-location-date">
              <span className="location">
                <FaMapMarkerAlt className="location-icon" />
                {job.location}
              </span>
              <span>Posted on: {job.postedDate}</span>
            </div>
            {expandedIndex === index && (
              <div className="job-details">
                <h4>Description:</h4>
                <p>{job.description}</p>
                <div className="job-detail-section">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
                <div className="job-detail-section">
                  <h4>Skills:</h4>
                  <ul>
                    {job.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
                  <button className="form-submit-button">Apply Now</button>
                </a>
                <p className="job-conclusion">{job.conclusion}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobVacancies;
