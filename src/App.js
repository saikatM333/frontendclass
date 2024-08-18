import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import PrincipalDashboard from './pages/PrincipalDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import PrivateRoute from './context/PrivateRoute';
import CreateTeacher from './components/CreateTeacher';
import GetTeachers from './components/GetTeacher';
import CreateClassroom from './components/CreateClassroom';
import GetClassrooms from './components/GetClassroom';
import { AuthProvider } from './context/AuthContext';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
          <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/principal" element={<PrincipalDashboard />} />
            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/create-teacher" element={<CreateTeacher />} />
            <Route path="/get-teachers" element={<GetTeachers />} />
            <Route path="/create-classroom" element={<CreateClassroom />} />
            <Route path="/get-classrooms" element={<GetClassrooms />} />
            
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
