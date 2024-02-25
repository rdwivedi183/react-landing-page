import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { logo } from '../Helper/assets';

// Define the styled components for the header elements
const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;
const LeftWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`
const RightWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 55px;
}`

// Define the Header component
const Header: React.FC = () => {
  // Event handler for the button click
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <StyledHeader>
    <LeftWrap>
        <img src={logo} alt="Image 1"  width="40" height="40" />
      <Logo> Digital agency</Logo>
    </LeftWrap>
      <RightWrap>
        <Navigation>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Services</NavLink>
            <NavLink href="#">Projects</NavLink>
        </Navigation>
        <Button label="Get in Touch" onClick={handleClick} />
      </RightWrap>
    </StyledHeader>
  );
};

export default Header;
