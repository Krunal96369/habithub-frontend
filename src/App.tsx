// This is the main app file
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import HabitDetail from './pages/HabitDetail';
import Login from './pages/Login';
import { GlobalStyles } from './styles/GlobalStyles';
import { darkTheme, lightTheme } from './theme';

const App: React.FC = () => {
  // Retrieve theme from localStorage or default to light
  const storedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(storedTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Persist the theme preference
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles theme={currentTheme} />
      <Router>
        <AppContent toggleTheme={toggleTheme} theme={theme} />
      </Router>
    </ThemeProvider>
  );
};

const AppContent: React.FC<{ toggleTheme: () => void; theme: string }> = ({ toggleTheme, theme }) => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <>
      {showNavbar && <Navbar toggleTheme={toggleTheme} theme={theme} />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/habit/:id" element={<HabitDetail />} />
      </Routes>
    </>
  );
};

export default App;
