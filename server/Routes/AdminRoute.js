// // import express from "express";
// // import nodemailer from 'nodemailer';
// // import { exec } from 'child_process';
// // import path from 'path';
// // import connection from "../utils/db.js";

// // const app = express()

// // let currentUserID = 1;


// // // ​‌‌‍⁡⁢⁣⁢‍𝗟𝗼𝗴𝗶𝗻 𝗲𝗻𝗱𝗽𝗼𝗶𝗻𝘁⁡​​⁡

// // app.post('/login', (req, res) => {
// //   // currentUserID = req.body.userID;
// //   const { username, password } = req.body;
// //   const sql = 'SELECT * FROM login WHERE USERNAME = ? AND PASSWORD = ?';
// //   connection.query(sql, [username, password], (err, result) => {
// //     if (err) {
// //       console.error('Error while querying database:', err);
// //       res.status(500).json({ error: 'Internal Server Error',details: err.message });
// //     } else if (result.length === 0) {
// //       res.status(401).json({ error: 'Invalid username or password' });
// //     } else {
// //       res.status(200).json({ loginStatus: true });
// //     }
// //   });
// // });


// // // ⁡⁢⁣⁢​‌‌‍𝗛𝗼𝗺𝗲 𝗖𝗼𝘂𝗻𝘁 𝗣𝗮𝗿𝘁:​⁡

// // app.get('/student_count', (req, res) => {
// //   const sql = "select count(id) as device from device";
// //   connection.query(sql, (err, result) => {
// //       if(err) return res.json({Status: false, Error: "Query Error"+err})
// //       return res.json({Status: true, Result: result})
// //   })
// // })

// // app.get('/staff_count', (req, res) => {
// //   const sql = "select count(id) as staff from staff";
// //   connection.query(sql, (err, result) => {
// //       if(err) return res.json({Status: false, Error: "Query Error"+err})
// //       return res.json({Status: true, Result: result})
// //   })
// // })
// // // API route to handle form submissions
// // // API route to fetch drivers

// // // Fetch drivers from both vehicle and driver tables
// // app.get("/driver", (req, res) => {
// //   const sql = "SELECT * FROM drivers"; // Fetch both ID and name
// //   connection.query(sql, (err, result) => {
// //     if (err) {
// //       console.error("Error fetching drivers: ", err);
// //       res.status(500).json({ error: "Error fetching drivers." });
// //     } else {
// //       res.status(200).json(result); // Send both ID and name to the frontend
// //     }
// //   });
// // });






// // // app.post("/register-vehicle", (req, res) => {
// // //   const vehicle = req.body;

// // //   const sql = `
// // //     INSERT INTO vehicles (vehicle_number, model, make, odometer, runtime, speed, fuel_range, oil_level, temperature, tyre_health, driver_id)
// // //     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
// // //   `;

// // //   connection.query(
// // //     sql,
// // //     [
// // //       vehicle.vehiclenumber,
// // //       vehicle.model,
// // //       vehicle.make,
// // //       vehicle.odometer,
// // //       vehicle.runtime,
// // //       vehicle.speed,
// // //       vehicle.FuelRange,
// // //       vehicle.oillevel,
// // //       vehicle.temperature,
// // //       vehicle.Tyrehealth,
// // //       vehicle.DriverName,
// // //     ],
// // //     (err, result) => {
// // //       if (err) {
// // //         console.error("Error inserting data: ", err);
// // //         res.status(500).send("Error registering vehicle.");
// // //       } else {
// // //         res.status(200).send("Vehicle registered successfully.");
// // //       }
// // //     }
// // //   );
// // // });

// // app.post('/vehicle', (req, res) => {
// //   const { vehicle_number, model, make, odometer, runtime, speed, fuel_range, oil_level, temperature, tyre_health, driver_id } = req.body;

// //   // Check if the DL number already exists
// //   const checkQuery = `SELECT * FROM vehicles WHERE vehicle_number = ?`;
// //   connection.query(checkQuery, [vehicle_number], (err, results) => {
// //     if (err) {
// //       console.error('Error querying MySQL:', err);
// //       res.status(500).json({ error: 'Database query error' });
// //       return;
// //     }

// //     // If results found, send a duplicate error
// //     if (results.length > 0) {
// //       res.status(409).json({ error: 'Duplicate Vehicle Number found' });
// //     } else {
// //       // Insert data into the database if no duplicates found
// //       const insertQuery = `
// //         INSERT INTO vehicles 
// //         (vehicle_number, model, make, odometer, runtime, speed, fuel_range, oil_level, temperature, tyre_health, driver_id) VALUES (?,?,?,?,?,?,?,?,?,?,?)
// //       `;
      
// //       const values = [vehicle_number, model, make, odometer, runtime, speed, fuel_range, oil_level, temperature, tyre_health, driver_id];

// //       connection.query(insertQuery, values, (error, result) => {
// //         if (error) {
// //           console.error('Error inserting data into MySQL:', error);
// //           res.status(500).json({ error: 'Error inserting data into MySQL' });
// //         } else {
// //           console.log('Data inserted successfully into MySQL');
// //           res.status(200).json({ success: true });
// //         }
// //       });
// //     }
// //   });
// // });

// // app.get('/vehicle', (req, res) => {
// //   const page = parseInt(req.query.page) || 1;
// //   const pageSize = parseInt(req.query.pageSize) || 10;
// //   const offset = (page - 1) * pageSize;

// //   const query = `SELECT v.*, d.name AS driver_name FROM vehicles v JOIN Drivers d on v.driver_id = d.id LIMIT ?, ?`;
// //   connection.query(query, [offset, pageSize], (err, results) => {
// //     if (err) {
// //       console.error('Error fetching driver data from MySQL:', err);
// //       res.status(500).json({ error: 'Error fetching device data from MySQL' });
// //       return;
// //     }
// //     console.log('Driver data fetched successfully');
// //     res.status(200).json(results);
// //   });
// // });


// // export {app as adminRouter};

// import express from "express";
// import nodemailer from 'nodemailer';
// import { exec } from 'child_process';
// import path from 'path';
// import connection from "../utils/db.js";

// const app = express()

// let currentUserID = 1;


// // ​‌‌‍⁡⁢⁣⁢‍𝗟𝗼𝗴𝗶𝗻 𝗲𝗻𝗱𝗽𝗼𝗶𝗻𝘁⁡​​⁡

// app.post('/login', (req, res) => {
//   // currentUserID = req.body.userID;
//   const { username, password } = req.body;
//   const sql = 'SELECT * FROM login WHERE USERNAME = ? AND PASSWORD = ?';
//   connection.query(sql, [username, password], (err, result) => {
//     if (err) {
//       console.error('Error while querying database:', err);
//       res.status(500).json({ error: 'Internal Server Error',details: err.message });
//     } else if (result.length === 0) {
//       res.status(401).json({ error: 'Invalid username or password' });
//     } else {
//       res.status(200).json({ loginStatus: true });
//     }
//   });
// });


// // ⁡⁢⁣⁢​‌‌‍𝗛𝗼𝗺𝗲 𝗖𝗼𝘂𝗻𝘁 𝗣𝗮𝗿𝘁:​⁡

// app.get('/device_count', (req, res) => {
//   const sql = "select count(id) as device from device";
//   connection.query(sql, (err, result) => {
//       if(err) return res.json({Status: false, Error: "Query Error"+err})
//       return res.json({Status: true, Result: result})
//   })
// })

// app.get('/driver_count', (req, res) => {
//   const sql = "select count(id) as drivers from drivers";
//   connection.query(sql, (err, result) => {
//       if(err) return res.json({Status: false, Error: "Query Error"+err})
//       return res.json({Status: true, Result: result})
//   })
// })

// app.get('/vehicle_count', (req, res) => {
//   const sql = "select count(id) as vehicles from vehicles";
//   connection.query(sql, (err, result) => {
//       if(err) return res.json({Status: false, Error: "Query Error"+err})
//       return res.json({Status: true, Result: result})
//   })
// })

// // ​‌‌‍⁡⁢⁣⁢​‌‌‍𝗥𝗼𝘂𝘁𝗲 𝘁𝗼 ⁡⁢⁣⁢Device⁡​⁡​

// app.post('/device', (req, res) => {
//   const { code, name, startdate} = req.body;
//   const checkQuery = `SELECT * FROM device WHERE serialnumber = ?`;
//   connection.query(checkQuery, [code, name], (err, results) => {
//     if (err) {
//       console.error('Error querying MySQL:', err);
//       res.status(500).json({ error: 'Database query error' });
//       return;
//     }
//     if (results.length > 0) {
//       // Entry exists, so we send a duplicate error
//       res.status(409).json({ error: 'Duplicate entry found' });
//     } else {
//       // No duplicates found, proceed with insertion
//       const insertQuery = `INSERT INTO device (name,serialnumber,created_date, login_id) VALUES (?, ?, ?,?)`;
//       const values = [name, code, startdate, currentUserID];
//       connection.query(insertQuery, values, (error, result) => {
//         if (error) {
//           console.error('Error inserting data into MySQL:', error);
//           res.status(500).json({ error: 'Error inserting data into MySQL' });
//         } else {
//           console.log('Data inserted successfully into MySQL');
//           res.status(200).json({ success: true });
//         }
//       });
//     }
//   });
// });

// app.get('/device', (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const pageSize = parseInt(req.query.pageSize) || 10;
//   const offset = (page - 1) * pageSize;

//   const query = `SELECT * FROM device LIMIT ?, ?`;
//   connection.query(query, [offset, pageSize], (err, results) => {
//     if (err) {
//       console.error('Error fetching device data from MySQL:', err);
//       res.status(500).json({ error: 'Error fetching device data from MySQL' });
//       return;
//     }
//     console.log('Device data fetched successfully');
//     res.status(200).json(results);
//   });
// });

// // Get specific device details for editing
// app.get("/device/:id", (req, res) => {
//   const { id } = req.params;
//   const query = "SELECT * FROM device WHERE id = ?";
  
//   connection.query(query, [id], (err, result) => {
//     if (err) return res.status(500).json({ Error: err });
//     if (result.length === 0) return res.status(404).json({ Error: "Device not found" });
//     res.json(result[0]);
//   });
// });

// // Edit device
// app.put("/device/:id", (req, res) => {
//   const { id } = req.params;
//   const { name, serialnumber, created_date } = req.body;
//   const query = "UPDATE device SET NAME = ?, SERIALNUMBER = ?, CREATED_DATE = ? WHERE id = ?";

//   connection.query(query, [name, serialnumber, created_date, id], (err, result) => {
//     if (err) return res.status(500).json({ Error: err });
//     res.json({ Message: "Device updated successfully!" });
//   });
// });

// // Delete device
// app.delete("/device/:id", (req, res) => {
//   const { id } = req.params;
//   const query = "DELETE FROM device WHERE id = ?";
  
//   connection.query(query, [id], (err, result) => {
//     if (err) return res.status(500).json({ Error: err });
//     res.json({ Message: "Device deleted successfully!" });
//   });
// });
// // ​‌‌‍⁡⁢⁣⁢Device 𝗘𝗻𝗱....⁡​


// // ​‌‌‍⁡⁢⁣⁢Driver Backend⁡​
// app.post('/driver', (req, res) => {
//   const { name, age, gender, dl_number, contact_number, address, alternative_number, blood_group, dob, father_name, latitude, longitude, aadhar_number } = req.body;

//   // Check if the DL number already exists
//   const checkQuery = `SELECT * FROM drivers WHERE dl_number = ?`;
//   connection.query(checkQuery, [dl_number], (err, results) => {
//     if (err) {
//       console.error('Error querying MySQL:', err);
//       res.status(500).json({ error: 'Database query error' });
//       return;
//     }

//     // If results found, send a duplicate error
//     if (results.length > 0) {
//       res.status(409).json({ error: 'Duplicate DL number found' });
//     } else {
//       // Insert data into the database if no duplicates found
//       const insertQuery = `
//         INSERT INTO drivers 
//         (name, age, gender, dl_number, contact_number, address, alternative_number, blood_group, dob, father_name, latitude, longitude, aadhar_number, created_date) 
//         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
//       `;
      
//       const values = [name, age, gender, dl_number, contact_number, address, alternative_number, blood_group, dob, father_name, latitude, longitude, aadhar_number];

//       connection.query(insertQuery, values, (error, result) => {
//         if (error) {
//           console.error('Error inserting data into MySQL:', error);
//           res.status(500).json({ error: 'Error inserting data into MySQL' });
//         } else {
//           console.log('Data inserted successfully into MySQL');
//           res.status(200).json({ success: true });
//         }
//       });
//     }
//   });
// });

// app.get('/driver', (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const pageSize = parseInt(req.query.pageSize) || 10;
//   const offset = (page - 1) * pageSize;

//   const query = `SELECT * FROM drivers LIMIT ?, ?`;
//   connection.query(query, [offset, pageSize], (err, results) => {
//     if (err) {
//       console.error('Error fetching driver data from MySQL:', err);
//       res.status(500).json({ error: 'Error fetching device data from MySQL' });
//       return;
//     }
//     console.log('Driver data fetched successfully');
//     res.status(200).json(results);
//   });
// });



// // ​‌‌‍⁡⁢⁣⁢Vehicle Backend⁡​



// app.post('/vehicle', (req, res) => {
//   const { vehicle_number, model, make, odometer, runtime, speed, fuel_range, oil_level, temperature, tyre_health, driver_id } = req.body;

//   // Check if the DL number already exists
//   const checkQuery = `SELECT * FROM vehicles WHERE vehicle_number = ?`;
//   connection.query(checkQuery, [vehicle_number], (err, results) => {
//     if (err) {
//       console.error('Error querying MySQL:', err);
//       res.status(500).json({ error: 'Database query error' });
//       return;
//     }

//     // If results found, send a duplicate error
//     if (results.length > 0) {
//       res.status(409).json({ error: 'Duplicate Vehicle Number found' });
//     } else {
//       // Insert data into the database if no duplicates found
//       const insertQuery = `
//         INSERT INTO vehicles 
//         (vehicle_number, model, make, odometer, runtime, speed, fuel_range, oil_level, temperature, tyre_health, driver_id) VALUES (?,?,?,?,?,?,?,?,?,?,?)
//       `;
      
//       const values = [vehicle_number, model, make, odometer, runtime, speed, fuel_range, oil_level, temperature, tyre_health, driver_id];

//       connection.query(insertQuery, values, (error, result) => {
//         if (error) {
//           console.error('Error inserting data into MySQL:', error);
//           res.status(500).json({ error: 'Error inserting data into MySQL' });
//         } else {
//           console.log('Data inserted successfully into MySQL');
//           res.status(200).json({ success: true });
//         }
//       });
//     }
//   });
// });

// app.get('/vehicle', (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const pageSize = parseInt(req.query.pageSize) || 10;
//   const offset = (page - 1) * pageSize;

//   const query = `SELECT v.*, d.name AS driver_name FROM vehicles v JOIN Drivers d on v.driver_id = d.id LIMIT ?, ?`;
//   connection.query(query, [offset, pageSize], (err, results) => {
//     if (err) {
//       console.error('Error fetching driver data from MySQL:', err);
//       res.status(500).json({ error: 'Error fetching device data from MySQL' });
//       return;
//     }
//     console.log('Driver data fetched successfully');
//     res.status(200).json(results);
//   });
// });


// // ⁡⁢⁣⁢​‌‌‍Dashboard Backend​⁡

// app.post('/dashboard', (req, res) => {
//   const { vehicleNumber } = req.body;

//   // Query to get vehicle data
//   const query = `
//       SELECT v.*, d.name AS driver_name, d.age AS driver_age, d.contact_number AS 
//       driver_contact, d.dl_number AS driver_dl, d.address AS driver_address 
//       FROM Vehicles v 
//       JOIN Drivers d ON v.driver_id = d.id 
//       WHERE v.vehicle_number = ?`;

//   connection.query(query, [vehicleNumber], (error, results) => {
//     if (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).send('Internal Server Error');
//     } else if (results.length === 0) {
//       // No data found for the provided vehicle number
//       res.status(404).send('No data found');
//     } else {
//       res.json(results[0]); // Send the first result (assuming vehicle numbers are unique)
//     }
//   });
// });

// app.post('/run-script', (req, res) => {
//   const scriptPath = path.resolve('D:/PROJECTS/driverstatesvs.py');

//   exec(`python "${scriptPath}"`, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return res.status(500).send(`Error: ${error.message}`);
//     }
//     if (stderr) {
//       console.error(`stderr: ${stderr}`);
//       return res.status(500).send(`Error: ${stderr}`);
//     }
//     console.log(`stdout: ${stdout}`);
//     res.send(`Script Output: ${stdout}`);
//   });
// });




// export { app as adminRouter };


import express from "express";
import nodemailer from 'nodemailer';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';
import connection from "../utils/db.js";

const app = express()


// Get the current file's directory equivalent to __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let currentUserID = 1;


// ​‌‌‍⁡⁢⁣⁢‍𝗟𝗼𝗴𝗶𝗻 𝗲𝗻𝗱𝗽𝗼𝗶𝗻𝘁⁡​​⁡

app.post('/login', (req, res) => {
  // currentUserID = req.body.userID;
  const { username, password } = req.body;
  const sql = 'SELECT * FROM login WHERE USERNAME = ? AND PASSWORD = ?';
  connection.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('Error while querying database:', err);
      res.status(500).json({ error: 'Internal Server Error',details: err.message });
    } else if (result.length === 0) {
      res.status(401).json({ error: 'Invalid username or password' });
    } else {
      res.status(200).json({ loginStatus: true });
    }
  });
});


// ⁡⁢⁣⁢​‌‌‍𝗛𝗼𝗺𝗲 𝗖𝗼𝘂𝗻𝘁 𝗣𝗮𝗿𝘁:​⁡

app.get('/device_count', (req, res) => {
  const sql = "select count(id) as device from device";
  connection.query(sql, (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"+err})
      return res.json({Status: true, Result: result})
  })
})

app.get('/driver_count', (req, res) => {
  const sql = "select count(id) as drivers from drivers";
  connection.query(sql, (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"+err})
      return res.json({Status: true, Result: result})
  })
})

app.get('/vehicle_count', (req, res) => {
  const sql = "select count(id) as vehicles from vehicles";
  connection.query(sql, (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"+err})
      return res.json({Status: true, Result: result})
  })
})

// ​‌‌‍⁡⁢⁣⁢​‌‌‍𝗥𝗼𝘂𝘁𝗲 𝘁𝗼 ⁡⁢⁣⁢Device⁡​⁡​

app.post('/device', (req, res) => {
  const { serial, name, startdate} = req.body;
  const checkQuery = `SELECT * FROM device WHERE serialnumber = ?`;
  connection.query(checkQuery, [serial, name], (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      res.status(500).json({ error: 'Database query error' });
      return;
    }
    if (results.length > 0) {
      // Entry exists, so we send a duplicate error
      res.status(409).json({ error: 'Duplicate entry found' });
    } else {
      // No duplicates found, proceed with insertion
      const insertQuery = `INSERT INTO device (name,serialnumber,created_date, login_id) VALUES (?, ?, ?,?)`;
      const values = [name, serial, startdate, currentUserID];
      connection.query(insertQuery, values, (error, result) => {
        if (error) {
          console.error('Error inserting data into MySQL:', error);
          res.status(500).json({ error: 'Error inserting data into MySQL' });
        } else {
          console.log('Data inserted successfully into MySQL');
          res.status(200).json({ success: true });
        }
      });
    }
  });
});

app.get('/device', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  const offset = (page - 1) * pageSize;

  const query = `SELECT * FROM device LIMIT ?, ?`;
  connection.query(query, [offset, pageSize], (err, results) => {
    if (err) {
      console.error('Error fetching device data from MySQL:', err);
      res.status(500).json({ error: 'Error fetching device data from MySQL' });
      return;
    }
    console.log('Device data fetched successfully');
    res.status(200).json(results);
  });
});

// Get specific device details for editing
app.get("/device/:id", (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM device WHERE id = ?";
  
  connection.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ Error: err });
    if (result.length === 0) return res.status(404).json({ Error: "Device not found" });
    res.json(result[0]);
  });
});

// Edit device
app.put("/device/:id", (req, res) => {
  const { id } = req.params;
  const { name, serialnumber, created_date } = req.body;
  const query = "UPDATE device SET NAME = ?, SERIALNUMBER = ?, CREATED_DATE = ? WHERE id = ?";

  connection.query(query, [name, serialnumber, created_date, id], (err, result) => {
    if (err) return res.status(500).json({ Error: err });
    res.json({ Message: "Device updated successfully!" });
  });
});

// Delete device
app.delete("/device/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM device WHERE id = ?";
  
  connection.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ Error: err });
    res.json({ Message: "Device deleted successfully!" });
  });
});
// ​‌‌‍⁡⁢⁣⁢Device 𝗘𝗻𝗱....⁡​


// ​‌‌‍⁡⁢⁣⁢Driver Backend⁡​
app.post('/driver', (req, res) => {
  const { name, age, gender, dl_number, contact_number, address, alternative_number, blood_group, dob, father_name, latitude, longitude, aadhar_number } = req.body;

  // Check if the DL number already exists
  const checkQuery = `SELECT * FROM drivers WHERE dl_number = ?`;
  connection.query(checkQuery, [dl_number], (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      res.status(500).json({ error: 'Database query error' });
      return;
    }

    // If results found, send a duplicate error
    if (results.length > 0) {
      res.status(409).json({ error: 'Duplicate DL number found' });
    } else {
      // Insert data into the database if no duplicates found
      const insertQuery = `
        INSERT INTO drivers 
        (name, age, gender, dl_number, contact_number, address, alternative_number, blood_group, dob, father_name, latitude, longitude, aadhar_number, created_date) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
      `;
      
      const values = [name, age, gender, dl_number, contact_number, address, alternative_number, blood_group, dob, father_name, latitude, longitude, aadhar_number];

      connection.query(insertQuery, values, (error, result) => {
        if (error) {
          console.error('Error inserting data into MySQL:', error);
          res.status(500).json({ error: 'Error inserting data into MySQL' });
        } else {
          console.log('Data inserted successfully into MySQL');
          res.status(200).json({ success: true });
        }
      });
    }
  });
});

app.get('/driver', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  const offset = (page - 1) * pageSize;

  const query = `SELECT * FROM drivers LIMIT ?, ?`;
  connection.query(query, [offset, pageSize], (err, results) => {
    if (err) {
      console.error('Error fetching driver data from MySQL:', err);
      res.status(500).json({ error: 'Error fetching device data from MySQL' });
      return;
    }
    console.log('Driver data fetched successfully');
    res.status(200).json(results);
  });
});

// app.post('/vehicle', (req, res) => {
//   const { code, name, startdate} = req.body;
//   const checkQuery = `SELECT * FROM vehicle WHERE id = ?`;
//   connection.query(checkQuery, [code, name], (err, results) => {
//     if (err) {
//       console.error('Error querying MySQL:', err);
//       res.status(500).json({ error: 'Database query error' });
//       return;
//     }
//     if (results.length > 0) {
//       // Entry exists, so we send a duplicate error
//       res.status(409).json({ error: 'Duplicate entry found' });
//     } else {
//       // No duplicates found, proceed with insertion
//       const insertQuery = `INSERT INTO driver (name,age,gender,dl number, contact number,address,alternative number,blood group,dob,father name,latitude,longitude,aadhar number, created date,created by,modified date,modified by) VALUES (?, ?, ?,?,?,?, ?, ?,?,?,?, ?, ?,?,?,?,?)`;
//       const values = [name, code, startdate, currentUserID];
//       connection.query(insertQuery, values, (error, result) => {
//         if (error) {
//           console.error('Error inserting data into MySQL:', error);
//           res.status(500).json({ error: 'Error inserting data into MySQL' });
//         } else {
//           console.log('Data inserted successfully into MySQL');
//           res.status(200).json({ success: true });
//         }
//       });
//     }
//   });
// });


// ​‌‌‍⁡⁢⁣⁢Vehicle Backend⁡​


// app.post('/dashboard', (req, res) => {
//   const { vehicleNumber } = req.body;
//   const query = 'SELECT * FROM dashboard WHERE `Vehicle No` = ?';

//   connection.query(query, [vehicleNumber], (err, results) => {
//       if (err) {
//           return res.status(500).send(err);
//       }
//       if (results.length === 0) {
//           return res.status(404).send({ message: 'Vehicle not found' });
//       }
//       res.send(results[0]);
//   });
// });

app.post('/vehicle', (req, res) => {
  const { vehicle_number, model, make, odometer, runtime, speed, fuel_range, oil_level, temperature, tyre_health, driver_id } = req.body;

  // Check if the DL number already exists
  const checkQuery = `SELECT * FROM vehicles WHERE vehicle_number = ?`;
  connection.query(checkQuery, [vehicle_number], (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      res.status(500).json({ error: 'Database query error' });
      return;
    }

    // If results found, send a duplicate error
    if (results.length > 0) {
      res.status(409).json({ error: 'Duplicate Vehicle Number found' });
    } else {
      // Insert data into the database if no duplicates found
      const insertQuery = `
        INSERT INTO vehicles 
        (vehicle_number, model, make, odometer, runtime, speed, fuel_range, oil_level, temperature, tyre_health, driver_id) VALUES (?,?,?,?,?,?,?,?,?,?,?)
      `;
      
      const values = [vehicle_number, model, make, odometer, runtime, speed, fuel_range, oil_level, temperature, tyre_health, driver_id];

      connection.query(insertQuery, values, (error, result) => {
        if (error) {
          console.error('Error inserting data into MySQL:', error);
          res.status(500).json({ error: 'Error inserting data into MySQL' });
        } else {
          console.log('Data inserted successfully into MySQL');
          res.status(200).json({ success: true });
        }
      });
    }
  });
});

app.get('/vehicle', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  const offset = (page - 1) * pageSize;

  const query = `SELECT v.*, d.name AS driver_name FROM vehicles v JOIN Drivers d on v.driver_id = d.id LIMIT ?, ?`;
  connection.query(query, [offset, pageSize], (err, results) => {
    if (err) {
      console.error('Error fetching driver data from MySQL:', err);
      res.status(500).json({ error: 'Error fetching device data from MySQL' });
      return;
    }
    console.log('Driver data fetched successfully');
    res.status(200).json(results);
  });
});


// ⁡⁢⁣⁢​‌‌‍Dashboard Backend​⁡

app.post('/dashboard', (req, res) => {
  const { vehicleNumber } = req.body;

  // Query to get vehicle data
  const query = `
      SELECT v.*, d.name AS driver_name, d.age AS driver_age, d.contact_number AS 
      driver_contact, d.dl_number AS driver_dl, d.address AS driver_address 
      FROM Vehicles v 
      JOIN Drivers d ON v.driver_id = d.id 
      WHERE v.vehicle_number = ?`;

  connection.query(query, [vehicleNumber], (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Internal Server Error');
    } else if (results.length === 0) {
      // No data found for the provided vehicle number
      res.status(404).send('No data found');
    } else {
      res.json(results[0]); // Send the first result (assuming vehicle numbers are unique)
    }
  });
});

app.post('/run-script', (req, res) => {
  const scriptPath = path.resolve('D:/PROJECTS/driverstatesvs.py');

  exec(`python "${scriptPath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send(`Error: ${error.message}`);
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return res.status(500).send(`Error: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
    res.send(`Script Output: ${stdout}`);
  });
});




export { app as adminRouter };