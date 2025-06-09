// import React, { useState } from 'react';
// import { TextField, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
// import '../style.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [values, setValues] = useState({
//         username: '',
//         password: ''
//     });
//     const [error, setError] = useState(null);
//     const [usernameError, setUsernameError] = useState(false);
//     const [passwordError, setPasswordError] = useState(false);
//     const navigate = useNavigate();
//     axios.defaults.withCredentials = true;

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // Reset errors
//         setUsernameError(false);
//         setPasswordError(false);
// console.log("values",values);
//         axios.post('http://localhost:5000/auth/login', values, {
//             withCredentials: true,
//           })
//             .then(result => {
//               if (result.data.loginStatus) {
//                 localStorage.setItem("valid", true);
//                 navigate('/dashboard');
//               } else {
//                 if (result.data.Error === 'username') {
//                   setUsernameError(true);
//                   setError("Username or password is incorrect");
//                 } else if (result.data.Error === 'password') {
//                   setPasswordError(true);
//                   setError("Username or password is incorrect");
//                 } else {
//                   setError(result.data.Error);
//                 }
//               }
//             })
//             .catch(err => console.log(err));
//         };

//     return (
//         <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
//             <div className='p-3 rounded w-25 border loginForm'>
//                 {(error || usernameError || passwordError) && (
//                     <Typography color="error" variant="subtitle1" gutterBottom>
//                         {error}
//                     </Typography>
//                 )}
//                 <h2 style={{ textAlign: 'center' }}>Login Page</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className='mb-3'>
//                         <TextField
//                             type="text"
//                             name='username'
//                             autoComplete='username'
//                             label="Username"
//                             placeholder='Enter Username'
//                             onChange={(e) => setValues({ ...values, username: e.target.value })}
//                             error={usernameError}
//                             helperText={usernameError && "Username incorrect"}
//                             className='form-control rounded-0'
//                         />
//                     </div>
//                     <div className='mb-3'>
//                         <TextField
//                             type="password"
//                             name='password'
//                             label="Password"
//                             placeholder='Enter Password'
//                             passwordToggle= {true}
//                             onChange={(e) => setValues({ ...values, password: e.target.value })}
//                             error={passwordError}
//                             helperText={passwordError && "Password incorrect"}
//                             className='form-control rounded-0'
//                         />
//                     </div>
//                     <Button variant="contained" color="success" fullWidth className='rounded-0 mb-2' type="submit">
//                         Log in
//                     </Button>
//                     <div className='mb-1'>
//                         <FormControlLabel
//                             control={<Checkbox name="tick" id="tick" className='me-2' />}
//                             label="You are Agree with terms & conditions"
//                         />
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;



// import React, { useState } from 'react';
// import { TextField, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
// import '../style.css';
// import LoginBg from '../../assets/loginBg.mp4';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [values, setValues] = useState({
//         username: '',
//         password: ''
//     });
//     const [error, setError] = useState(null);
//     const [usernameError, setUsernameError] = useState(false);
//     const [passwordError, setPasswordError] = useState(false);
//     const navigate = useNavigate();
//     axios.defaults.withCredentials = true;

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // Reset errors
//         setUsernameError(false);
//         setPasswordError(false);

//         axios.post('http://localhost:5000/auth/login', values, {
//             withCredentials: true,
//         })
//             .then(result => {
//                 if (result.data.loginStatus) {
//                     localStorage.setItem("valid", true);
//                     navigate('/dashboard');
//                 } else {
//                     if (result.data.Error === 'username') {
//                         setUsernameError(true);
//                         setError("Username or password is incorrect");
//                     } else if (result.data.Error === 'password') {
//                         setPasswordError(true);
//                         setError("Username or password is incorrect");
//                     } else {
//                         setError(result.data.Error);
//                     }
//                 }
//             })
//             .catch(err => console.log(err));
//     };

//     return (
//         <div className='loginPage'>
//             {/* Video Background */}
//             <video autoPlay loop muted className="bg-vid">
//                 <source src={LoginBg} type="video/mp4" />
//             </video>

//             {/* Login Form */}
//             <div className='d-flex justify-content-center align-items-center vh-100'>
//                 <div className='p-3 rounded w-25 border loginForm'>
//                     {(error || usernameError || passwordError) && (
//                         <Typography color="error" variant="subtitle1" gutterBottom>
//                             {error}
//                         </Typography>
//                     )}
//                     <h2 style={{ textAlign: 'center' }}>Login Page</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div className='mb-3'>
//                             <TextField
//                                 type="text"
//                                 name='username'
//                                 autoComplete='username'
//                                 label="Username"
//                                 placeholder='Enter Username'
//                                 onChange={(e) => setValues({ ...values, username: e.target.value })}
//                                 error={usernameError}
//                                 helperText={usernameError && "Username incorrect"}
//                                 className='form-control rounded-0'
//                             />
//                         </div>
//                         <div className='mb-3'>
//                             <TextField
//                                 type="password"
//                                 name='password'
//                                 label="Password"
//                                 placeholder='Enter Password'
//                                 passwordToggle={true}
//                                 onChange={(e) => setValues({ ...values, password: e.target.value })}
//                                 error={passwordError}
//                                 helperText={passwordError && "Password incorrect"}
//                                 className='form-control rounded-0'
//                             />
//                         </div>
//                         <Button variant="contained" color="success" fullWidth className='rounded-0 mb-2' type="submit">
//                             Log in
//                         </Button>
//                         <div className='mb-1'>
//                             <FormControlLabel
//                                 control={<Checkbox name="tick" id="tick" className='me-2' />}
//                                 label="You are Agree with terms & conditions"
//                             />
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;


import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import '../style.css';
import LoginBg from '../../assets/BgV.mp4';
import axios from 'axios';
import logo1 from '../../assets/Bg.jpg'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();

        // Reset errors
        setUsernameError(false);
        setPasswordError(false);

        axios.post('http://localhost:5000/auth/login', values, {
            withCredentials: true,
        })
            .then(result => {
                if (result.data.loginStatus) {
                    localStorage.setItem("valid", true);
                    navigate('/dashboard');
                } else {
                    if (result.data.Error === 'username') {
                        setUsernameError(true);
                        setError("Username or password is incorrect");
                    } else if (result.data.Error === 'password') {
                        setPasswordError(true);
                        setError("Username or password is incorrect");
                    } else {
                        setError(result.data.Error);
                    }
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='loginPage'>
            {/* Video Background */}
            <video autoPlay loop muted className="bg-vid">
                <source src={LoginBg} type="video/mp4" />
            </video>

{/* <div className="bg-image-container">
          <img src={logo1} alt="" />
       </div> */}

            {/* Login Form */}
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className='p-3 rounded w-25 border loginForm'>
                    {(error || usernameError || passwordError) && (
                        <Typography color="error" variant="subtitle1" gutterBottom>
                            {error}
                        </Typography>
                    )}
                    <h2 style={{ textAlign: 'center' }}>Login Page</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <TextField
                                type="text"
                                name='username'
                                autoComplete='username'
                                label="Username"
                                placeholder='Enter Username'
                                onChange={(e) => setValues({ ...values, username: e.target.value })}
                                error={usernameError}
                                helperText={usernameError && "Username incorrect"}
                                className='form-control rounded-0 textField'
                            />
                        </div>
                        <div className='mb-3'>
                            <TextField
                                type="password"
                                name='password'
                                label="Password"
                                placeholder='Enter Password'
                                passwordToggle={true}
                                onChange={(e) => setValues({ ...values, password: e.target.value })}
                                error={passwordError}
                                helperText={passwordError && "Password incorrect"}
                                className='form-control rounded-0 textField'
                            />
                        </div>
                        <Button variant="contained" color="info" fullWidth className='rounded-0 mb-2' type="submit">
                            Log in
                        </Button>
                        <div className='mb-1'>
                            <FormControlLabel
                                control={<Checkbox name="tick" id="tick" className='me-2' />}
                                label="You are Agree with terms & conditions"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
