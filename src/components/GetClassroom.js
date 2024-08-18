import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import api from '../api';

const GetClassrooms = () => {
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
      <Typography variant="h4" gutterBottom>Classrooms List</Typography>
      <List>
        {classrooms.map((classroom) => (
          <ListItem key={classroom._id}>
            <ListItemText primary={classroom.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default GetClassrooms;
