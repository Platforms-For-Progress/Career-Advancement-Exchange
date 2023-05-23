import React from 'react';
import { Outlet } from 'react-router-dom/';
import Navbar from '../Navbar';
import styles from './RootLayout.module.css';

const RootLayout = () => {
  return (
    <div className={styles.rootLayout}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
