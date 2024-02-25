import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { logoutUser } from '../redux/actions/dataActions';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Styled component for the header container
const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Styled component for the header title
const HeaderTitle = styled.h1`
  margin: 0;
`;

// Styled component for the username or logout button
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

// Styled component for the logout button
const LogoutButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
`;

// Functional component for the Header
const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tokenFromRedux = useSelector((state: any) => state.auth.user.username);

    const username = tokenFromRedux
    
    const onLogout = () => {
      dispatch(logoutUser());
      localStorage.removeItem('user');
      localStorage.removeItem('cachedData');
      navigate('/login')
    }

  return (
     <HeaderContainer>
      <HeaderTitle>Header</HeaderTitle>
      {username && onLogout && (
        <UserInfo>
          <span>{username}</span>
          <LogoutButton onClick={onLogout}>Logout</LogoutButton>
        </UserInfo>
      )}
    </HeaderContainer>
  );
};

export default Header;
