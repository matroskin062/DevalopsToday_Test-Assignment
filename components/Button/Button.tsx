import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  handleClick?: (data: any) => void;
  children: string;
  btnType?: string;
};

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: 1px solid
    ${(props) => (props.btnType !== 'danger' ? '#4E7E67' : '#E07A5F')};
  border-radius: 10px;
  transition: 0.3s all;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.btnType !== 'danger' ? '#4E7E67' : '#E07A5F'};
    color: white;
  }
`;

const Button: React.FC<ButtonProps> = ({ children, handleClick, btnType }) => {
  return (
    <StyledButton type='submit' onClick={handleClick} btnType={btnType}>
      {children}
    </StyledButton>
  );
};

export default Button;
