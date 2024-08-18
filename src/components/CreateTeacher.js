import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import api from '../api';

const CreateTeacher = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/api/principal/teachers', { name, email, password });
    // Optionally, clear the form after submission
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>Create Teacher</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <Button type="submit" variant="contained" color="primary">
            Create Teacher
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default CreateTeacher;
