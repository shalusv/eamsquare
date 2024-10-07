import React from "react"; 
import SectionHeading from "../../../../components/client/common/widgets/SectionHeading/SectionHeading";
import "./Services.css";
import MoreButton from "../../common/widgets/MoreButton/MoreButton";
import service1 from "../../../../assets/images/services/service-1.jpg";
import service2 from "../../../../assets/images/services/service-2.jpg";
import service3 from "../../../../assets/images/services/service-3.jpg";
import service4 from "../../../../assets/images/services/service-4.jpg";
import service5 from "../../../../assets/images/services/service-5.jpg";

const services = [
  { title: "Architectural Drawing", description: "Detailed architectural plans for your projects.", image: service1 },
  { title: "Structural Design", description: "Safe and sound structural designs for buildings.", image: service2 },
  { title: "Soil Investigation", description: "Comprehensive soil analysis for construction sites.", image: service3 },
  { title: "Landscaping", description: "Beautiful and sustainable landscape designs.", image: service4 },
  { title: "Engineering & Contracting", description: "Expert engineering and contracting services.", image: service5 },
];

const Services = () => {
  return (
    <section className="services section">
      <SectionHeading title="Our Services" />
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-box" style={{ backgroundImage: `url(${service.image})` }}>
            <div className="service-title">{service.title.toUpperCase()}</div>
            <div className="service-description">{service.description}</div>
          </div>
        ))}
      </div>
      <a href="/services" className="arrow-link">
        <MoreButton />
      </a>
    </section>
  );
};

export default Services;
