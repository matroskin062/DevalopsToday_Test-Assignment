import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Content } from '../../styles/MainLayoutStyle';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Content>{children}</Content>
    </div>
  );
};

export default MainLayout;
