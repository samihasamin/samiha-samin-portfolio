import React, { useState } from "react";
import "./Footer.scss";
import ThemePattern from "../../assets/theme_pattern.svg";
import FooterLogo from "../../assets/footer_logo.svg";
import UserIcon from "../../assets/user_icon.svg";

function Footer() {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubscribeClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top-left">
          <img src={FooterLogo} alt="Footer Logo" />
          <p>
            I am a frontend developer from ON, Canada. Passionate about blending
            design and code to bring immersive experiences to life.
          </p>
        </div>
        <div className="footer__top-right">
          <div className="footer__top-right-email">
            <img src={UserIcon} alt="User Icon" />
            <input type="email" placeholder="Enter Email" />
          </div>
          <div
            className="footer__top-right-subscribe"
            onClick={handleSubscribeClick}
          >
            Subscribe
          </div>
          {showMessage && (
            <p className="footer__top-right-message">
              ✉️ Thanks for your interest! Subscription will be available soon.
            </p>
          )}
        </div>
      </div>
      <hr />
      <div className="footer__bottom">
        <p className="footer__bottom-left">
          &copy; 2025 Samiha Samin. All rights reserved.
        </p>
        <div className="footer__bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
