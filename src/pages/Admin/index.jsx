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
  AccordionButton,
  Select
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { firestore } from '../../firebase';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where
} from 'firebase/firestore';

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

  const handleStatusChange = (userId, e) => {
    const updatedAssignedRequestUsers = assignedRequestUsers.map((user) => {
      if (user.id === userId) {
        return { ...user, request: { ...user.request, status: e.target.value } };
      }
      return user;
    });
    setAssignedRequestUsers(updatedAssignedRequestUsers);
  };

  const handleStatusSubmit = async (userId) => {
    const user = assignedRequestUsers.find((user) => user.id === userId);
    if (user) {
      await updateDoc(doc(firestore, 'users', userId), {
        'request.status': user.request.status
      });
    }
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
                    {request.name} - {request.email}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text fontSize="xl">Status</Text>
                <Select
                  value={request.request.status}
                  onChange={(e) => handleStatusChange(request.id, e)}
                  onBlur={() => handleStatusSubmit(request.id)}>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="complete">Complete</option>
                </Select>
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
