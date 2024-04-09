import React from "react";
import "./Aboutus.css";
import About from "../Images/about.jpeg";

const Aboutus = () => {
  return (
    <>
      <div className="wrapper">
        <img className="img" src={About} alt="./"></img>
        <div className="text-box">
          <h2>Who We Are</h2>
          <p>
            PutFire collaborates with aspirant designers and tech people from
            rural areas. We are doing the work not as normal, trying to
            implement new innovative designs and implementations for our valued
            customers. Improving our project status regularly with a consistent
            work approach. Here, we transform the client's mindset and ideas
            into real-time business products
          </p>
        </div>
      </div>

      <div className="wrapper">
        <img className="img" src={About} alt="./"></img>
        <div className="text-box">
          <h2>What we do?</h2>
          <p>
            Our team does the different tasks of software development; Business
            Analysis, Static Website Creation, Web Application Development,
            Mobile App Development, Software Quality Assurance, Support, and
            Talent Acquisition.
          </p>
        </div>
      </div>

      <div className="wrapper">
        <img className="img" src={About} alt="./"></img>
        <div className="text-box">
          <h2>How we do?</h2>
          <p>
            We are continuously developing projects via an agile-based software
            development model. Our team focuses on the quality of the project
            over the sprint. It means we are developing a project continuously,
            as mentioned in the sprint time. Each and every sprint, we're
            confirming the prototype with the business team.
          </p>
        </div>
      </div>

      <div className="wrapper">
        <img className="img" src={About} alt="./"></img>
        <div className="text-box">
          <h2>Where are we going?</h2>
          <p>
            We are working for a goal for the financial year 2024-2025: We are
            working for a goal for the financial year 2024-2025: We are working
            for a goal for the financial year 2024-2025: We are working for a
            goal for the financial year 2024-2025:
          </p>
        </div>
      </div>
      {/* <ExperienceContainer/> */}
    </>
  );
};

export default Aboutus;
