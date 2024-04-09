import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [icon, setIcon] = useState(false);
  const handleClick = () => {
    setIcon(!icon);
  };
  const closeSideDrawer = () => {
    setIcon(false);
  };
  return (
    <>
      <nav className="navbar ">
        <Link
          to="/putfyre-innovations"
          className="nav-logo"
          onClick={closeSideDrawer}
        >
          Logo
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {icon ? (
            <FaTimes className="fa-times"></FaTimes>
          ) : (
            <FaBars className="fa-bars"></FaBars>
          )}
        </div>
        <ul className={icon ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/about" className="nav-links" onClick={closeSideDrawer}>
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              className="nav-links"
              onClick={closeSideDrawer}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="nav-links"
              onClick={closeSideDrawer}
            >
              Products
            </Link>
          </li>
          <li>
            <Link to="/careers" className="nav-links" onClick={closeSideDrawer}>
              Carrers
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-links" onClick={closeSideDrawer}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
