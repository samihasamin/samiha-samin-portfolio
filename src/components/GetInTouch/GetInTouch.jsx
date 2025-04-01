import React from "react";
import "./GetInTouch.scss";
import ThemePattern from "../../assets/theme_pattern.svg";
import EmailIcon from "../../assets/mail_icon.svg";
import PhoneIcon from "../../assets/call_icon.svg";
import LocationIcon from "../../assets/location_icon.svg";

function GetInTouch() {
  return (
    <div id="Contact" className="getintouch">
      <div className="getintouch__title">
        <h1>Get in touch</h1>
        <img src={ThemePattern} alt="Theme Pattern" />
      </div>
      <div className="getintouch__details">
        <div className="getintouch__details-left">
          <h1>Let's talk</h1>
          <p>
            I’m currently open to new opportunities where I can continue
            learning, growing, and contributing as a front-end developer. If
            you’re looking for someone eager to collaborate, create, and improve
            with every project — let’s connect and explore what we can build
            together.
          </p>
          <div className="getintouch__details-left-info">
            <div className="getintouch__details-left-info--email">
              <img src={EmailIcon} alt="Email icon" />
              <p>samihasamin@hotmail.com</p>
            </div>
            <div className="getintouch__details-left-info--phone">
              <img src={PhoneIcon} alt="Phone Icon" />
              <p>+1 647-447-4909</p>
            </div>
            <div className="getintouch__details-left-info--location">
              <img src={LocationIcon} alt="Location Icon" />
              <p>ON, Canada</p>
            </div>
          </div>
        </div>
        <form className="getintouch__details-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            id="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default GetInTouch;
