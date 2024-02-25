import React from 'react';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import { Container } from './theme/theme';

function App() {
  return (
    <>
    <Container>
      <Header />
      <LandingPage />
    </Container>
      <Footer /> 
    </>
   
  );
}

export default App;
