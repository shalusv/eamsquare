import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../../assets/images/logo.png";
import TopBanner from "../TopBanner/TopBanner"; // Import the TopBanner
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Create a ref for the menu

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      {/* Top Banner Component */}
      <TopBanner />

      {/* Header with Navigation */}
      <header className="header">
        <div className="logo">
          <NavLink
            to="/"
            className="logo-link"
            onClick={() => setIsOpen(false)}
          >
            <img src={logo} alt="EAMSQUARE" />
            <span className="company-name">
              <span className="eam">EAM</span>
              <span className="square">SQUARE</span>
              <span className="tagline">CONSTRUCTION SOLUTIONS</span>
            </span>
          </NavLink>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaBarsStaggered className="menu-open" /> : <FaBars />}
        </button>
        <nav ref={menuRef} className={`nav-menu ${isOpen ? "show" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
