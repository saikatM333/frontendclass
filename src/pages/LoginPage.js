import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios'; // Import axios
import AuthContext from '../context/AuthContext';
import api from '../api.js';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Principal');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("entry")
      // Send a POST request to the /login route
      const response = await api.post('/api/auth/login', {
        email,
        password,
        role,
      });
      console.log("midd")
      // Handle successful login
      if (response.status == 200) {
        const { name, token } = response.data;
        console.log(response.data)
       login(name, token); // Assuming login updates context with user and token
        navigate('/principal'); // Redirect to the homepage or dashboard
      } else {
        // Handle login errors
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Role"
            fullWidth
            margin="normal"
            select
            SelectProps={{ native: true }}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Principal">Principal</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
          </TextField>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
