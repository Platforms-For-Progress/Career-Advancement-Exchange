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
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const ProfilePage = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log('user', user);

  if (loading) {
    return (
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Spinner />
        </Box>
      </Center>
    );
  }
  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar size={'xl'} src={user?.photoURL} alt={user?.displayName} />
        <Text fontWeight={600} fontSize={'2xl'} mb={2} pt={2}>
          {user?.displayName || 'Anonymous User'}
        </Text>
        <Text fontWeight={500} fontSize={'lg'} mb={2}>
          {user?.email}
        </Text>
        <Divider my={6} />
        <Stack spacing={4} direction={'row'} align={'center'}>
          <Button flex={1} fontSize={'sm'} rounded={'full'} bg={'gray.200'} color={'gray.700'}>
            Edit Profile
          </Button>
          <Button flex={1} fontSize={'sm'} rounded={'full'} bg={'gray.200'} color={'gray.700'}>
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
      </Box>
    </Center>
  );
};

export default ProfilePage;
