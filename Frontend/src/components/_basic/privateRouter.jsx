import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/admin" replace />
  );
}




