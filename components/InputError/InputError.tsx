import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.p`
  padding: 10px 0;
  color: #e07a5f;
`;

const InputError = ({ children }) => {
  return <ErrorMessage>{children}</ErrorMessage>;
};

export default InputError;
