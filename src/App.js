import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import PrincipalDashboard from './pages/PrincipalDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import PrivateRoute from './context/PrivateRoute';
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
            <Route path="/principal" element={<PrivateRoute><PrincipalDashboard /></PrivateRoute>} />
            <Route path="/teacher" element={<PrivateRoute><TeacherDashboard /></PrivateRoute>} />
            <Route path="/student" element={<PrivateRoute><StudentDashboard /></PrivateRoute>} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
