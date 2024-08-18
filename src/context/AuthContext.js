import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import api from '../api.js';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const[token , setToken] = useState("")
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      //setUser(JSON.parse(userData));
    }
  }, []);

  const login = async (user , token) => {
    
    setUser(user);
    localStorage.setItem('user',user);
    setToken(token);
    localStorage.setItem('token' , token)
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout , token}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
