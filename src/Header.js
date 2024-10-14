import React, { useState } from "react";

import { Link, NavLink } from 'react-router-dom';
import logo from "./logo.png";
import "./CSS/Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  //       const [menuOpen, setMenuOpen] = useState(false);
      
  //       const toggleMenu = () => {
  //         setMenuOpen(!menuOpen);
  //       };
    
  // return (
  //   <div>
    
  //        <section className="headerContainer">
  //     <div className="container1">
  //       <div className="logo1">
  //         <img src={logo} alt="SN Repair Logo" />
  //       </div>
  //       <button className="mobile-menu-btn" onClick={toggleMenu}>
  //         &#9776; {/* Mobile menu icon */}
  //       </button>
  //       <nav>
  //         <ul className={menuOpen ? "menu show" : "menu"}>
  //           <li>
  //             <Link to="/">Home</Link>
  //           </li>
  //           <li>
  //             <Link to="/services">Services</Link>
  //           </li>
  //           <li>
  //             <Link to="/activits">Activits</Link>
  //           </li>
  //           <li>
  //             <Link to="/aboutUs">AboutUs</Link>
  //           </li>
  //           <li>
  //             <Link to="/contactUs">ContactUs</Link>
  //           </li>
  //         </ul>
  //       </nav>
  //       <div className="contact-info">
  //         <p>
  //           Have any questions? <br /> <a href="#">+91 8790096926</a>
  //         </p>
  //       </div>
  //     </div>
  //     </section>

  //   </div>
  // )
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/"><img src={logo} alt="SN Repair Logo" className="image" /></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/" style={{ color: '#edf2f4' }}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/activits">activits</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutUs">aboutUs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contactUs">contactUs</NavLink>
            </li>
          
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Forms
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" to="/TrainerForm">Trainer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/SubjectForm">Subject</NavLink></li>
                <li><NavLink className="dropdown-item" to="/BatchForm">Batch</NavLink></li>
              </ul>
            </li> */}
           
          </ul>
       
        </div>
      </div>
    </nav>
  );
}

export default Header