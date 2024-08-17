import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import api from '../api';

const TeacherDashboard = () => {
  const [students, setStudents] = useState([]);
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await api.get('/api/teacher/students');
      setStudents(response.data);
    };

    const fetchTimetable = async () => {
      const response = await api.get('/api/teacher/timetable');
      setTimetable(response.data);
    };

    fetchStudents();
    fetchTimetable();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Teacher Dashboard</Typography>
      <Button variant="contained" color="primary">Create Student</Button>
      <Button variant="contained" color="secondary">Create Timetable</Button>
      <Typography variant="h6" gutterBottom>Students</Typography>
      <ul>
        {students.map((student) => (
          <li key={student._id}>{student.name}</li>
        ))}
      </ul>
      <Typography variant="h6" gutterBottom>Timetable</Typography>
      <ul>
        {timetable.map((entry) => (
          <li key={entry._id}>{entry.subject} - {entry.time}</li>
        ))}
      </ul>
    </Container>
  );
};

export default TeacherDashboard;
