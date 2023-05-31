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
  StackDivider,
  Editable,
  useEditableControls,
  ButtonGroup,
  IconButton,
  EditablePreview
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useUser } from '../../utils/User';

import ProfileCard from './ProfileCard';
import { setDoc, doc } from 'firebase/firestore';
import { checkIfDocExists, getDocIfExists } from '../../firebase/firestore';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, userInfo, loading, error } = useUser();
  const handleLogout = async () => {
    await auth.signOut();
    navigate('/signin');
  };

  const handleMessage = () => {
    navigate('/message');
  };

  if (!userInfo || loading) {
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
      {/* Added button to access messaging platform (only allowed for users and admin) */}
      <Stack direction={'row'} align={'center'} pt={6}>
        <Button
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          bg={'gray.200'}
          color={'gray.700'}
          _hover={{
            bg: 'gray.300'
          }}
          onClick={handleMessage}>
          Message
        </Button>
      </Stack>

      <Stack spacing={4} direction={'column'} align={'center'} pt={6}>
        {userInfo.request ? (
          <Button
            as={RouterLink}
            to="/request"
            flex={1}
            fontSize={'lg'}
            rounded={'full'}
            bg={'brand.300'}
            color={'white'}
            _hover={{
              bg: 'brand.400'
            }}
            px={6}
            py={3}>
            View Request
          </Button>
        ) : (
          <Button
            as={RouterLink}
            to="/request/create"
            flex={1}
            fontSize={'lg'}
            rounded={'full'}
            bg={'brand.300'}
            color={'white'}
            _hover={{
              bg: 'brand.400'
            }}
            px={6}
            py={3}>
            Make Request
          </Button>
        )}
        {userInfo && (userInfo.role === 'admin' || userInfo.role === 'superadmin') && (
          <Button
            as={RouterLink}
            to="/admin"
            flex={1}
            fontFamily={'mono'}
            fontSize="lg"
            rounded="full"
            bg={'brand.300'}
            color={'white'}
            _hover={{
              bg: 'brand.400'
            }}
            px={6}
            py={3}>
            Launch Admin Dashboard
          </Button>
        )}
      </Stack>
    </ProfileCard>
  );
};

export default ProfilePage;
