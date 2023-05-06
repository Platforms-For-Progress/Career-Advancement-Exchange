import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Spinner,
  Avatar,
  StackDivider
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import ProfileCard from './ProfileCard';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  console.log('user', user);

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/signin');
  };

  if (loading) {
    return (
      <ProfileCard>
        <Spinner />
      </ProfileCard>
    );
  }
  if (error) {
    return (
      <ProfileCard>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Error loading profile information!</AlertTitle>
          <AlertDescription>
            <Link as={RouterLink} to="/login">
              Please try logging in again.
            </Link>
          </AlertDescription>
        </Alert>
      </ProfileCard>
    );
  }
  return (
    <ProfileCard>
      <Avatar size={'xl'} src={user?.photoURL} alt={user?.displayName} />
      <Text fontWeight={600} fontSize={'2xl'} mb={2} pt={2}>
        {user?.displayName || 'Anonymous User'}
      </Text>
      <Text fontWeight={500} fontSize={'lg'} mb={2}>
        {user?.email}
      </Text>
      <Divider my={6} />
      <Stack spacing={4} direction={'row'} align={'center'}>
        <Button
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          bg={'gray.200'}
          color={'gray.700'}
          _hover={{
            bg: 'gray.300'
          }}>
          Edit Profile
        </Button>
        <Button
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          bg={'gray.200'}
          color={'gray.700'}
          _hover={{
            bg: 'gray.300'
          }}
          onClick={handleLogout}>
          Logout
        </Button>
      </Stack>
      <Stack spacing={4} direction={'column'} align={'center'} pt={6}>
        <Button
          flex={1}
          fontSize={'lg'}
          rounded={'full'}
          colorScheme={'orange'}
          boxShadow={
            '0px 1px 25px -5px rgba(251, 143, 0, 0.8), 0px 1px 10px -5px rgba(251, 143, 0, 0.8)'
          }
          px={6}
          py={3}>
          Make Request
        </Button>
      </Stack>
    </ProfileCard>
  );
};

export default ProfilePage;