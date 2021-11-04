import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navbarMobile, setNavbarMobile] = useState(false);
  const [showBar, setShowBar] = useState(false);

  const handleClick = () => setNavbarMobile(!navbarMobile);
  const closeMobileMenu = () => setNavbarMobile(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setShowBar(true);
      else setShowBar(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div
      className={`navbar ${
        navbarMobile
          ? (showBar && "blue-color") || "blue-color"
          : showBar && "navbar-white"
      }`}
    >
      <div className="navbar-logo">
        <img
          src="https://pngimage.net/wp-content/uploads/2018/05/example-logo-png-1.png"
          alt=""
        />
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {navbarMobile ? (
          <ion-icon id="close" name="close-outline"></ion-icon>
        ) : (
          <ion-icon id="open" name="menu-outline"></ion-icon>
        )}
      </div>
      <ul className={navbarMobile ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">Home</li>
        <li className="nav-item">About Us</li>
        <li className="nav-item">The Team</li>
        <li className="nav-item">Services</li>
      </ul>
    </div>
  );
};

export default Navbar;
