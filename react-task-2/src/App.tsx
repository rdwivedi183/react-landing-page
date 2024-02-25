import React from 'react';

import './App.css';

import { useSelector } from 'react-redux';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/auth/LoginPage';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  const tokenFromLocalStorage = localStorage.getItem('user');
  const tokenFromRedux = useSelector((state: any) => state.auth.isAuthenticated);
  const isAuthenticated = tokenFromLocalStorage || tokenFromRedux;

  return (
    <>
      <Router>
      {isAuthenticated &&  <Header />}
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />

            {/* Private route using PrivateRoute component */}
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
            </Route>

          </Routes>
          </Router>
  </>
  );
}

export default App;
