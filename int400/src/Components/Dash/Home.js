import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [StudentTotal, setStudentTotal] = useState(0)
  const [StaffTotal, setStaffTotal] = useState(0)

  useEffect(() => {
    StudentCount();
    StaffCount();

  }, [])

//   const AdminRecords = () => {
//     axios.get('http://localhost:3000/auth/admin_records')
//     .then(result => {
//       if(result.data.Status) {
//         setAdmins(result.data.Result)
//       } else {
//          alert(result.data.Error)
//       }
//     })
//   }
  const StudentCount = () => {
    axios.get('http://localhost:5000/auth/student_count')
    .then(result => {
      if(result.data.Status) {
        setStudentTotal(result.data.Result[0].device)
      }
    })
  }
  const StaffCount = () => {
    axios.get('http://localhost:5000/auth/staff_count')
    .then(result => {
      if(result.data.Status) {
        setStaffTotal(result.data.Result[0].staff)
      }
    })
  }
//   const salaryCount = () => {
//     axios.get('http://localhost:3000/auth/salary_count')
//     .then(result => {
//       if(result.data.Status) {
//         setSalaryTotal(result.data.Result[0].salaryOFEmp)
//       } else {
//         alert(result.data.Error)
//       }
//     })
//   }
  return (
    <div>
      <div className='p-3 d-flex justify-content-around mt-3'>
        <div className='px-5 pt-2 pb-2 rounded-5 shadow-sm w-25 text-white' style={{backgroundColor:'#00CED1'}}>
          <div style={{color:'#1F2667'}}>
          <div className='text-center pb-1'>
            <h4>Device</h4>
          </div>
          <hr style={{color:'white', border: '2px solid white'}}/>
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5>{StaffTotal}</h5>
          </div>
          </div>
        </div>
        <div className='px-5 pt-2 pb-2 rounded-5 shadow-sm w-25 text-white' style={{backgroundColor:"#3b07b4"}}>
          <div className='text-center pb-1'>
            <h4>Driver</h4>
          </div>
          <hr style={{color:'white', border: '2px solid white',}}/>
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5>{StudentTotal}</h5>
          </div>
        </div>
        <div className='px-5 pt-2 pb-2 rounded-5 shadow-sm w-25 text-white' style={{backgroundColor:"#7FFFD4"}}>
          <div style={{color:'#1F2667'}}>
          <div className='text-center pb-1'>
            <h4>Vehicle</h4>
          </div>
          <hr style={{color:'white', border: '2px solid white'}}/>
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5>{StudentTotal}</h5>
          </div>
        </div>
        </div>
      </div>
      {/* <div className='mt-4 px-5 pt-3'>
        <h3>List of Admins</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* <tbody>
            {
              admins.map(a => (
                <tr>
                  <td>{a.email}</td>
                  <td>
                  <button
                    className="btn btn-info btn-sm me-2">
                    Edit
                  </button>
                  <button
                    className="btn btn-warning btn-sm" >
                    Delete
                  </button>
                  </td>
                </tr>
              ))
            }
          </tbody> 
        </table>
      </div> */}
    </div>
  )
}

export default Home