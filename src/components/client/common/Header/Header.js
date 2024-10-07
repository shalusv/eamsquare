import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../../assets/images/logo.png";
import TopBanner from "../TopBanner/TopBanner"; // Import the TopBanner

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top Banner Component */}
      <TopBanner />

      {/* Header with Navigation */}
      <header className="header">
        <div className="logo">
          <img src={logo} alt="EAMSQUARE" />
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`nav-menu ${isOpen ? "show" : ""}`}>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setIsOpen(false)}>
            Services
          </NavLink>
          {/* <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setIsOpen(false)}>
            Projects
          </NavLink> */}
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
