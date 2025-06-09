// import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   Grid,
//   Box,
//   Typography,
//   Paper,
//   TextField,
//   CircularProgress,
//   Alert,
// } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { LightPurpleButton } from "../buttonStyles";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// const defaultTheme = createTheme();

// const Vehicle = () => {
//   const navigate = useNavigate();
//   const [loader, setLoader] = useState(false);
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [successMsg, setSuccessMsg] = useState('');
//   const [errorMsg, setErrorMsg] = useState('');

//   const clearMessages = () => {
//     setSuccessMsg('');
//     setErrorMsg('');
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoader(true);
//     const formData = {
//       code: event.target.code.value,
//       name: event.target.name.value,
//       description: event.target.description.value,
//       startdate: startDate,
//       enddate: endDate
//     };

//     try {
//       const response = await axios.post('http://localhost:5000/auth/vehicle', formData);
//       if (response.status === 200) {
//         console.log('Form data submitted successfully:', response.data);
//         setSuccessMsg('Vehicle registered successfully!');
//         setTimeout(clearMessages, 5000);  // Clear message after 10 seconds
//       } else {
//         throw new Error('Unexpected server response');
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 409) {
//         setErrorMsg('Duplicate entry: the provided code or name already exists.');
//       } else {
//         setErrorMsg('Failed to register Vehicle. Please try again!');
//       }
//       setTimeout(clearMessages, 5000);  // Clear message after 10 seconds
//     } finally {
//       setLoader(false);
//     }
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid
//         container
//         justifyContent="center"
//         alignItems="center"
//         sx={{
//           height: "100vh",
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <Grid item md={6} component={Paper} elevation={6} square>
//           <div className="d-flex justified-content-center align-items-center mt-3">
//             <Box
//               sx={{ my: 8, mx: 4, display: "flex", flexDirection: "column" }}
//             >
//               <Typography variant="h4" align="center">
                
//               </Typography>
//               <Typography variant="h6" color="text.primary" align="center">
//                 Vehicle Details!...
//               </Typography>
//               <Box
//                 component="form"
//                 noValidate
//                 onSubmit={handleSubmit}
//                 sx={{ mt: 2, width: "100%" }}
//               >
//                 {successMsg && <Alert severity="success">{successMsg}</Alert>}
//                 {errorMsg && <Alert severity="error">{errorMsg}</Alert>}

//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="code"
//                   label="Code"
//                   name="code"
//                   autoComplete="name"
//                   autoFocus
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="name"
//                   label="Name"
//                   name="name"
//                   autoComplete="off"
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="description"
//                   label="Description"
//                   name="description"
//                   autoComplete="off"
//                 />
//                 {/* <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="startdate"
//                   label="Starting Date"
//                   type="date"
//                   value={startDate}
//                   onChange={(e) => setStartDate(e.target.value)}
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="enddate"
//                   label="Ending Date"
//                   type="date"
//                   value={endDate}
//                   onChange={(e) => setEndDate(e.target.value)}
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                 /> */}
//                 <LightPurpleButton
//                   type="Submit"
//                   variant="contained"
//                   sx={{ mt: 3, mb : 2 }}
//                   disabled={loader}
//                 >
//                   {loader ? <CircularProgress size={24} color="inherit" /> : "Register"}
//                 </LightPurpleButton>
//               </Box>
//             </Box>
//           </div>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// };

// export default Vehicle;
// import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   Grid,
//   Box,
//   Typography,
//   Paper,
//   TextField,
//   CircularProgress,
//   Alert,
// } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { LightPurpleButton } from "../buttonStyles";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// const defaultTheme = createTheme();

// const VehicleRegister = () => {
//   const navigate = useNavigate();
//     const [loader, setLoader] = useState(false);
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);
//     const [successMsg, setSuccessMsg] = useState('');
//     const [errorMsg, setErrorMsg] = useState('');
  
//     const clearMessages = () => {
//       setSuccessMsg('');
//       setErrorMsg('');
//     };
//   // State for form inputs
//   const [vehicle, setVehicle] = useState({
//     vehicleNumber: '',
//     model: '',
//     make: '',
//     odometer: '',
//     runtime: '',
//     speed: '',
//     FuelRange: '',
//     oillevel: '',
//     temperature: '',
//     Tyrehealth: '',
//     DriverName: '',
//   });

//   const [submitted, setSubmitted] = useState(false);

//   // Handle form input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setVehicle({
//       ...vehicle,
//       [name]: value,
//     });
//   };

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     console.log("Vehicle Details: ", vehicle);
//     // Here you would send 'vehicle' data to an API or backend server
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//             <Grid
//             container
//             justifyContent="center"
//             alignItems="center"
//             sx={{
//               height: "100vh",
//               backgroundPosition: "center",
//               backgroundSize: "cover",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             <Grid item md={6} component={Paper} elevation={6} square>
//               <div className="d-flex justified-content-center align-items-center mt-3">
//                 <Box
//                   sx={{ my: 8, mx: 4, display: "flex", flexDirection: "column" }}
//                 >
//                   <Typography variant="h4" align="center">
                    
//                   </Typography>
//                   <Typography variant="h6" color="text.primary" align="center">
//                     Vehicle Details!...
//                   </Typography>
//                   <Box
//                     component="form"
//                     noValidate
//                     onSubmit={handleSubmit}
//                     sx={{ mt: 2, width: "100%" }}
//                   >
//                     {successMsg && <Alert severity="success">{successMsg}</Alert>}
//                     {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
    
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="vehicle Number"
//                       label="vehicle Number"
//                       name="vehicle Number"
//                       autoFocus
//                     />
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="model"
//                       label="model"
//                       name="model"
//                       autoComplete="off"
//                     />
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="make"
//                       label="make"
//                       name="make"
//                       autoComplete="off"
//                     />
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="odometer"
//                       label="odometer"
//                       name="odometer"
//                       autoComplete="off"
//                     />
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="runtime"
//                       label="runtime"
//                       name="runtime"
//                       autoComplete="off"
//                     />
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="speed"
//                       label="speed"
//                       name="speed"
//                       autoComplete="off"
//                     />
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="Fuel range"
//                       label="Fuel range"
//                       name="Fuel Range"
//                       autoComplete="off"
//                     />
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="oil level"
//                       label="oil level"
//                       name="oil level"
//                       autoComplete="off"
//                     />
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="temperature"
//                       label="temperature"
//                       name="temperature"
//                       autoComplete="off"
//                     />
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="Tyre health"
//                       label="Tyre health"
//                       name="Tyre health"
//                       autoComplete="off"
//                     />
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="Driver Name"
//                       label="Driver Name"
//                       name="Driver Name"
//                       autoComplete="off"
//                     />
//                     {/* <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="startdate"
//                       label="Starting Date"
//                       type="date"
//                       value={startDate}
//                       onChange={(e) => setStartDate(e.target.value)}
//                       InputLabelProps={{
//                         shrink: true,
//                       }}
//                     />
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="enddate"
//                       label="Ending Date"
//                       type="date"
//                       value={endDate}
//                       onChange={(e) => setEndDate(e.target.value)}
//                       InputLabelProps={{
//                         shrink: true,
//                       }}
//                     /> */}
//                     <LightPurpleButton
//                       type="Submit"
//                       variant="contained"
//                       sx={{ mt: 3, mb : 2 }}
//                       disabled={loader}
//                     >
//                       {loader ? <CircularProgress size={24} color="inherit" /> : "Register"}
//                     </LightPurpleButton>
//                   </Box>
//                 </Box>
//               </div>
//             </Grid>
//           </Grid>
//         </ThemeProvider>
//   );
// };

// export default VehicleRegister;


// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   Grid,
//   Box,
//   Typography,
//   Paper,
//   TextField,
//   CircularProgress,
//   Alert,
// } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { LightPurpleButton } from "../buttonStyles";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// const defaultTheme = createTheme();

// const VehicleRegister = () => {
//   const navigate = useNavigate();
//   const [loader, setLoader] = useState(false);
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [successMsg, setSuccessMsg] = useState('');
//   const [errorMsg, setErrorMsg] = useState('');

//   const clearMessages = () => {
//     setSuccessMsg('');
//     setErrorMsg('');
//   };

//   // State for form inputs
//   const [vehicle, setVehicle] = useState({
//     vehiclenumber: '',
//     model: '',
//     make: '',
//     odometer: '',
//     runtime: '',
//     speed: '',
//     FuelRange: '',
//     oillevel: '',
//     temperature: '',
//     Tyrehealth: '',
//     DriverName: '',
//   });

//   const [submitted, setSubmitted] = useState(false);

//   // Handle form input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setVehicle({
//       ...vehicle,
//       [name]: value,
//     });
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoader(true);
//     clearMessages(); // Clear previous messages before new submission

//     try {
//       // Send a POST request to the backend with the vehicle data
//       const response = await axios.post('http://localhost:5000/auth/register-vehicle', vehicle);
//       setSuccessMsg(response.data); // Display success message
//       setSubmitted(true);
//     } catch (error) {
//       setErrorMsg("Error registering vehicle. Please try again.");
//       console.error(error);
//     } finally {
//       setLoader(false);
//     }
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid
//         container
//         justifyContent="center"
//         alignItems="center"
//         sx={{
//           height: "100vh",
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <Grid item md={6} component={Paper} elevation={6} square>
//           <div className="d-flex justified-content-center align-items-center mt-3">
//             <Box
//               sx={{ my: 8, mx: 4, display: "flex", flexDirection: "column" }}
//             >
//               <Typography variant="h6" color="text.primary" align="center">
//                 Vehicle Details!...
//               </Typography>
//               <Box
//                 component="form"
//                 noValidate
//                 onSubmit={handleSubmit}
//                 sx={{ mt: 2, width: "100%" }}
//               >
//                 {successMsg && <Alert severity="success">{successMsg}</Alert>}
//                 {errorMsg && <Alert severity="error">{errorMsg}</Alert>}

//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="vehiclenumber"
//                   label="vehiclenumber"
//                   name="vehiclenumber"
//                   autoFocus
//                   value={vehicle.vehiclenumber}
//                   onChange={handleChange}

//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="model"
//                   label="Model"
//                   name="model"
//                   autoComplete="off"
//                   value={vehicle.model}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="make"
//                   label="Make"
//                   name="make"
//                   autoComplete="off"
//                   value={vehicle.make}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="odometer"
//                   label="Odometer"
//                   name="odometer"
//                   autoComplete="off"
//                   value={vehicle.odometer}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="runtime"
//                   label="Runtime"
//                   name="runtime"
//                   autoComplete="off"
//                   value={vehicle.runtime}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="speed"
//                   label="Speed"
//                   name="speed"
//                   autoComplete="off"
//                   value={vehicle.speed}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="FuelRange"
//                   label="Fuel Range"
//                   name="FuelRange"
//                   autoComplete="off"
//                   value={vehicle.FuelRange}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="oillevel"
//                   label="Oil Level"
//                   name="oillevel"
//                   autoComplete="off"
//                   value={vehicle.oillevel}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="temperature"
//                   label="Temperature"
//                   name="temperature"
//                   autoComplete="off"
//                   value={vehicle.temperature}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="Tyrehealth"
//                   label="Tyre Health"
//                   name="Tyrehealth"
//                   autoComplete="off"
//                   value={vehicle.Tyrehealth}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="DriverName"
//                   label="Driver Name"
//                   name="DriverName"
//                   autoComplete="off"
//                   value={vehicle.DriverName}
//                   onChange={handleChange}
//                 />

//                 <LightPurpleButton
//                   type="Submit"
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2 }}
//                   disabled={loader}
//                 >
//                   {loader ? <CircularProgress size={24} color="inherit" /> : "Register"}
//                 </LightPurpleButton>
//               </Box>
//             </Box>
//           </div>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// };

// export default VehicleRegister;

// 



// 

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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LightPurpleButton } from "../buttonStyles";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const defaultTheme = createTheme();

const Vehicle = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [driver, setDriver] = useState([]);
  const [selecteddriver, setSelectedDriver] = useState("");

  const clearMessages = () => {
    setSuccessMsg('');
    setErrorMsg('');
  };

  useEffect(() => {
    // Fetch Driver
    axios.get("http://localhost:5000/auth/driver")
    .then((response) => {
      setDriver(response.data);
    })
    .catch((error) => {
      console.error("Error fetching driver:",error);
    })
  },[]);

  const handleChange = (event) => {
    const selectedDriverId = event.target.value;
    setSelectedDriver(selectedDriverId);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);
    const formData = {
      vehicle_number: event.target.vehicle_number.value,
      model: event.target.model.value,
      make: event.target.make.value,
      odometer: event.target.odometer.value,
      runtime: event.target.runtime.value,
      speed: event.target.speed.value,
      fuel_range: event.target.fuel_range.value,
      oil_level: event.target.oil_level.value,
      temperature: event.target.temperature.value,
      tyre_health: event.target.tyre_health.value,
      driver_id: selecteddriver,
    };
    console.log(formData);

    try {
      const response = await axios.post('http://localhost:5000/auth/vehicle', formData);
      if (response.status === 200) {
        console.log('Form data submitted successfully:', response.data);
        setSuccessMsg('Vehicle registered successfully!');
        setTimeout(clearMessages, 5000);  // Clear message after 10 seconds
        // Reset the form fields
        event.target.reset();
      } else {
        throw new Error('Unexpected server response');
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMsg('Duplicate entry: the provided code or name already exists.');
      } else {
        setErrorMsg('Failed to register Vehicle. Please try again!');
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
        <Grid item md={6} component={Paper} elevation={6} square>
          <div className="d-flex justified-content-center align-items-center mt-3">
            <Box
              sx={{ my: 8, mx: 4, display: "flex", flexDirection: "column" }}
            >
              <Typography variant="h4" align="center">
                
              </Typography>
              <Typography variant="h6" color="text.primary" align="center">
                Vehicle Details!...
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
                  id="vehicle_number"
                  label="Vehicle Number"
                  name="vehicle_number"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="model"
                  label="Model"
                  name="model"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="make"
                  label="Make"
                  name="make"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="odometer"
                  label="Odometer"
                  name="odometer"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="runtime"
                  label="Run Time"
                  name="runtime"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="speed"
                  label="Speed"
                  name="speed"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="fuel_range"
                  label="Fuel Range"
                  name="fuel_range"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="oil_level"
                  label="Oil Level"
                  name="oil_level"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="temperature"
                  label="Temperature"
                  name="temperature"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="tyre_health"
                  label="Tyre Health"
                  name="tyre_health"
                />
                <FormControl fullWidth margin="normal" required>
                  <InputLabel id="driver_id">Driver</InputLabel>
                  <Select
                  labelId="driver_id"
                  id="driver_id"
                  value={selecteddriver}
                  label="Driver"
                  onChange={handleChange}
                  fullWidth>
                    {
                      driver.map((driver) => (
                        <MenuItem key={driver.id} value={driver.id}>
                          {driver.name}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
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

export default Vehicle;