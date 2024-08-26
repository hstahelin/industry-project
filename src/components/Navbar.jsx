import React from "react";
import logo from "../assets/nyt-logo.svg";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div
      className={`nav ${currentPath === "/quiz" ? "showItem" : "hideItem"} `}
    >
      <img src={logo} alt="nyt logo" />
    </div>
  );
};

export default Navbar;
