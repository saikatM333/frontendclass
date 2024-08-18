// import React, { useState, useEffect } from 'react';
// import { Container, Typography, Button } from '@mui/material';
// import api from '../api';

// const TeacherDashboard = () => {
//   const [students, setStudents] = useState([]);
//   const [timetable, setTimetable] = useState([]);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       const response = await api.get('/api/teacher/students');
//       setStudents(response.data);
//     };

//     const fetchTimetable = async () => {
//       const response = await api.get('/api/teacher/timetable');
//       setTimetable(response.data);
//     };

//     fetchStudents();
//     fetchTimetable();
//   }, []);

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>Teacher Dashboard</Typography>
//       <Button variant="contained" color="primary">Create Student</Button>
//       <Button variant="contained" color="secondary">Create Timetable</Button>
//       <Typography variant="h6" gutterBottom>Students</Typography>
//       <ul>
//         {students.map((student) => (
//           <li key={student._id}>{student.name}</li>
//         ))}
//       </ul>
//       <Typography variant="h6" gutterBottom>Timetable</Typography>
//       <ul>
//         {timetable.map((entry) => (
//           <li key={entry._id}>{entry.subject} - {entry.time}</li>
//         ))}
//       </ul>
//     </Container>
//   );
// };

// export default TeacherDashboard;
import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Grid, Card, CardContent, CardActions, List, ListItem, ListItemText } from '@mui/material';
import api from '../api';

const TeacherDashboard = () => {
  // State for creating student
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');

  // State for creating timetable
  const [subject, setSubject] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');

  // State for managing students
  const [students, setStudents] = useState([]);

  // State for managing timetable
  const [timetable, setTimetable] = useState([]);

  // Fetch students and timetable data
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await api.get('/api/teacher/myclassroom');

        setStudents(response.data.students);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    const fetchTimetable = async () => {
      try {
        const response = await api.get('/api/teacher/mytimetable');
        setTimetable(response.data.schedule);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching timetable:', error);
      }
    };

    fetchStudents();
    fetchTimetable();
  }, []);

  // Handle create student
  const handleCreateStudent = async (event) => {
    event.preventDefault();
    try {
      await api.post('/api/teacher/student', { name: studentName, email: studentEmail });
      setStudentName('');
      setStudentEmail('');
      // Optionally refetch students
      const response = await api.get('/api/teacher/students');
      setStudents(response.data.students);
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  // Handle create timetable
  const handleCreateTimetable = async (event) => {
    event.preventDefault();
    try {
      await api.post('/api/teacher/timetable', { day,  subject, time });
      setSubject('');
      setTime('');
      // Optionally refetch timetable
      const response = await api.get('/api/teacher/mytimetable');
      setTimetable(response.data.schedule);
    } catch (error) {
      console.error('Error creating timetable:', error);
    }
  };

  // Handle delete student
  const handleDeleteStudent = async (studentId) => {
    try {
      await api.delete(`/api/teacher/student`,{studentId});
      setStudents(students.filter(student => student._id !== studentId));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  // Handle delete timetable entry
  const handleDeleteTimetable = async (entryId) => {
    try {
      await api.delete(`/api/timetable/entry/${entryId}`);
      setTimetable(timetable.filter(entry => entry._id !== entryId));
    } catch (error) {
      console.error('Error deleting timetable entry:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Teacher Dashboard</Typography>

      {/* Create Student Section */}
      <Card style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h6">Create Student</Typography>
          <form onSubmit={handleCreateStudent}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  fullWidth
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  fullWidth
                  value={studentEmail}
                  onChange={(e) => setStudentEmail(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">Create Student</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      {/* Create Timetable Section */}
      <Card style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h6">Create Timetable</Typography>
          <form onSubmit={handleCreateTimetable}>
            <Grid container spacing={3}>
            <Grid item xs={12}>
                <TextField
                  label="day"
                  fullWidth
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  required
                />
              </Grid>

              <Grid item xs={12}>

                <TextField
                  label="Subject"
                  fullWidth
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Time"
                  fullWidth
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">Create Timetable</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      {/* Manage Students Section */}
      <Card style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h6">Manage Students</Typography>
          <List>
            {students.map((student) => (
              <ListItem key={student._id}>
                <ListItemText primary={student.name} secondary={student.email} />
                <Button variant="outlined" color="secondary" onClick={() => handleDeleteStudent(student._id)}>Delete</Button>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Manage Timetable Section */}
      <Card style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h6">Manage Timetable</Typography>
          <List>
            {timetable.map((entry) => (
              <ListItem key={entry._id}>
                <ListItemText primary={entry.subject} secondary={entry.time} />
                <Button variant="outlined" color="secondary" onClick={() => handleDeleteTimetable(entry._id)}>Delete</Button>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default TeacherDashboard;
