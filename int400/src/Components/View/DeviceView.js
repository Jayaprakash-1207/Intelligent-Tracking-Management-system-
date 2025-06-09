import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const DeviceView = () => {
  const [device, setDevice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:5000/auth/device?page=${currentPage}&pageSize=${pageSize}`)
      .then((result) => {
        if (result.data) {
          setDevice(result.data);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, [currentPage, pageSize]);

  const handleEdit = (id) => {
    // e.preventDefault()
    // axios.put('http://localhost:5000/academicyear'+id, academic)
    // .then(result => {
    //     if(result.data) {
    //         navigate('/dashboard/academic_year/academicview')
    //     } else {
    //         alert(result.data.Error)
    //     }
    // }).catch(err => console.log(err))
    console.log("Edit academic with ID:",id)
}
  const handleDelete = (id) => {
    // Handle delete operation, you can show a confirmation dialog before deleting
    console.log("Delete academic with ID:", id);
  };

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding leading zero if needed
  //   const day = String(date.getDate()).padStart(2, '0'); // Adding leading zero if needed
  //   return `${day}-${month}-${year}`;
  // };

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   const year = date.getFullYear();
  //   const month = date.toLocaleString('en-us', { month: 'short' }); // Get month as abbreviation (e.g., Apr)
  //   const day = String(date.getDate()).padStart(2, '0'); // Adding leading zero if needed
  //   return `${day} ${month} ${year}`;
  // };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (date.getFullYear() === 1990 && date.getMonth() === 0 && date.getDate() === 1) {
      return '-';
    } else {
      const year = date.getFullYear();
      const month = date.toLocaleString('en-us', { month: 'short' }); // Get month as abbreviation (e.g., Apr)
      const day = String(date.getDate()).padStart(2, '0'); // Adding leading zero if needed
      return `${day} ${month} ${year}`;
    }
  };


  return (
    <div className="px-5 mt-3">
      {/* <div className="d-flex justify-content-center">
        <h3 style={{ color: "Blue" }}>List of Device Shown Below:-</h3>
      </div> */}
      <Link to="/dashboard/device/device" className="btn btn-warning">
        Add Device
      </Link>
      <div className="mt-2">
        <table className="table">
          <thead>
            <tr>
              <th>Device</th>
              <th>Serial Number</th>
              <th>Created Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {device.map((c) => (
              <tr key={c.id}> {/* Added key prop for each row */}
                <td style={{ color: "red" }}>
                  <b>{c.NAME}</b>
                </td>
                <td>
                  {c.SERIALNUMBER}
                </td>
                {/* <td>
                  {c.}
                </td> */}
                <td>
                  {formatDate(c.CREATED_DATE)}
                </td>
                {/* <td>
                  {formatDate(c.EndDate)}
                </td> */}
                <td>
                  <button className="btn btn-primary" onClick={() => handleEdit(c.id)}>Edit</button>
                  <button className="btn btn-danger mx-2" onClick={() => handleDelete(c.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div style={{backgroundColor:'white'}}>
      <div className="d-flex justify-content-center">
      <label>
          Page Size:
          <select value={pageSize} onChange={(e) => setPageSize(parseInt(e.target.value))} style={{backgroundColor:'red',color:'white'}}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={100}>100</option>
          </select>
        </label>{'\u00A0'}{'\u00A0'}{'\u00A0'}
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} style={{backgroundColor:'#04AA6D',color:'white'}}>
          Previous Page
        </button>
        <span className="mx-2" >Page {currentPage}</span>
        <button onClick={() => setCurrentPage(currentPage + 1)} style={{backgroundColor:'#04AA6D',color:'white'}}>Next Page</button>
      </div>
      </div> */}

{/* <div style={{ backgroundColor: 'white', padding: '10px' }}>
  <div className="d-flex justify-content-center" style={{ alignItems: 'center', height: '35px' }}>
    <label>
      Page Size:
      <select value={pageSize} onChange={(e) => setPageSize(parseInt(e.target.value))} className="form-control" style={{ height: '25px', fontSize: '12px' }}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={100}>100</option>
      </select>
    </label>{'\u00A0'}{'\u00A0'}{'\u00A0'}
    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="btn btn-sm btn-success" style={{ padding: '2px 10px', fontSize: '12px' }}>
      Previous Page
    </button>
    <span className="mx-2" style={{ fontSize: '12px' }}>Page {currentPage}</span>
    <button onClick={() => setCurrentPage(currentPage + 1)} className="btn btn-sm btn-success" style={{ padding: '2px 10px', fontSize: '12px' }}>Next Page</button>
  </div>
</div> */}
    </div>
  );
};

export default DeviceView;
