// This is the navbar component used in the app in all pages
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 88vh;
  width: 150px;
  position: fixed;
  left: 1.5em;
  top: 2em;

  z-index: 1000;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const StyledLink = styled(Link)`
  margin-bottom: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};

  &:hover {
    text-decoration: underline;
  }
`;

const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.buttonBackground};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBackground};
  }
`;

interface NavbarProps {
  toggleTheme: () => void;
  theme: string;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  return (
    <NavbarContainer>
      <h2>HabitHub</h2>
      <NavLinks>
        <StyledLink to="/dashboard">Dashboard</StyledLink>
        <ToggleButton onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </ToggleButton>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
