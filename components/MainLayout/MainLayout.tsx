import React from 'react';
import Navigation from '../Navigation/Navigation';
import styled from 'styled-components';
import Link from 'next/link';

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
`;

const GithubLink = styled.a`
  display: block;
  position: fixed;
  bottom: 30px;
  right: 50px;
  img {
    width: 50px;
    transition: 1s all;
  }

  &:hover img {
    transform: scale(1.5);
  }
`;

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Content>{children}</Content>

      <GithubLink href='https:/github.com' target='blank'>
        <img
          src='./assets/PngItem_1280311.png'
          alt='github'
          title='Github repo'
        />
      </GithubLink>
    </div>
  );
};

export default MainLayout;
