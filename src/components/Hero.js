import React from "react";
import { FaTwitter, FaFacebook, FaGoogle } from "react-icons/fa"; 

function Hero() {
  return (
    <div className="hero">
      <div className="container1">
        <p>Hello, I'm Mo</p>
        <h3>Web Developer</h3>
        <p>This is My Website</p>
        <button className="but">VIEW MY WORK</button>

        <div className="social-buttons">
          <button className="social-btn">
            <FaTwitter className="icon1" /> Twitter
          </button>
          <button className="social-btn">
            <FaFacebook className="icon1" /> Facebook
          </button>
          <button className="social-btn">
            <FaGoogle className="icon1" /> Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
