// import React, { useState, useEffect } from 'react';
// import { Container, Typography, Button } from '@mui/material';
// import api from '../api';

// const PrincipalDashboard = () => {
//   const [classrooms, setClassrooms] = useState([]);

//   useEffect(() => {
//     const fetchClassrooms = async () => {
//       const response = await api.get('/api/principal/classrooms');
//       setClassrooms(response.data);
//     };
//     fetchClassrooms();
//   }, []);

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>Principal Dashboard</Typography>
//       <Button variant="contained" color="primary">Create Teacher</Button>
//       <Button variant="contained" color="secondary">Create Classroom</Button>
//       <Button variant="contained">Create Timetable</Button>
//       <Typography variant="h6" gutterBottom>Classrooms</Typography>
//       <ul>
//         {classrooms.map((classroom) => (
//           <li key={classroom._id}>{classroom.name}</li>
//         ))}
//       </ul>
//     </Container>
//   );
// };

// export default PrincipalDashboard;

import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PrincipalDashboard = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Principal Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={3}
            style={{ padding: '20px', cursor: 'pointer' }}
            onClick={() => handleNavigation('/create-teacher')}
          >
            <Typography variant="h6">Create Teacher</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={3}
            style={{ padding: '20px', cursor: 'pointer' }}
            onClick={() => handleNavigation('/get-teachers')}
          >
            <Typography variant="h6">Get Teachers</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={3}
            style={{ padding: '20px', cursor: 'pointer' }}
            onClick={() => handleNavigation('/create-classroom')}
          >
            <Typography variant="h6">Create Classroom</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={3}
            style={{ padding: '20px', cursor: 'pointer' }}
            onClick={() => handleNavigation('/get-classrooms')}
          >
            <Typography variant="h6">Get Classrooms</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PrincipalDashboard;

