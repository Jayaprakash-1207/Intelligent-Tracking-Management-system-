// import React, { useState } from "react";
// import { Button, Collapse, List, ListItem, ListItemText, Tooltip } from "@mui/material";
// import { ArrowDropDown } from "@mui/icons-material";
// import { Link } from "react-router-dom";
// import DashboardIcon from '@mui/icons-material/Dashboard';

// // Menus component to manage menu related features
// const Menus = () => {
//   // State to manage the expansion of menu
//   const [isExpanded, setIsExpanded] = useState(false);

//   // Function to toggle the expansion state
//   const handleToggle = () => {
//     setIsExpanded(!isExpanded);
//   };

//   // Custom style for the menu
//   const menuStyle = {
//     // background: '#F0F0F0', // Example background color
//     borderRadius: '0px', // Optional: if you want rounded corners
//     boxShadow: 'black' // Optional: if you want to add some shadow for depth
//   };

//   // Render
//   return (
//     <div>
//       {/* Tooltip for the menu button */}
//       <Tooltip title="Click Here" placement="right" arrow>
//         <Button
//           onClick={handleToggle}
//           style={{ color: "white" }}
//         >
//           {/* Menu button with icon and text */}
//           <DashboardIcon />
//           <span className="ms-2 d-none d-sm-inline">Config Menu</span>
//           <ArrowDropDown />
//         </Button>
//       </Tooltip>
//       {/* Menu content */}
//       <Collapse in={isExpanded} timeout="auto" unmountOnExit>
//         <div style={menuStyle}>
//           {/* List of menu items */}
//           <List component="div" disablePadding style={{ marginLeft: '20px', color:"white" }}>
//             {/* Links to various dashboard pages */}
//             <ListItem button component={Link} to="/dashboard/device" onClick={() => setIsExpanded(false)}>
//               <ListItemText primary="Device" />
//             </ListItem>
//             <ListItem button component={Link} to="/dashboard/Driver" onClick={() => setIsExpanded(false)}>
//               <ListItemText primary="Driver" />
//             </ListItem>
//             <ListItem button component={Link} to="/dashboard/Vehicle" onClick={() => setIsExpanded(false)}>
//               <ListItemText primary="Vehicle" />
//             </ListItem>
//             {/* <ListItem button component={Link} to="/dashboard/degree" onClick={() => setIsExpanded(false)}>
//               <ListItemText primary="Degree" />
//             </ListItem>
//             <ListItem button component={Link} to="/dashboard/institution" onClick={() => setIsExpanded(false)}>
//               <ListItemText primary="Institution" />
//             </ListItem>
//             <ListItem button component={Link} to="/dashboard/program" onClick={() => setIsExpanded(false)}>
//               <ListItemText primary="Program" />
//             </ListItem>
//             <ListItem button component={Link} to="/dashboard/regulation" onClick={() => setIsExpanded(false)}>
//               <ListItemText primary="Regulation" />
//             </ListItem>
//             <ListItem button component={Link} to="/dashboard/role" onClick={() => setIsExpanded(false)}>
//               <ListItemText primary="Role" />
//             </ListItem>
//             <ListItem button component={Link} to="/dashboard/semester" onClick={() => setIsExpanded(false)}>
//               <ListItemText primary="Semester" />
//             </ListItem>
//             <ListItem button component={Link} to="/dashboard/semestertype" onClick={() => setIsExpanded(false)}>
//               <ListItemText primary="Semester Type" />
//             </ListItem>
//             <ListItem button component={Link} to="/dashboard/staff" onClick={() => setIsExpanded(false)}>
//               <ListItemText primary="Staff" />
//             </ListItem>
//             <ListItem button component={Link} to="/dashboard/status" onClick={() => setIsExpanded(false)}>
//               <ListItemText primary="Status" />
//             </ListItem>
//             <ListItem button component={Link} to="/dashboard/student" onClick={() => setIsExpanded(false)}>
//               <ListItemText primary="Student" />
//             </ListItem>
//             <ListItem button component={Link} to="/dashboard/term" onClick={() => setIsExpanded(false)}>
//               <ListItemText primary="Term" />
//             </ListItem>
//             <ListItem button component={Link} to="/dashboard/year" onClick={() => setIsExpanded(false)}>
//               <ListItemText primary="Year" />
//             </ListItem> */}
//           </List>
//         </div>
//       </Collapse>
//     </div>
//   );
// };

// export default Menus;

// import React, { useState } from "react";
// import { Button, Collapse, List, ListItem, ListItemText, Tooltip } from "@mui/material";
// import { ArrowDropDown } from "@mui/icons-material";
// import { Link } from "react-router-dom";
// import DashboardIcon from '@mui/icons-material/Dashboard';

// const Menus = ({ userRole }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleToggle = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const menuStyle = {
//     background: '#F0F0F0',
//     borderRadius: '0px',
//     boxShadow: 'black',
//   };

//   return (
//     <div>
//       <Tooltip title="Click Here" placement="right" arrow>
//         <Button
//           onClick={handleToggle}
//           style={{ color: "white" }}
//         >
//           <DashboardIcon />
//           <span className="ms-2 d-none d-sm-inline">Config Menu</span>
//           <ArrowDropDown />
//         </Button>
//       </Tooltip>
//       <Collapse in={isExpanded} timeout="auto" unmountOnExit>
//         <div style={menuStyle}>
//           <List component="div" disablePadding style={{ marginLeft: '20px', color:"black" }}>
//             {userRole === 'Admin' && (
//               <>
//                 <ListItem button component={Link} to="/dashboard/academic_year" onClick={() => setIsExpanded(false)}>
//                   <ListItemText primary="Academic Year" />
//                 </ListItem>
//                 <ListItem button component={Link} to="/dashboard/role" onClick={() => setIsExpanded(false)}>
//                   <ListItemText primary="Role" />
//                 </ListItem>
//               </>
//             )}
//             {(userRole === 'Admin' || userRole === 'Staff') && (
//               <ListItem button component={Link} to="/dashboard/staff" onClick={() => setIsExpanded(false)}>
//                 <ListItemText primary="Staff" />
//               </ListItem>
//             )}
//             <ListItem button component={Link} to="/dashboard/student" onClick={() => setIsExpanded(false)}>
//               <ListItemText primary="Student" />
//             </ListItem>
//           </List>
//         </div>
//       </Collapse>
//     </div>
//   );
// };

// export default Menus;


import React, { useState } from "react";
import { Button, Collapse, List, ListItem, ListItemText, Tooltip } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';

// Menus component to manage menu-related features
const Menus = () => {
  // State to manage the expansion of menu
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expansion state
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Custom style for the menu
  const menuStyle = {
    position: "absolute",  // Positioning to avoid affecting navbar height
    background: '#F0F0F0',
    zIndex: 1000,  // Ensure it stays above other elements
    width: "200px",  // Define a fixed width for the menu
    boxShadow: '0px 2px 10px rgba(0,0,0,0.2)',  // Optional: adding shadow
  };

  return (
    <div style={{ position: "relative" }}> {/* Ensures the menu is positioned relative to this container */}
      <Tooltip title="Click Here" placement="right" arrow>
        <Button
          onClick={handleToggle}
          style={{ color: "white" }}
        >
          <DashboardIcon />
          <span className="ms-2 d-none d-sm-inline">Config Menu</span>
          <ArrowDropDown />
        </Button>
      </Tooltip>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <div style={menuStyle}>
          <List component="div" disablePadding style={{ marginLeft: '20px', color:"black" }}>
            <ListItem button component={Link} to="/dashboard/device" onClick={() => setIsExpanded(false)}>
              <ListItemText primary="Device" />
            </ListItem>
            <ListItem button component={Link} to="/dashboard/Driver" onClick={() => setIsExpanded(false)}>
              <ListItemText primary="Driver" />
            </ListItem>
            <ListItem button component={Link} to="/dashboard/Vehicle" onClick={() => setIsExpanded(false)}>
              <ListItemText primary="Vehicle" />
            </ListItem>
            {/* Additional menu items can be added here */}
          </List>
        </div>
      </Collapse>
    </div>
  );
};

export default Menus;
