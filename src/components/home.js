import React from "react";
import "./home.css";
import WhyImg1 from "../assets/why-img-1.png";
import WhyImg2 from "../assets/why-img-2.png";
import WhyImg3 from "../assets/why-img-3.png";
import WhyImg4 from "../assets/why-img-4.png";

const Home = () => {
  return (
    <div className="home-div">
      <div className="intro-div">
        <div className="intro-video-div">
          <div className="video-div">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DgJ4sgI5GXM?si=dsxg8-PlpNIOFznr"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="intro-content-div">
          <h1>Introduction</h1>
          <p>
            CONCAT is a leading B2B services marketplace for Cross-Functional
            Business Outsourcing, Consulting, and Execution needs through the
            platform concators.com.
          </p>
          <br />
          <p>
            We understand business & curate tailor-made solutions by weaving
            together the right strategy, right execution, and right technology
            within a budget and timelines. We own end-to-end delivery thereby
            reducing the risk and liability, promising efficient and on-time
            delivery. The CONCAT stamp ensures transparency, trust & commitment.
          </p>
          <br />
          <p>
            Our Practice Leaders are Industry stalwarts in their domains and
            bring rich experience of 25+ years each. Backed by a robust platform
            with 100+ subject-matter expert consultants we own the strategy,
            delivery & governance.
          </p>
          <br />
          <b>Connect | Consult | Collaborate</b>
        </div>
      </div>

      <div className="why-div">
        <h1>Why Business Guru?</h1>
        <div className="why-content-div">
          <div className="why-content">
            <img src={WhyImg1} alt="image1" />
            <p>Industry Leaders with Domain Expertise</p>
          </div>

          <div className="why-content">
            <img src={WhyImg2} alt="image2" />
            <p>Digitization across Business Processes</p>
          </div>

          <div className="why-content">
            <img src={WhyImg3} alt="image3" />
            <p>Focus on delivering Return-on-investment (ROI)</p>
          </div>

          <div className="why-content">
            <img src={WhyImg4} alt="image4" />
            <p>Unmatched Customer Experience</p>
          </div>
        </div>
      </div>

      <div className="toWhom-div">
        <h1>What's in it for me?</h1>
        <div className="toWhom-content-div">
          <div className="toWhom-content"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
