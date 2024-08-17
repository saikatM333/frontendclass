import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import api from '../api';

const PrincipalDashboard = () => {
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    const fetchClassrooms = async () => {
      const response = await api.get('/api/principal/classrooms');
      setClassrooms(response.data);
    };
    fetchClassrooms();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Principal Dashboard</Typography>
      <Button variant="contained" color="primary">Create Teacher</Button>
      <Button variant="contained" color="secondary">Create Classroom</Button>
      <Button variant="contained">Create Timetable</Button>
      <Typography variant="h6" gutterBottom>Classrooms</Typography>
      <ul>
        {classrooms.map((classroom) => (
          <li key={classroom._id}>{classroom.name}</li>
        ))}
      </ul>
    </Container>
  );
};

export default PrincipalDashboard;
