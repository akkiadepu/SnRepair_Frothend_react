import React, { useState } from "react";

import { Link, NavLink } from 'react-router-dom';
import logo from "./logo.png";
import "./CSS/Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
 
  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    {/* Logo Section */}
    <div className="d-flex align-items-center">
      <NavLink className="navbar-brand" to="/">
        <img src={logo} alt="SN Repair Logo" className="image" />
      </NavLink>
    </div>

    {/* Toggler Button (No change) */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Centered Navigation Links */}
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/" style={{ color: '#edf2f4' }}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/activits">
            Activits
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/aboutUs">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contactUs">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>

    {/* Get in Touch Section */}
    <div className="navbar-contact text-end ">
      <span className="d-block" style={{ fontSize: '1.2rem' }}>Get in touch:</span>
      <span className="d-block" style={{ fontSize: '1rem' }}>+91 95332 02089</span>
    </div>
  </div>
</nav>
    
  );
}

export default Header