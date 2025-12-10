import React, { useState, useRef } from "react";
import { Grid, Button, Typography, Card, CardHeader, Avatar } from "@mui/material";
import Webcam from "react-webcam"; // Optional if using react-webcam library
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import StopIcon from "@mui/icons-material/Stop";
import SecurityIcon from "@mui/icons-material/Security";
import axios from 'axios';

const CameraAccess = () => {
  const [cameraActive, setCameraActive] = useState(false);
  const webcamRef = useRef(null);
  const [scriptOutput, setScriptOutput] = useState("");

  const handleToggleCamera = () => {
    setCameraActive(!cameraActive);
  };

  const runScript = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/run-script');
      setScriptOutput(response.data);
    } catch (error) {
      // setScriptOutput(Error: ${error.message});
    }
  };

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user", // or 'environment' for back camera
  };

  return (
    <Card sx={{ height: "100%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "primary.main" }}>
            <SecurityIcon />
          </Avatar>
        }
        title="Camera Access"
        titleTypographyProps={{ align: "center", variant: "h6" }}
      />
      <Grid>
        {/* Button to start/stop camera */}
        {/* <Grid item xs={12} textAlign="center" style={{ marginBottom: "8px" }}>
          <Button
            variant="contained"
            color={cameraActive ? "secondary" : "primary"}
            startIcon={cameraActive ? <StopIcon /> : <CameraAltIcon />}
            onClick={handleToggleCamera}
            size="large"
            style={{ textTransform: "none", borderRadius: "20px", fontSize: "16px" }}
          >
            {cameraActive ? "Stop Camera" : "Start Camera"}
          </Button>
        </Grid> */}

        {/* Button to run Python script */}
        <Grid item xs={12} textAlign="center" style={{ marginBottom: "8px" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={runScript}
            size="large"
            style={{ textTransform: "none", borderRadius: "20px", fontSize: "16px" }}
          >
            Start Camera
          </Button>
        </Grid>

        {/* Camera Feed */}
        <Grid item xs={12} textAlign="center">
          {cameraActive ? (
            <Webcam
              audio={false} // Set to true if you need audio
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          ) : (
            <Typography variant="h5" align="center">
              Camera is Off
            </Typography>
          )}
        </Grid>

        {/* Display Script Output */}
        <Grid item xs={12} textAlign="center" style={{ marginTop: "16px" }}>
          <Typography variant="h6">
            {scriptOutput}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CameraAccess;