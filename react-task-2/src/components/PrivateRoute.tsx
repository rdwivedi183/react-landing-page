//privateRoute.tsx

import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const tokenFromLocalStorage = localStorage.getItem('user');
  const tokenFromRedux = useSelector((state: any) => state.auth.isAuthenticated);

  // Check if token exists in either localStorage or Redux state
  const isAuthenticated = tokenFromLocalStorage || tokenFromRedux;
  

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;