import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { Spinner } from 'flowbite-react';
import { AuthContext } from '../contacts/AuthProviders';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  console.log('Loading:', loading, 'User:', user); // Debug line

  if (loading) {
    return (
      <div className="text-center">
        <Spinner aria-label="center-aligned spinner example" />
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  }

  return children;
};

export default PrivateRoute;
