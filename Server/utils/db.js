import mysql from 'mysql2'

// ⁡⁢⁣⁢​‌‌‍𝗖𝗿𝗲𝗮𝘁𝗲 𝗠𝘆𝗦𝗤𝗟 𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗼𝗻​⁡
// const connection = mysql.createConnection({
//     host: 'bev4h00fiyekz0ygpqtn-mysql.services.clever-cloud.com',
//     user: 'u1cin5ugrludbp3g',
//     password: 'NaTKpzXiJPGm7liStp1p',
//     database: 'bev4h00fiyekz0ygpqtn',
//     port: '3306',
//   });

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vehicledb',
  port: 3307,
});

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT || 3306
// });

  // ⁡⁢⁣⁢​‌‌‍𝗖𝗼𝗻𝗻𝗲𝗰𝘁 𝘁𝗼 𝗠𝘆𝗦𝗤𝗟​⁡
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      return;
    }
    console.log("Connected to MySQL");
  });

  export default connection;
  