import React, { useState } from "react";
import "./NavBar.scss";
import Logo from "../../assets/logo.svg";
import Underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavBar() {
  const [menu, setMenu] = useState("Home");

  return (
    <>
      <div className="navbar">
        <img src={Logo} alt="Logo" className="navbar__logo" />
        <ul className="navbar__menu">
          <li>
            <AnchorLink className="anchor-link" href="#Home">
              <p onClick={() => setMenu("Home")}>Home</p>
            </AnchorLink>
            {menu === "Home" ? <img src={Underline} alt="Underline" /> : <></>}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#AboutMe">
              <p onClick={() => setMenu("AboutMe")}>About Me</p>
            </AnchorLink>
            {menu === "AboutMe" ? (
              <img src={Underline} alt="Underline" />
            ) : (
              <></>
            )}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#Portfolio">
              <p onClick={() => setMenu("Portfolio")}>Portfolio</p>
            </AnchorLink>
            {menu === "Portfolio" ? (
              <img src={Underline} alt="Underline" />
            ) : (
              <></>
            )}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#Contact">
              <p onClick={() => setMenu("Contact")}>Contact</p>
            </AnchorLink>
            {menu === "Contact" ? (
              <img src={Underline} alt="Underline" />
            ) : (
              <></>
            )}
          </li>
        </ul>
        <div className="navbar__connect">
          <AnchorLink className="anchor-link" offset={50} href="#Contact">
            <p onClick={() => setMenu("Contact")}>Contact Me</p>
          </AnchorLink>
        </div>
      </div>
    </>
  );
}

export default NavBar;
