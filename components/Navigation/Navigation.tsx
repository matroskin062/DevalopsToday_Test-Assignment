import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export const Nav = styled.div`
  background-color: #3d405b;
  padding: 15px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Menu = styled.div``;

export const NavItem = styled.a`
  padding: 0 10px;
  margin-left: 10px;
  border-bottom: 1px solid transparent;
  transition: 0.2s all;
  &:hover {
    cursor: pointer;
    color: #eddcd2;
    border-bottom: 1px solid #eddcd2;
  }
`;

const Title = styled.p`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Menu>
        <Link href='/'>
          <NavItem>Home</NavItem>
        </Link>
        <Link href='/posts/new'>
          <NavItem>Create new post</NavItem>
        </Link>
      </Menu>
      <Title>Test Assessment for Developers Today</Title>
    </Nav>
  );
};

export default Navigation;
