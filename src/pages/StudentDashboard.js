import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import api from '../api';

const StudentDashboard = () => {
  const [students, setStudents] = useState([]);
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await api.get('/api/student/myclassroom');
      setStudents(response.data.students);
      console.log(response.data)
    };

    const fetchTimetable = async () => {
      const response = await api.get('/api/student/mytimetable');

      setTimetable(response.data.schedule);
      console.log("time" , response.data)
    };

    fetchStudents();
    fetchTimetable();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Student Dashboard</Typography>
      <Typography variant="h6" gutterBottom>Classmates</Typography>
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

export default StudentDashboard;
