import React, { useState } from 'react';
import {  useFormik } from 'formik';
import "../App.css";
import {  useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, InputAdornment, IconButton, Checkbox, FormControlLabel, } from '@mui/material';
import * as Yup from 'yup';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@mui/icons-material';
import Doreamon from '../images/WalkDoreamon.gif'

import Box from '@mui/material/Box';

import './SignIn.css';


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .lowercase('Email must be in lowercase')
    .email('Invalid email format')
    .required('Email is required!'),
  password: Yup.string()
    .min(6, 'Password must have at least six characters')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[^A-Za-z0-9]/, 'Password must contain at least one special character')
    .required('Password is required'),
});

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      navigate('/LandingPage');
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <h1>Welcome Back!</h1>
        <img src={Doreamon} alt="" className='img'/>
        <p>Explore the Doremon's Land!</p>
      <div className="field">
      <Box sx={{my:2}}>
      <Typography variant="h7" >Email</Typography>
      </Box>
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}   />
      </div>

      <div className="field">
      <Box sx={{my:2}}>
      <Typography variant="h7" >Password</Typography>
      </Box>
        <TextField
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          fullWidth
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility}>
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}  />
       
      </div>

      <FormControlLabel
          control={
            <Checkbox
              id="user-check"
              name="rememberMe"
              checked={formik.values.rememberMe}
              onChange={formik.handleChange}  />
          }
          label="Remember Me"  />

     <Button type="submit" variant="contained" color="primary">
        Sign In
     </Button>
      <div className="Sign">
        <p>
          Don't have an account? Create Account
        </p>
      </div>

      </form>
    </div>
  );
};

export default SignIn;