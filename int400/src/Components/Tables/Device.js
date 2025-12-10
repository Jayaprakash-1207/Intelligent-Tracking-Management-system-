import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Grid,
  Box,
  Typography,
  Paper,
  TextField,
  CircularProgress,
  Alert,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LightPurpleButton } from "../buttonStyles";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const defaultTheme = createTheme();

const Device = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const clearMessages = () => {
    setSuccessMsg('');
    setErrorMsg('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);
    const formData = {
      code: event.target.code.value,
      name: event.target.name.value,
      startdate: startDate,
    };

    try {
      const response = await axios.post('http://localhost:5000/auth/device', formData);
      if (response.status === 200) {
        console.log('Form data submitted successfully:', response.data);
        setSuccessMsg('Device registered successfully!');
        setTimeout(clearMessages, 5000);  // Clear message after 10 seconds
      } else {
        throw new Error('Unexpected server response');
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMsg('Duplicate entry: the provided code or name already exists.');
      } else {
        setErrorMsg('Failed to register Device. Please try again!');
      }
      setTimeout(clearMessages, 5000);  // Clear message after 10 seconds
    } finally {
      setLoader(false);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid item md={5} component={Paper} elevation={6} square>
          <div className="d-flex justified-content-center align-items-center mt-3">
            <Box
              sx={{ my: 8, mx: 4, display: "flex", flexDirection: "column" }}
            >
              <Typography variant="h4" align="center">
                {/* Device */}
              </Typography>
              <Typography variant="h6" color="text.primary" align="center">
                Device Details!...

              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 2, width: "100%" }}
              >
                {successMsg && <Alert severity="success">{successMsg}</Alert>}
                {errorMsg && <Alert severity="error">{errorMsg}</Alert>}

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="code"
                  label="Code"
                  name="code"
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="off"
                />
                {/* <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  autoComplete="off"
                /> */}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="startdate"
                  label="Starting Date"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {/* <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="enddate"
                  label="Ending Date"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                /> */}
                <LightPurpleButton
                  type="Submit"
                  variant="contained"
                  sx={{ mt: 3, mb : 2 }}
                  disabled={loader}
                >
                  {loader ? <CircularProgress size={24} color="inherit" /> : "Register"}
                </LightPurpleButton>
              </Box>
            </Box>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Device;
