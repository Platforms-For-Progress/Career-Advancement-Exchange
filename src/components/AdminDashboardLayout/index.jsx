import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, Link as RouterLink } from 'react-router-dom/';
import { useUser } from '../../utils/User';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { FiHome, FiSettings, FiMenu, FiUser } from 'react-icons/fi';
import styles from './AdminDashboardLayout.module.css';

// const LinkItems = [
//   { href: '/admin', name: 'Home', icon: FiHome },
//   { href: '/admin/settings', name: 'Settings', icon: FiSettings },
//   { href: '/profile', name: 'Back to profile', icon: FiUser }
// ];

export default function AdminDashboardRootLayout({ children }) {
  const navigate = useNavigate();
  const { user, userInfo, loading, error } = useUser();

  useEffect(() => {
    if (userInfo && userInfo.role !== 'admin' && userInfo.role !== 'superadmin') {
      navigate('/');
    }
  }, [userInfo]);

  return (
    <div className={styles.AdminDashboardRootLayout}>
      <Outlet />
    </div>
  );
}
