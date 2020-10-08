import styled from 'styled-components';

export const PostList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const PostItem = styled.div`
  padding: 10px;
  display: grid;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-bottom: 20px;
  border-radius: 5px;
  transition: 0.3s all;
  cursor: pointer;
  &:hover {
    color: #023047;
  }
  &:hover > p {
    border-bottom: 1px solid black;
  }
`;

export const PostTitle = styled.p`
  width: fit-content;
  transition: 0.3s all;
  position: relative;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid transparent;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 5px;
`;
