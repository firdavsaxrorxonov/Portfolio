import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="left-tech-icons">
            <div className="tech-icon">
              <img src="./assets/images/img01.png" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/next.png" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/bootstrap.png" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/sass.png" alt="" />
            </div>
          </div>
          <img className="my-img" src="./assets/images/Me.jpg" alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/img02.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img03.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img04.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/tailwind.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
