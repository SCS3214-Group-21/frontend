// src/routes/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, roleRequired, ...rest }) => {
  const role = "client"// Logic to get user role, e.g., from context or local storage
  
  if (!role) {
    // User is not logged in
    return <Navigate to="/login" />;
  }

  if (roleRequired && role !== roleRequired) {
    // User does not have the required role
    return <Navigate to="/unauthorized" />;
  }

  return <Element {...rest} />;
};

export default PrivateRoute;
