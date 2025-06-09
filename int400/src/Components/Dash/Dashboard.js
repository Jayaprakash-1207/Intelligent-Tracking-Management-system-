// import React, { useState } from "react";
// import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
// import { Button, Menu, Tooltip } from "@mui/material";
// import { MenuOpen, ArrowDropDown } from "@mui/icons-material";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import axios from "axios";
// import "../../Components/Dash/Dashboard.css";
// import logo from "../../assets/Eubix.png";
// // import logo1 from '../../assets/Sriher_logo1.jpg'
// import BgVideo from "../../assets/Sriher1.mp4";
// import Menus from "./Menus";
// import Mentor from "./Mentor";
// import Attendence from "./Attendence";
// import Mark from "./Mark";
// import Feedback from "./Feedback";
// import TimeTable from "./Timetable";
// import Divider from '@mui/material/Divider';
// import ListSubheader from '@mui/material/ListSubheader';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';

// // Main dashboard component
// const Dashboard = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     axios.get('http://localhost:5000/auth/logout')
//       .then(result => {
//         if (result.data.Status) {
//           localStorage.removeItem("valid");
//           navigate('/');
//         }
//       })
//   };

//   // Main render return
//   return (
//     <div className="container-fluid">
//       <div className="bg-image-container">
//         {/* <img src={logo1} alt="" /> */}
//       </div>
//       <div className="row flex-nowrap">

//         {/* Sidebar Start */}
//         <div className="col-auto col-md-3 col-xl-2 px-sm-10 px-0 sidebar">
//           {/* Sidebar Content */}
//           <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
//             {/* Logo */}
//             <div className="logo-container">
//               <Link to= '/dashboard'>
//               <img src={logo} alt="Logo" style={{ height: "110%", width: "110%" }} />
//               </Link>
//             </div>
//             {/* Menu Items */}
//             <div>
//               <Menus />
//               {/* <TimeTable />
//               <Mentor />
//               <Attendence />
//               <Mark />
//               <Feedback /> */}
//               <Divider sx={{ my: 1 }} />
//               {/* <React.Fragment>
//           <ListSubheader component="div" inset>
//               User
//           </ListSubheader>
//           <ListItemButton component={Link} to="/dashboard/Admin/profile">
//               <ListItemIcon>
//                   <AccountCircleOutlinedIcon color={location.pathname === "/dashboard/Admin/profile" ? 'primary' : 'inherit'} />
//               </ListItemIcon>
//               <ListItemText primary="Profile" />
//           </ListItemButton>
//           <ListItemButton component={Link} to="/logout">
//               <ListItemIcon>
//                   <ExitToAppIcon color={location.pathname === "/logout" ? 'primary' : 'inherit'} />
//               </ListItemIcon>
//               <ListItemText primary="Logout" />
//           </ListItemButton>
//       </React.Fragment> */}
//             </div>
//           </div>
//         </div>
//         {/* Sidebar End */}

//         {/* Outlet for rendering nested routes */}
//         <div className="col p-0 m-0">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import axios from "axios";
import "../../Components/Dash/Dashboard.css";
import logo from "../../assets/Eubix3.png";
import logo1 from "../../assets/carspeed.jpeg";
import LoginBg from "../../assets/dash.mp4";
import Menus from "./Menus";
import Track from "./Track";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    axios.get("http://localhost:5000/auth/logout").then((result) => {
      if (result.data.Status) {
        localStorage.removeItem("valid");
        navigate("/");
      }
    });
  };

  return (
    <div className="container-fluid p-0">
      <div className="bg-image-container">
          <img src={logo1} alt="" />
       </div>
{/* <div>
  <video autoPlay loop muted className="bg">
    <source src={LoginBg} type="video/mp4" />
  </video>
</div> */}


      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/dashboard">
            <img
              src={logo}
              alt="Logo"
              style={{ height: "50px", width: "200px" }}
            />
          </Link>

          {/* Toggle button for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Menus />
              </li>
              <li>
                <Track />
              </li>
            </ul>

            {/* User Profile and Logout
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <ListItemButton component={Link} to="/dashboard/Admin/profile" className="nav-link">
                  <ListItemIcon>
                    <AccountCircleOutlinedIcon color={location.pathname === "/dashboard/Admin/profile" ? 'primary' : 'inherit'} />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </li>
              <li className="nav-item">
                <ListItemButton component={Link} to="/logout" className="nav-link">
                  <ListItemIcon>
                    <ExitToAppIcon color={location.pathname === "/logout" ? 'primary' : 'inherit'} />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
      {/* Navbar End */}

      {/* Content Area for rendering nested routes */}
      <div className="col p-0 m-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

// import React, { useState, useEffect } from "react";
// import { Link, Outlet, useNavigate } from "react-router-dom";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import axios from "axios";
// import "../../Components/Dash/Dashboard.css";
// import logo from "../../assets/Sret w.png";
// import logo1 from '../../assets/Sriher_logo1.jpg';
// import Menus from "./Menus";
// import Mentor from "./Mentor";
// import Attendence from "./Attendence";
// import Mark from "./Mark";
// import Feedback from "./Feedback";
// import TimeTable from "./Timetable";
// import Profile from "./Profile";

// // Main dashboard component
// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Check local storage for authentication token
//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     setIsAuthenticated(!!token);  // Set to true if token exists, false otherwise
//     if (!token) navigate('/login'); // Redirect to login if no token
//   }, [navigate]);

//   // Handler for logging out
//   const handleLogout = () => {
//     axios.get('http://localhost:3000/auth/logout')
//       .then(result => {
//         if (result.data.Status) {
//           localStorage.removeItem("authToken");
//           setIsAuthenticated(false);
//           navigate('/');
//         }
//       }).catch(error => {
//         console.error("Logout failed:", error);
//       });
//   };

//   return (
//     <div className="container-fluid">
//       <div className="bg-image-container">
//         <img src={logo1} alt="" />
//       </div>
//       <div className="row flex-nowrap">

//         {/* Sidebar Start */}
//         <div className="col-auto col-md-3 col-xl-2 px-sm-10 px-0 sidebar">
//           <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
//             <div className="logo-container">
//               <Link to='/dashboard'>
//                 <img src={logo} alt="Logo" style={{ height: "110%", width: "110%" }} />
//               </Link>
//             </div>
//             <div>
//               <Menus />
//               <TimeTable />
//               <Mentor />
//               <Attendence />
//               <Mark />
//               <Feedback />
//               {isAuthenticated && <Profile />}
//             </div>
//           </div>
//         </div>
//         {/* Sidebar End */}

//         {/* Outlet for rendering nested routes */}
//         <div className="col p-0 m-0">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
