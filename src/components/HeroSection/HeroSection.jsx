import React from "react";
import "./HeroSection.scss";
import ProfilePic from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

function HeroSection() {
  return (
    <div id="Home" className="hero">
      <img src={ProfilePic} alt="Profile Image Hero" className="hero__pic" />
      <h1 className="hero__headline">
        <span>Hi! I’m Samiha Samin</span>A frontend developer based in Toronto.
        <p className="hero__tagline">
          Recent Bootcamp graduate skilled in JavaScript, React.js, CSS/SCSS,
          Node.js, Express.js and MySQL. Winner of Microsoft's Industry
          Hackathon.
        </p>
        <div className="hero__action">
          <div className="hero__action-connect">
            <AnchorLink className="anchor-link" offset={50} href="#Contact">
              <p onClick={() => setMenu("Contact")}>Let's Connect</p>
            </AnchorLink>
          </div>
          <div className="hero__action-resume">My Resume</div>
        </div>
      </h1>
    </div>
  );
}

export default HeroSection;
