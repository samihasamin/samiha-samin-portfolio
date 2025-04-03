import React, { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import "./GetInTouch.scss";
import ThemePattern from "../../assets/theme_pattern.svg";
import EmailIcon from "../../assets/mail_icon.svg";
import PhoneIcon from "../../assets/call_icon.svg";
import LocationIcon from "../../assets/location_icon.svg";

function GetInTouch() {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");

    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setError("Please fill in all the fields");
      return;
    }

    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setMessage("Email sent successfully!");
        event.target.reset();
      } else {
        setError(res.message || "Something went wrong.");
      }
    } catch (err) {
      setError("There was an error submitting the form.");
    }
  };

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
        <form onSubmit={onSubmit} className="getintouch__details-right">
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
          <button type="submit">Submit now</button>
          {message && <p className="success">{message}</p>}
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default GetInTouch;
