import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../utils/User';
import { DeleteIcon } from '@chakra-ui/icons';
import { firestore } from '../../../firebase';
import {
  Box,
  Input,
  Button,
  Text,
  IconButton,
  Spinner,
  Select,
  Center,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Spacer,
  Stack
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {
  doc,
  updateDoc,
  getDocs,
  query,
  where,
  collection,
  getDoc,
  arrayRemove,
  deleteDoc,
  deleteField
} from 'firebase/firestore';

export default function Status() {
  const navigate = useNavigate();
  const { user, userInfo, loading, error } = useUser();
  if (userInfo && !userInfo.requeset) {
    navigate('/profile');
  }
  if (loading) return <Spinner />;
  if (error) return <Alert status="error" />;
  return (
    <Box maxW="100vw" minH="95vh" mx={'auto'} py={5} px={6}>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
        <Box w="100%" p={4}>
          <Text fontSize="2xl" fontWeight="bold" color="black" textAlign="center" mt="10vh">
            Your request status is: {userInfo?.request?.status ?? 'Pending'}
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="black" textAlign="center" mt="1rem">
            We will get back to you soon!
          </Text>
          <Stack direction="column" spacing={4} maxW={'500px'}>
            <Button as={RouterLink} to="/request/create" mt="1rem">
              View survey responses
            </Button>
            <Button as={RouterLink} to="/profile" mt="1rem" colorScheme="brand" size="lg">
              Go to profile
            </Button>
          </Stack>
          <Flex flexDir="row" justifyContent="center" alignItems="center" mt="2rem">
            <IconButton
              icon={<DeleteIcon />}
              onClick={async () => {
                await updateDoc(doc(firestore, 'users', user.uid), {
                  request: deleteField()
                });
                navigate('/profile');
              }}
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
