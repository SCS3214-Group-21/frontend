import React, { createContext, useState, useEffect } from 'react';
import { getToken, getUserRole, logout } from '../utils/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: getToken(),
    role: getUserRole(),
  });

  useEffect(() => {
    const token = getToken();
    const role = getUserRole();
    setAuthState({ token, role });
  }, []);

  const logoutUser = () => {
    logout();
    setAuthState({ token: null, role: null });
  };

  return (
    <AuthContext.Provider value={{ authState, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
