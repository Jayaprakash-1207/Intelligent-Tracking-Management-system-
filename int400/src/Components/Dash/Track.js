import React, { useState } from "react";
import { Button, Collapse, List, ListItem, ListItemText, Tooltip } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { Link } from "react-router-dom";
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
// Menus component to manage menu-related features
const Track = () => {
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
          <LocationSearchingIcon />
          <span className="ms-2 d-none d-sm-inline">Track</span>
          <ArrowDropDown />
        </Button>
      </Tooltip>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <div style={menuStyle}>
          <List component="div" disablePadding style={{ marginLeft: '20px', color:"black" }}>
            <ListItem button component={Link} to="/dashboard/map" onClick={() => setIsExpanded(false)}>
              <ListItemText primary="Map" />
            </ListItem>
            <ListItem button component={Link} to="/dashboard/track" onClick={() => setIsExpanded(false)}>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </List>
        </div>
      </Collapse>
    </div>
  );
};

export default Track;
