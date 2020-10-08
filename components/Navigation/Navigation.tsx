import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export const Nav = styled.div`
  background-color: black;
  padding: 10px 0;
`;

export const NavItem = styled.a`
  padding: 0 10px;
  margin-left: 10px;
  color: white;
  border-bottom: 1px solid transparent;
  &:hover {
    cursor: pointer;
    color: gray;
    border-bottom: 1px solid gray;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Link href='/'>
        <NavItem>Home</NavItem>
      </Link>
      <Link href='/posts/new'>
        <NavItem>Create new post</NavItem>
      </Link>
    </Nav>
  );
};

export default Navigation;
