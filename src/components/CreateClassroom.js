import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import api from '../api';

const CreateClassroom = () => {
  const [name, setName] = useState('');
  const [teacherId, setTeacherId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/api/principal/classrooms', { name, teacherId });
    setName('');
    setTeacherId('');
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>Create Classroom</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Classroom Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Teacher ID"
            fullWidth
            margin="normal"
            value={teacherId}
            onChange={(e) => setTeacherId(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Create Classroom
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default CreateClassroom;
