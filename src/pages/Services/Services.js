import React from "react";
import "./Services.css";
import PageHeading from "../../components/client/common/widgets/PageHeading/PageHeading";

const services = [
  {
    title: "Architectural Drawing",
    description:
      "Our architectural drawing services blend creativity with practicality. We specialize in developing precise and visually compelling plans that cater to both residential and commercial projects. Our team ensures that every design optimally utilizes space while reflecting the unique style and needs of each client. Whether it's a modern urban home or a large commercial complex, our drawings ensure that your vision comes to life.",
  },
  {
    title: "Structural Design",
    description:
      "We provide comprehensive structural design solutions, ensuring the safety, stability, and longevity of your buildings. Using cutting-edge technology and in-depth engineering principles, our team develops robust designs that meet local and international safety standards. From high-rise buildings to industrial complexes, we prioritize safety, sustainability, and innovation in every project.",
  },
  {
    title: "Soil Investigation",
    description:
      "Soil investigation is the cornerstone of any successful construction project. Our geotechnical experts conduct detailed soil analysis to assess the load-bearing capacity and suitability of the land for construction. Through advanced testing methods, we ensure that your project is built on a strong foundation, minimizing risks such as settlement, landslides, or foundation failure.",
  },
  {
    title: "Landscaping",
    description:
      "We offer customized landscaping services that enhance the aesthetic and environmental value of your property. Our landscaping solutions integrate natural beauty with functional design, creating outdoor spaces that are both visually stunning and environmentally sustainable. Whether it's a residential garden or a commercial outdoor area, we ensure that every project adds value and blends seamlessly with the surroundings.",
  },
  {
    title: "Engineering & Contracting",
    description:
      "As a full-service engineering and contracting firm, we manage projects from concept to completion. Our multidisciplinary team of engineers, architects, and contractors collaborates to deliver projects on time, within budget, and to the highest quality standards. From small residential builds to large-scale commercial projects, we ensure precision and professionalism every step of the way.",
  },
];

const Services = () => (
  <div className="page-section page-margin">
    <PageHeading title="our services" highlight="services" />
    <div className="services-page-container">
      {services.map((service, index) => (
        <div key={index} className="services-page-box">
          <h3>{service.title.toUpperCase()}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
