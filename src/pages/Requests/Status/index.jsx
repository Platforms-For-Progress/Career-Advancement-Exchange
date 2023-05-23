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
  Spacer
} from '@chakra-ui/react';
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
          <Text fontWeight={600} fontSize={'xl'} mb={2} pt={2}>
            Survey Responses
          </Text>
          {userInfo?.request?.survey_data?.length && (
            <Accordion>
              {userInfo.request.survey_data.map((item, index) => (
                <AccordionItem key={index}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {item.prompt}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>{item.response}</AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          )}
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
