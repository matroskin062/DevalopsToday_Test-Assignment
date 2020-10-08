import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 10px 10px;
  border: none;
  border-bottom: 1px solid gray;
  outline: none;
  margin-bottom: 20px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid gray;
  border-radius: 10px;
  min-height: 200px;
  resize: none;
  padding: 20px;
  font-size: 14px;
  font-family: sans-serif;
  margin: 10px 0;
`;

export const Button = styled.button`
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
