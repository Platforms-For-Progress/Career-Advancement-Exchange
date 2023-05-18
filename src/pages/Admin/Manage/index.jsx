import React, { useState, useEffect } from 'react';
import { useUser } from '../../../utils/User';
import { firestore } from '../../../firebase';
import { getAllDocuments } from '../../../firebase/firestore';
import {
  Box,
  Input,
  Button,
  Text,
  Stack,
  Select,
  Center,
  Spacer,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react';

import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { doc, updateDoc, collection, onSnapshot } from 'firebase/firestore';

const AdminManage = () => {
  const navigate = useNavigate();
  const { user, userInfo, loading, error } = useUser();
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    if (userInfo?.role !== 'superadmin') {
      navigate('/profile');
    }
  }, [userInfo]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, 'users'), (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setUsersList(docs);
    });

    return () => unsubscribe();
  }, []);

  const handleRoleChange = async (event, userToUpdate) => {
    await updateDoc(doc(firestore, 'users', userToUpdate.id), {
      role: event.target.value
    });
  };

  return (
    <Box>
      <Tabs colorScheme="brand" variant="soft-rounded" align="center">
        <TabList>
          <Tab>Manage Users</Tab>
          <Tab>Manage Requests</Tab>
          <Button as={RouterLink} to={'/admin'}>
            Back
          </Button>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ManageUsers handleRoleChange={handleRoleChange} usersList={usersList} />
          </TabPanel>
          <TabPanel>
            <ManageRequests />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default AdminManage;

const ManageUsers = ({ handleRoleChange, usersList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = usersList.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Box>
      <Center display="flex" flexDirection="row">
        <Text fontWeight={600} fontSize={'2xl'} mb={2} pt={2}>
          Manage Users
        </Text>
        <Spacer />
        {/* <Button as={RouterLink} to={'/admin'}>
          Back
        </Button> */}
      </Center>
      <Input
        placeholder="Search users"
        value={searchTerm}
        onChange={handleSearchChange}
        margin={'10px 0'}
        border={'1px'}
      />
      <Stack spacing={4}>
        {filteredUsers.map((user) => (
          <Box key={user.id} p={5} shadow="md" borderWidth="1px" border="1px" borderRadius="lg">
            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
            <Select
              placeholder="Select role"
              value={user.role}
              onChange={(e) => handleRoleChange(e, user)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="superadmin">Super Admin</option>
            </Select>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

const ManageRequests = () => {
  return <h1>mr</h1>;
};
