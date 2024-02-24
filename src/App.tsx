import React from 'react';
import './App.css';
import Footer from './components/Footer';
import { theme } from './theme/theme';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <LandingPage />
      <Footer />
    </ThemeProvider>
   
  );
}

export default App;
