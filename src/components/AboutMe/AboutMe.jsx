import React from "react";
import "./AboutMe.scss";
import ThemePattern from "../../assets/theme_pattern.svg";
import ProfileImage from "../../assets/about_profile.svg";

function AboutMe() {
  return (
    <div id="AboutMe" className="about-me">
      <div className="about-me__title">
        <h1>About Me</h1>
        <img src={ThemePattern} alt="Theme Pattern" />
      </div>
      <div className="about-me__content">
        <div className="about-me__content-image">
          <img src={ProfileImage} alt="Profile Image" />
        </div>
        <div className="about-me__content-details">
          <div className="about-me__content-details-text">
            <p className="about-me__content-details-text--first">
              My path to front-end development is a testament to the power of
              passion and adaptability. While my background includes a degree in
              Mechanical Engineering and six years in the insurance industry as
              an account analyst and underwriting technician, my heart has
              always been drawn to the artistic side of technology. My journey,
              though unconventional, has equipped me with a unique blend of
              analytical rigor from engineering, and meticulous attention to
              detail and data management from finance.
            </p>
            <p className="about-me__content-details-text--second">
              I’m now eager to dive deeper into the world of front-end
              development. I’m especially inspired by the potential of animation
              and interactive storytelling — fueled by a dream to contribute to
              the magic of studios like Disney or Pixar. Currently, I’m
              expanding my toolkit with Next.js and Three.js, and I look forward
              to crafting immersive experiences that captivate and inspire.
            </p>
          </div>
          <div className="about-me__content-details-skills">
            <div className="about-me__content-details-skills-html">
              <p>HTML & CSS/SCSS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-me__content-details-skills-js">
              <p>JavaScript</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-me__content-details-skills-react">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-me__content-details-skills-node">
              <p>Node.js & Express.js </p> <hr style={{ width: "40%" }} />
            </div>
            <div className="about-me__content-details-skills-sql">
              <p>MySQL and Knex</p> <hr style={{ width: "30%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-me__achievements">
        <div className="about-me__achievements-code">
          <h1>400+</h1>
          <p>HOURS OF CODE</p>
        </div>
        <hr />
        <div className="about-me__achievements-projects">
          <h1>8+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-me__achievements-techstack">
          <h1>6+</h1>
          <p>TECH STACK COMPONENTS</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
