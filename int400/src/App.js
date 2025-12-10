import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dash/Dashboard';


import Start from './Components/Start';


import Home from './Components/Dash/Home';

import Device from './Components/Tables/Device';
import Driver from './Components/Tables/Driver';
import DriverView from './Components/View/DriverView';
import DeviceView from './Components/View/DeviceView';
import VehicleView from './Components/View/VehicleView';
import VehicleRegister from './Components/Tables/Vehicle';
import Login from './Components/Tables/Login';
import Track from './Components/View/Track';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        // ⁡⁣⁢⁣​‌‌‍𝗖𝗼𝗺𝗺𝗼𝗻 𝗣𝗮𝗿𝘁:​⁡
        <Route path='/' element={<Start />}></Route>
        {/* <Route path='/bcrypt' element={<AddEmployee/>}/> */}
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='' element={<Home/>} />
          {/* <Route path='/dashboard/Admin/profile' element={<Profile/>} /> */}

          <Route path='/dashboard/driver' element={<DriverView />} />
          <Route path='/dashboard/Vehicle' element={<VehicleView />} />
          <Route path='/dashboard/track' element={<Track/>} />

          <Route path='/dashboard/device' element={<DeviceView />}/>
            <Route path='/dashboard/device/device' element={<Device/>}/>
            <Route path='/dashboard/driver/driver' element={<Driver/>}/>
            <Route path='/dashboard/vehicle/vehicle' element={<VehicleRegister/>}/>


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Dashboard from './Components/Dash/Dashboard';
// import AcademicYear from './Components/Tables/AcademicYear';
// import Batch from './Components/Tables/Batch';
// import Course from './Components/Tables/Course';
// import Degree from './Components/Tables/Degree';
// import Group from './Components/Tables/Group';
// import Program from './Components/Tables/Program';
// import Regulation from './Components/Tables/Regulation';
// import Role from './Components/Tables/Role';
// import Semester from './Components/Tables/Semester';
// import SemesterType from './Components/Tables/SemesterType';
// import Specialization from './Components/Tables/Specialization';
// import Staff from './Components/Tables/Staff';
// import Status from './Components/Tables/Status';
// import Student from './Components/Tables/Student';
// import Login from './Components/Tables/Login';
// import Term from './Components/Tables/Term';
// import Year from './Components/Tables/Year';
// import AcademicView from './Components/View/AcademicView';
// import BatchView from './Components/View/BatchView';
// import CourseView from './Components/View/CourseView';
// import DegreeView from './Components/View/DegreeView';
// import GroupView from './Components/View/GroupView';
// import ProgramView from './Components/View/ProgramView';
// import RegulationView from './Components/View/RegulationView';
// import RoleView from './Components/View/RoleView';
// import SemesterView from './Components/View/SemesterView';
// import SemesterTypeView from './Components/View/SemesterTypeView';
// import SpecializationView from './Components/View/SpecializationView';
// import StaffView from './Components/View/StaffView';
// import StatusView from './Components/View/StatusView';
// import StudentView from './Components/View/StudentView';
// import TermView from './Components/View/TermView';
// import YearView from './Components/View/YearView';
// import Start from './Components/Start';
// import PrivateRoute from './Components/PrivateRoute';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Start />} />
//         <Route path="/adminlogin" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />}>
//           <Route path="academic_year" element={<AcademicView />} />
//           {/* Add other routes as needed */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



// import React from 'react';
// import './App.css'
// import axios from 'axios';

// function App() {
//   const getAllFoods = () => {
//     fetch(`https://appsail-50022010991.development.catalystappsail.in/foods`)
//       .then(response => response.json())
//       .then(data => console.log("All Foods:", data))
//       .catch(error => console.error('Error:', error));
//   };

//   const getSpecificFood = () => {
//     const foodId = prompt("Enter the food ID:");
//     if (!foodId) return;
//     fetch(`https://appsail-50022010991.development.catalystappsail.in/foods/${foodId}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => console.log("Specific Food:", data))
//       .catch(error => console.error('Error:', error));
//   };

//   const getFoodsByCategory = () => {
//     const category = prompt("Enter the category:");
//     if (!category) return;
//     fetch(`https://appsail-50022010991.development.catalystappsail.in/foods?category=${category}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => console.log("Foods by Category:", data))
//       .catch(error => console.error('Error:', error));
//   };

//   const getReviewsForFood = () => {
//     const foodId = prompt("Enter the food ID:");
//     if (!foodId) return;
//     fetch(`https://appsail-50022010991.development.catalystappsail.in/foods/${foodId}/reviews`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => console.log("Reviews for Food:", data))
//       .catch(error => console.error('Error:', error));
//   };

//   const createNewFood = () => {
//     const newFood = {
//       id: prompt("Enter the food ID:"),
//       name: prompt("Enter the food name:"),
//       description: prompt("Enter the food description:"),
//       price: parseFloat(prompt("Enter the food price:")),
//       category: prompt("Enter the food category:"),
//       ingredients: prompt("Enter the food ingredients (comma-separated):").split(','),
//       calories: parseFloat(prompt("Enter the food calories:")),
//       allergens: prompt("Enter the food allergens (comma-separated):").split(',')
//     };

//     axios.post(`https://appsail-50022010991.development.catalystappsail.in/foods`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newFood),
//     })
//       .then(response => response.json())
//       .then(data => console.log("New Food Created:", data))
//       .catch(error => console.error('Error:', error));
//   };

//   const updateFood = () => {
//     const foodId = prompt("Enter the food ID to update:");
//     if (!foodId) return;
//     const updatedFood = {
//       name: prompt("Enter the updated food name:"),
//       description: prompt("Enter the updated food description:"),
//       price: parseFloat(prompt("Enter the updated food price:")),
//       category: prompt("Enter the updated food category:"),
//       ingredients: prompt("Enter the updated food ingredients (comma-separated):").split(','),
//       calories: parseFloat(prompt("Enter the updated food calories:")),
//       allergens: prompt("Enter the updated food allergens (comma-separated):").split(',')
//     };

//     fetch(`https://appsail-50022010991.development.catalystappsail.in/foods/${foodId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedFood),
//     })
//       .then(response => response.json())
//       .then(data => console.log("Food Updated:", data))
//       .catch(error => console.error('Error:', error));
//   };

//   const deleteFood = () => {
//     const foodId = prompt("Enter the food ID to delete:");
//     if (!foodId) return;
//     fetch(`https://appsail-50022010991.development.catalystappsail.in/foods/${foodId}`, {
//       method: 'DELETE',
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => console.log("Food Deleted:", data))
//       .catch(error => console.error('Error:', error));
//   };

//   return (
//     <div className="container">
//       <button className="btn primary" onClick={getAllFoods}>Get All Foods</button>
//       <button className="btn primary" onClick={getSpecificFood}>Get Specific Food</button>
//       <button className="btn primary" onClick={getFoodsByCategory}>Get Foods by Category</button>
//       <button className="btn primary" onClick={getReviewsForFood}>Get Reviews for Food</button>
//       <button className="btn success" onClick={createNewFood}>Create New Food</button>
//       <button className="btn warning" onClick={updateFood}>Update Food</button>
//       <button className="btn danger" onClick={deleteFood}>Delete Food</button>
//     </div>
//   );
// }

// export default App;
