import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  handleClick?: (data: any) => void;
  children: string;
};

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: 1px solid #8ecae6;
  border-radius: 10px;
  transition: 0.3s all;
  cursor: pointer;
  &:hover {
    background-color: #8ecae6;
    color: white;
  }
`;

const Button: React.FC<ButtonProps> = ({ children, handleClick }) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

export default Button;
