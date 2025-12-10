// import axios from "axios";
// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/Eubix.png";
// import BgVideo from '../assets/BgVideo1.mp4';

// const Start = () => {
//   const navigate = useNavigate();
//   // axios.defaults.withCredentials = true;
//   // useEffect(() => {
//   //   axios
//   //     .get("http://localhost:5000/verify")
//   //     .then((result) => {
//   //       if (result.data.Status) {
//   //         if (result.data.role === "admin") {
//   //           navigate("/dashboard");
//   //         } else {
//   //           navigate("/employee_detail/" + result.data.id);
//   //         }
//   //       }
//   //     })
//   //     .catch((err) => console.log(err));
//   // }, []);

//   return (
//     <div>
//       <div className="d-flex justify-content-center align-items-center vh-100 ">
//         <video autoPlay loop muted className="bg-vid">
//           <source src={BgVideo} type="video/mp4" />
//         </video>
//           <div className="text-center">
//             <button
//               type="button"
//               className="btn btn-success"
//               onClick={() => {
//                 navigate("/login");
//               }}
//             >
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//   );
// };

// export default Start;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Start.css'
import logo from "../assets/Eubix.png";
import BgVideo from '../assets/BgVideo1.mp4';

const Start = () => {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  // Simulating text fade-in
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100 ">
        <video autoPlay loop muted className="bg-vid">
          <source src={BgVideo} type="video/mp4" />
        </video>
        <div className={`text-center ${fadeIn ? "fade-in" : ""}`}>
          <h1 className="text-light">
            The Best Vehicle Tracking System
          </h1>
          <h3 className="text-light">
            Helping Business Security & Peace of Mind for Your Vehicle
          </h3>
          <button
            type="button"
            className="btn btn-primary mt-4"
            onClick={() => {
              navigate("/login");
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;

