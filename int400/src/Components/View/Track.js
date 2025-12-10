import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, TextField, Button, Grid, Typography, Paper, Box, Card, CardContent, CardHeader, Avatar, Divider, Stack} from "@mui/material";
import { Speed, LocalGasStation, Thermostat, Security, AccountCircle} from "@mui/icons-material";
import MapIcon from '@mui/icons-material/Map';
import {PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";
import CameraAccess from "./CameraAccess";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


// Fix default marker icon issue for Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Track = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleData, setVehicleData] = useState(null);
  const [location, setLocation] = useState(null); // Holds latitude and longitude
  const [containerHeight, setContainerHeight] = useState(300); // Initial height
  const [maximizedChart, setMaximizedChart] = useState(null);
  const [titleColor, setTitleColor] = useState("red");

  // ​‌‌‍⁡⁢⁣⁢Update height on window resize⁡​
  useEffect(() => {
    const handleResize = () => {
      const newHeight = window.innerHeight / 3; // Adjust the division factor based on your preference
      setContainerHeight(newHeight);
    };
    window.addEventListener("resize", handleResize);
    // Initial call to set the height
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    // List of colors for the title
  const colors = ["red", "yellow", "green", "blue", "purple", "orange"];

// ⁡⁢⁣⁢​‌‌‍Update title color every 30 seconds​⁡
    useEffect(() => {
      const colorInterval = setInterval(() => {
        setTitleColor((prevColor) => {
          const currentIndex = colors.indexOf(prevColor);
          const nextIndex = (currentIndex + 1) % colors.length;
          return colors[nextIndex];
        });
      }, 30000); // 30 seconds
      return () => clearInterval(colorInterval);
    }, [colors]);


  const fetchVehicleData = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/auth/dashboard", { vehicleNumber })
      .then((response) => {
        if (response.data) {
          const data = response.data;
          setVehicleData(response.data);
          setLocation({ lat: data.latitude, lng: data.longitude });
        } else {
          // Handle case where no data is found
          setVehicleData(null); // Or some other state to indicate no data
          alert("No data found for the provided vehicle number.");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

    // ​‌‌‍⁡⁢⁣⁢Update location whenever vehicleData is updated⁡​
    useEffect(() => {
      if (vehicleData) {
        setLocation({ lat: vehicleData.latitude, lng: vehicleData.longitude });
      }
    }, [vehicleData]);
  

  // const renderChart = (dataKey, title, Icon) => (
  //   <Card sx={{ height: "100%" }}>
  //     <CardHeader
  //       avatar={
  //         <Avatar sx={{ bgcolor: "primary.main" }}>
  //           <Icon />
  //         </Avatar>
  //       }
  //       title={title}
  //       titleTypographyProps={{ align: "center", variant: "h6" }}
  //     />
  //     <CardContent>
  //       <Typography variant="h5" align="center">
  //         {vehicleData ? vehicleData[dataKey] : "N/A"}
  //       </Typography>
  //     </CardContent>
  //   </Card>
  // );

  const renderChart = (dataKey, title, Icon) => (
    <Card sx={{ height: "100%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "primary.main" }}>
            <Icon />
          </Avatar>
        }
        title={title}
        titleTypographyProps={{ align: "center", variant: "h6" }}
      />
      <CardContent>
        {vehicleData && vehicleData[dataKey] ? (
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={[vehicleData]} margin={{ top: 5, right: 20, left: 10, bottom: 5 }} >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="vehicle_number" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer> ) : ( <Typography variant="h5" align="center"> N/A </Typography>
        )}
      </CardContent>
    </Card>
  );
  
  const renderChart1 = (dataKey1, dataKey2, title1, title2, Icon) => (
    <Card sx={{ height: "100%" }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "primary.main" }}>
          <Icon />
        </Avatar>}
      title=<div>{title1} & {title2}</div>
      titleTypographyProps={{ align: "center", variant: "h6" }}/>
    <CardContent>
      {vehicleData && vehicleData[dataKey1] && vehicleData[dataKey2] ? (
      <ResponsiveContainer width="100%" height={containerHeight}>
        <BarChart
          data={vehicleData ? [vehicleData] : []}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Vehicle No" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={dataKey1} fill="#3894f4" name={title1} />
          <Bar dataKey={dataKey2} fill="#82ca9d" name={title2} />
        </BarChart>
      </ResponsiveContainer> ) : ( <Typography variant="h5" align="center"> N/A </Typography> )}
      </CardContent>
      </Card>
  );

  return (
    <Container sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom style={{color:titleColor}}>
        Vehicle Dashboard
      </Typography>
      <form onSubmit={fetchVehicleData}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              variant="outlined"
              label="Enter Vehicle Number"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ height: "100%" }} >
              View
            </Button>
          </Grid>
        </Grid>
      </form>

      {!vehicleData ? (
      <p>No data found for the provided vehicle number.</p>
    ) : (
        <Grid container spacing={4} sx={{ mt: 4 }}>
        {/* Driver Details Section */}
          <Grid item xs={12}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "secondary.main", width: 56, height: 56 }}>
                    <AccountCircle sx={{ fontSize: 40 }} />
                  </Avatar> }
                title="Driver Details"
                titleTypographyProps={{ align: "center", variant: "h6", fontWeight: 'bold', color:titleColor }}
                sx={{ textAlign: 'center', paddingBottom: 0 }} />
              <CardContent sx={{ paddingTop: 0 }}>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                <Typography variant="body2" gutterBottom>
                    <strong>Vehicle No:</strong> {vehicleData.vehicle_number || "N/A"}
                  </Typography>
                  <Stack direction='row' spacing={2}>
                  <Typography variant="h6" gutterBottom>
                    <strong>Name:</strong> {vehicleData.driver_name || "N/A"}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    <strong>Age:</strong> {vehicleData.driver_age || "N/A"}
                  </Typography>
                  </Stack>
                  <Divider sx={{ width: "100%", marginY: 1 }} />
                  <Stack direction="row" spacing={2}>
                    <Typography variant="body1">
                      <strong>Contact:</strong> {vehicleData.driver_contact || "N/A"}
                    </Typography>
                    <Typography variant="body1">
                      <strong>DL Number:</strong> {vehicleData.driver_dl || "N/A"}
                    </Typography>
                  </Stack>
                  <Divider sx={{ width: "100%", marginY: 1 }} />
                  <Stack direction='row' spacing={2}>
                  <Typography variant="body1">
                    <strong>Address:</strong> {vehicleData.driver_address || "N/A"}
                  </Typography>
                  <Typography variant="body1">
                    <strong>odometer:</strong> {vehicleData.odometer || "N/A"}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Make:</strong> {vehicleData.make || "N/A"}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Model:</strong> {vehicleData.model || "N/A"}
                  </Typography>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            {renderChart("speed", "Speed", Speed)}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderChart1("fuel_range", "oil_level", "Fuel Range", "Oil Level", LocalGasStation)}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderChart("temperature", "Temperature", Thermostat)}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderChart("tyre_health", "Tyre Health", Security)}
          </Grid>
          <Grid item xs={12} md={4}>
           {<CameraAccess/>}
          </Grid>
          {/* Map Section with Leaflet */}
                    {location && (
            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "primary.main" }}>
                      <MapIcon />
                    </Avatar>
                  }
                  title="Vehicle Location"
                  titleTypographyProps={{ align: "center", variant: "h6" }}
                />
                <CardContent>
                  <MapContainer
                    center={[location.lat, location.lng]}
                    zoom={13}
                    style={{ height: "200px", width: "100%" }}
                    key={`${location.lat}-${location.lng}`}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[location.lat, location.lng]}>
                      <Popup>
                        Vehicle Location: [{location.lat}, {location.lng}]
                      </Popup>
                    </Marker>
                  </MapContainer>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid> 
      )}
    </Container>
  );
};

export default Track;

