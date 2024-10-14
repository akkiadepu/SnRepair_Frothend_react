// import React from 'react';
// import { Link, NavLink ,useNavigate } from "react-router-dom";
// import './AdminNavStyle.css'
// import { useState, useEffect } from "react";


// function AdminNav() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const navigate = useNavigate();
  
//   useEffect(() => {
//     const token = localStorage.getItem('token');
    
//     // If no token is found, redirect to the login page
//     if (!token) {
//       navigate('/admin/login');
//     }
//   }, [navigate]);
//   return (
//     <div>

// <nav>
//       <Link to="/" className="title">
//       SN Enterpires<span style={{color:"black"}}></span>
//       </Link>
//       <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//       <ul className={menuOpen ? "open" : ""}>
//         <li>
//           <NavLink to="/admin/AdminDashboard">Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/admin/AddActivities"> addActivities</NavLink>
//         </li>
//         <li>
//           <NavLink to="/admin/CustomerRequst"> CustomerRequst</NavLink>
//         </li>
//       </ul>
//     </nav>

//     </div>
//   )
// }

// export default AdminNav;


import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './AdminNavStyle.css';

function AdminNav() {
    const [menuOpen, setMenuOpen] = useState(false);
     const navigate = useNavigate();

    // useEffect(() => {
    //     const token = localStorage.getItem('token');

    //     if (!token) {
    //         navigate('/admin/login');
    //     }
    // }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
  
        navigate('/');
    };

    return (
        // <div>
        //     <nav className="AdminNav">
        //         <Link to="/" className="title">
        //             SN Enterprises<span style={{ color: "black" }}></span>
        //         </Link>
        //         <div className="menu" >
        //         {/* onClick={() => setMenuOpen(!menuOpen)} */}
        //             <span></span>
        //             <span></span>
        //             <span></span>
        //         </div>
        //         <ul className={menuOpen ? "open" : ""}>
        //             <li>
        //                 <NavLink to="/admin/AdminDashboard">Home</NavLink>
        //             </li>
        //             <li>
        //                 <NavLink to="/admin/AddActivities">Add Activities</NavLink>
        //             </li>
        //             <li>
        //                 <NavLink to="/admin/CustomerRequst">Customer Requests</NavLink>
        //             </li>
        //             <li>
        //                 <button onClick={handleLogout}  className="logout-button" >Logout</button>
                        
        //             </li>
        //         </ul>
        //     </nav>
        // </div>

        <nav className="navbar navbar-expand-lg navbar1">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">SN <span style={{ color: "rgb(0, 0, 255)" }}>Enterprises</span></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/admin/AdminDashboard" style={{ color: '#edf2f4' }}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/AddActivities">AddActivities</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/CustomerRequst">CustomerRequst</NavLink>
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

export default AdminNav;
