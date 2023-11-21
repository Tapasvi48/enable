import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token');
console.log(token);
  // Check if the token is present
  const isAuthenticated = token.length>0?true:false;

  console.log('isAuthenticated:', isAuthenticated);

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
