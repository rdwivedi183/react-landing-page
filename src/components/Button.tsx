import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  label: string; 
  onClick?: () => void; 
  disabled?: boolean;
}

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${props => (props.disabled ? '' : 'darkblue')}; // Change color on hover if not disabled
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Define the Button component
const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default Button;
