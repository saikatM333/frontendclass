import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import api from '../api';

const GetTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const response = await api.get('/api/principal/teachers');
      setTeachers(response.data);
    };
    fetchTeachers();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Teachers List</Typography>
      <List>
        {teachers.map((teacher) => (
          <ListItem key={teacher._id}>
            <ListItemText primary={teacher.name} secondary={teacher.email} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default GetTeachers;
