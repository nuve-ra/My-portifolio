import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <section className="home" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Nupoor Verma</h1>
            <p>I'm a passionate Web Developer, eager to create innovative web applications.</p>
            <div className="cta-buttons">
              <a href="#about" className="btn">Learn More</a>
              <a href="/Nupoor.V_Resume" className="btn">Download Resume</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/path-to-your-image.jpg" alt="Hero" />
          </div>
        </div>
      </section>


    </div>
  );
}

export default Home;
