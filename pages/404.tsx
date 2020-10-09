import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import MainLayout from '../components/MainLayout/MainLayout';

const Error = styled.div`
  display: flex;
  height: 30vh;
  justify-content: center;
  align-items: center;
  span {
    border: 1px solid black;
    height: 70px;
    margin: 0 20px;
  }
  h1,
  h2 {
    letter-spacing: 3px;
    padding: 20px 0;
    font-size: 40px;
  }
`;

const HomeLink = styled.div`
  font-size: 30px;
  text-align: center;
  a {
    border-bottom: 1px solid transparent;

    transition: 0.3s all;
  }
  a:hover {
    border-bottom: 1px solid black;
  }
`;

const ErrorPage = () => {
  return (
    <MainLayout>
      <Error>
        <h1>404</h1>
        <span></span>
        <h1>Not Found</h1>
      </Error>
      <HomeLink>
        <Link href='/'>
          <a>Go to Home Page</a>
        </Link>
      </HomeLink>
    </MainLayout>
  );
};

export default ErrorPage;
