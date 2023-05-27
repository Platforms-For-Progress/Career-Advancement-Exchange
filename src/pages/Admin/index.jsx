import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useUser } from '../../utils/User';
import {
  Text,
  Alert,
  Button,
  Heading,
  Spinner,
  Box,
  AccordionPanel,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { firestore } from '../../firebase';
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';

const AdminHome = () => {
  const navigate = useNavigate();
  const { user, userInfo, loading, error } = useUser();
  const [assignedRequestUsers, setAssignedRequestUsers] = useState([]);

  useEffect(() => {
    // if (userInfo && (userInfo.role !== 'admin' || userInfo.role !== 'superadmin'))
    //   navigate('/profile');
    getAssignedRequests();
  }, [userInfo]);

  const getAssignedRequests = async () => {
    const assignedRequestsQuery = query(
      collection(firestore, 'users'),
      where('request.admins', 'array-contains', user?.uid)
    );
    const assignedRequestsSnapshot = await getDocs(assignedRequestsQuery);
    const result = assignedRequestsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setAssignedRequestUsers(result);
  };

  if (error) return <Alert status="error">{error}</Alert>;
  if (loading) return <Spinner />;
  return (
    <div>
      <Heading>Admin Dashboard</Heading>
      <Text fontSize="xl">Assigned Requests</Text>
      <Accordion allowMultiple allowToggle>
        {assignedRequestUsers.length > 0 &&
          assignedRequestUsers.map((request, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {request.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {request.email}
                <Text fontSize="xl">Survey Data</Text>
                {request.request?.survey_data?.length ? (
                  <Accordion allowMultiple allowToggle>
                    {request.request.survey_data.map((item, index) => (
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
                ) : (
                  <Text>No survey data</Text>
                )}
              </AccordionPanel>
            </AccordionItem>
          ))}
      </Accordion>
      {userInfo && userInfo.role === 'superadmin' && (
        <Button as={RouterLink} to="/admin/manage">
          Manage
        </Button>
      )}
    </div>
  );
};

export default AdminHome;
