import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import cookieParser from "cookie-parser";
import { adminRouter } from "./Routes/AdminRoute.js";

const app = express();
app.use(express.json());
const port =  5000;
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ['GET', 'POST', 'PUT', "DELETE"],
  credentials: true
}));
// ⁡⁢⁣⁢​‌‌‍𝗠𝗶𝗱𝗱𝗹𝗲𝘄𝗮𝗿𝗲 𝘁𝗼 𝗽𝗮𝗿𝘀𝗲 𝗿𝗲𝗾𝘂𝗲𝘀𝘁 𝗯𝗼𝗱𝘆​⁡
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())

app.use('/auth', adminRouter)

// ⁡⁢⁣⁢​‌‌‍𝗦𝘁𝗮𝗿𝘁 𝘁𝗵𝗲 𝘀𝗲𝗿𝘃𝗲𝗿​⁡
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
