import React, { useState, useRef } from "react";
import "./NavBar.scss";
import Logo from "../../assets/logo.svg";
import Underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MenuOpen from "../../assets/menu_open.svg";
import MenuClose from "../../assets/menu_close.svg";

function NavBar() {
  const [menu, setMenu] = useState("Home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <>
      <div className="navbar">
        <img src={Logo} alt="Logo" className="navbar__logo" />
        <img
          src={MenuOpen}
          alt="Menu Open Icon"
          onClick={openMenu}
          className="navbar__menu-open"
        />
        <ul ref={menuRef} className="navbar__menu">
          <img
            src={MenuClose}
            alt="Menu Close Icon"
            onClick={closeMenu}
            className="navbar__menu-close"
          />
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
