import React from "react";
import "./Service.css";
import Webimg from "../Images/Static and dynamic.jpg";

const Service = () => {
  return (
    <>
      <div className="service-container">
        <h1>OUR SERVICES</h1>
      </div>
      <div className="text-boxes">
        <h2>WEB DEVELOPMENT</h2>
        <p>
          If you’re doing an MSME business and plan to show your business
          information to your global customers and investors, The first step in
          your tech journey is creating a static website for your business.
        </p>
      </div>

      <div className="content-container">
        <img className="webimg" src={Webimg} alt="./"></img>
        <div className="content">
          <h2>1. Static Website</h2>
          <p>
            We are creating static websites that shows your detailed business
            information, like your brand logo, products, services, location, and
            contact information, as it is. So your customers will easily
            understand your brand and products.
          </p>
          <h2>2. Dynamic Web Applications</h2>
          <p>
            Our dynamic web applications help your business reach its customers
            digitally in the following domains: e-commerce, logistics, and
            fintech-based. Your customers will use our applications at home and
            share their feedback on your products and services. So you can
            reduce the cost and maximize the profit for the short term, and you
            can expand your customer base from different geo locations for the
            long term. Based on the user feedback, you can upgrade your business
            model and web applications too.
          </p>
        </div>
      </div>
      <div className=" kpo-service-main ">
        <h2 className="kpo-service">KPO Services</h2>
        <ol className="list">
          <li>1.Business Analysis</li>
          <li>2.Design & Animation</li>
          <li>3.Software Quality Assurance</li>
          <li>4.Digital Marketing & SEO</li>
          <li>5.alent Acquisition</li>
        </ol>
      </div>

      <div>
        <h1 className="kpo-head">KPO Services</h1>
      </div>

      <div className="kpo1">
        {/* <img className="img" src={Home} alt="./"></img> */}
        <h2>1.Business Analysis</h2>
        <p>
          Make a short online meeting with a detailed discussion of your
          requirements, and note down those requirements. Analyze your business
          scope, modules, and needs. In this way, we understand your
          requirements and convert them into comfortable application software.
          And in between the early stages of development, you can change your
          major requirements. We'll give our clients the utmost comfort during
          the project development process.
        </p>
      </div>

      <div className="kpo1">
        {/* <img className="img" src={Home} alt="./"></img> */}
        <div className="">
          <h2>2. Design & Animation</h2>
          <p>
            We are a tech company and concentrate more on design for our
            customers best user experience. So if you’re a businessman by
            nature, come closer to our environment. We’ll design your ideas into
            creative logos, elegant business proposal documents, business card
            images, website user interfaces, digital media posters, and videos.
          </p>
        </div>
      </div>

      <div className="kpo1">
        {/* <img className="img" src={Home} alt="./"></img> */}
        <div className="">
          <h2>3. Software Quality Assurance</h2>
          <p>
            We assure our clients and customers of bug-free applications for
            their usage. Because quality is our identity, we initiated this
            company with software testing services. So we are testing the
            applications with the defaults of user acceptance testing, business
            acceptance testing, functional testing, UI/UX testing, and
            performance testing. Apart from that, our R&D team also concentrates
            on security testing and penetration testing.
          </p>
        </div>
      </div>

      <div className="kpo1">
        {/* <img className="img" src={Home} alt="./"></img> */}
        <div className="">
          <h2>4. Digital Marketing </h2>
          <p>
            Digital marketing focuses not only on global customers but also on
            target audiences. If you’re targeting customers from a particular
            district or age criteria or income criteria we’ll market your
            project, products, ad, website, or related material to your target
            customers based on the analytics tools. And we rank your website on
            Google search based on your customer mindset-related keywords by SEO
            and SEM.
          </p>
        </div>
      </div>

      <div className="kpo1">
        {/* <img className="img" src={Home} alt="./"></img> */}
        <div className="">
          <h2>5. Talent Acquisition </h2>
          <p>
            Demand for human resources suddenly increases or decreases on the
            market based on supply and technological changes. We are aware of
            that, so we will collect resource leads and make them available for
            your needs. We make filter-round interviews for you, passing the
            selected candidates on to your interview and onboarding process.
          </p>
        </div>
      </div>
    </>
  );
};

export default Service;
