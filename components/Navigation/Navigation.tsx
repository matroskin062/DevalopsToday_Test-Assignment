import Link from 'next/link';
import React from 'react';
import { Nav, NavItem } from '../../styles/NavigationStyle';

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
