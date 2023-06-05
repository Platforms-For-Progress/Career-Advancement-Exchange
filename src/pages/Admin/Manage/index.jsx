import React, { useState, useEffect } from 'react';
import { useUser } from '../../../utils/User';
import { firestore } from '../../../firebase';
import {
  Box,
  Input,
  Button,
  Text,
  Select,
  Center,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel
} from '@chakra-ui/react';

import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  doc,
  updateDoc,
  getDocs,
  query,
  where,
  collection,
  getDoc,
  arrayRemove,
  onSnapshot,
  setDoc,
  serverTimestamp
} from 'firebase/firestore';

const AdminManage = () => {
  const navigate = useNavigate();
  const { user, userInfo, loading, error } = useUser();
  const [userEmail, setUserEmail] = useState('');
  const [assignedAdminEmail, setAssignedAdminEmail] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [assignedAdmins, setAssignedAdmins] = useState([]);


  // useEffect(() => {
  //   if (!selectedUser?.request?.admins?.length) return;
  //   const adminsQuery = query(
  //     collection(firestore, 'users'),
  //     where('id', 'in', selectedUser?.request?.admins)
  //   );
  //   getDocs(adminsQuery).then((adminsSnapshot) => {
  //     if (!adminsSnapshot.empty) {
  //       setAssignedAdmins([
  //         ...assignedAdmins,
  //         adminsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //       ]);
  //     }
  //   });
  // }, [selectedUser]);

  //automatically creates a chat when a user is assigned an admin - might move to a separate file 
  const autoMessage = async(user, admin) => {
    const combinedId = user.name.length > admin.name.length ? user.name + admin.name : admin.name + user.name
    try {
      const res = await getDoc(doc(firestore, "chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(firestore, "chats", combinedId), {messages:[]})
      }
        const user1 = await getDoc(doc(firestore, "userChats", user.name));
        const user2 = await getDoc(doc(firestore, "userChats", admin.name));

        if (!user1.exists()) {
          await setDoc(doc(firestore, "userChats", user.name), {
            [combinedId]: {
              date: serverTimestamp(),
              userInfo: {
                name: admin.name
              }
            }
          });
        } else {
          await updateDoc(doc(firestore, "userChats", user.name), {
            [combinedId+".userInfo"]: {
              name: admin.name,
            },
            [combinedId+".date"]: serverTimestamp()
          });
        }
        if (!user2.exists()) {
          await setDoc(doc(firestore, "userChats", admin.name), {
            [combinedId]: {
              date: serverTimestamp(),
              userInfo: {
                name: user.name
              }
            }
          });
        } else {
          await updateDoc(doc(firestore, "userChats", admin.name), {
            [combinedId+".userInfo"]: {
              name: user.name,
            },
            [combinedId+".date"]: serverTimestamp()
          });
        }
    } catch(err) {}
}

  useEffect(() => {
    if (userInfo?.role !== 'superadmin') {
      navigate('/profile');
    }
  }, [userInfo]);

  const handleRoleChange = async (event) => {
    setSelectedRole(event.target.value);
  };

  const handleRoleChangeSubmit = async (event) => {
    if (selectedUser && selectedRole) {
      await updateDoc(doc(firestore, 'users', selectedUser.id), {
        role: selectedRole
      });
      setSelectedUser({ ...selectedUser, role: selectedRole });
    }
  };

  const handleEmailSubmit = async () => {
    const usersQuery = query(collection(firestore, 'users'), where('email', '==', userEmail));
    const userSnapshot = await getDocs(usersQuery);
    if (!userSnapshot.empty) {
      const user = { ...userSnapshot.docs[0].data(), id: userSnapshot.docs[0].id };
      setSelectedUser(user);
      setSelectedRole(user.role);
    }
    if (!selectedUser?.request?.admins?.length) return;
    const adminsSnapshotPromises = selectedUser.request.admins.map(async (adminId) => {
      const adminDocRef = doc(firestore, 'users', adminId);
      const adminDocSnapshot = await getDoc(adminDocRef);
      if (adminDocSnapshot.exists()) {
        return { ...adminDocSnapshot.data(), id: adminId };
      }
      return null;
    });

    const adminsSnapshotResults = await Promise.all(adminsSnapshotPromises);
    const validAdminsSnapshot = adminsSnapshotResults.filter((snapshot) => snapshot !== null);
    console.log(validAdminsSnapshot);

    setAssignedAdmins((prevAssignedAdmins) => [...prevAssignedAdmins, ...validAdminsSnapshot]);
  };

  const handleAssignSubmit = async () => {
    if (!assignedAdminEmail?.trim().length) {
      alert('Must enter email address');
      return;
    }
    const adminQuery = query(
      collection(firestore, 'users'),
      where('email', '==', assignedAdminEmail)
    );
    const adminSnapshot = await getDocs(adminQuery); // Use getDocs instead of getDoc
    if (adminSnapshot.empty) {
      alert('No user found with this email');
      return;
    }
    const adminData = adminSnapshot.docs[0].data();
    const adminId = adminSnapshot.docs[0].id;
    await updateDoc(doc(firestore, 'users', selectedUser.id), {
      ['request.admins']: [...(selectedUser?.request?.admins ?? []), adminId]
    });
    setAssignedAdmins([
      ...assignedAdmins,
      {
        ...adminData,
        id: adminId
      }
    ]);
    autoMessage(selectedUser, adminData);
  };

  const handleDeleteAdmin = async (adminId) => {
    await updateDoc(doc(firestore, 'users', selectedUser.id), {
      ['request.admins']: arrayRemove(adminId)
    });
    setAssignedAdmins(assignedAdmins.filter((admin) => admin.id !== adminId));
  };

  return (
    <Box>
      <Text fontWeight={600} fontSize={'6xl'} mb={2} pt={2}>
        Manage Users
      </Text>
      <Input
        placeholder="Enter user email"
        value={userEmail}
        onChange={(event) => setUserEmail(event.target.value)}
        margin={'10px 0'}
        border={'1px'}
        maxW={'500px'}
      />
      <Button
        onClick={() => {
          setUserEmail(userInfo?.email);
        }}
        margin={'10px 0'}>
        Set your email
      </Button>
      <Button onClick={handleEmailSubmit}>Get User Info</Button>
      {selectedUser && (
        <Box p={5} shadow="md" borderWidth="1px" border="1px" borderRadius="lg">
          <Text fontWeight={600} fontSize={'2xl'} mb={2} pt={2}>
            {selectedUser.name}
          </Text>
          <Text>Email: {selectedUser.email}</Text>
          <Text>Role: {selectedUser.role}</Text>
          <Text fontWeight={600} fontSize={'xl'} mb={2} pt={2}>
            Update Role
          </Text>
          <Flex maxW={'500px'} alignItems={'center'} direction={'row'}>
            <Select onChange={handleRoleChange}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="superadmin">Super Admin</option>
            </Select>
            <Button onClick={handleRoleChangeSubmit}>Update Role</Button>
          </Flex>
          <Text fontWeight={600} fontSize={'xl'} mb={2} pt={2}>
            Request
          </Text>
          <Text fontWeight={600} fontSize={'l'} mb={2} pt={2}>
            Survey Responses
          </Text>
          {selectedUser?.request?.survey_data?.length && (
            <Accordion allowMultiple allowToggle>
              {selectedUser.request.survey_data.map((item, index) => (
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
          <Flex maxW={'500px'} alignItems={'center'} direction={'row'}>
            <Input
              placeholder="Enter admin's email"
              value={assignedAdminEmail}
              onChange={(event) => setAssignedAdminEmail(event.target.value)}
              margin={'10px 0'}
              border={'1px'}
              maxW={'500px'}
            />
            <Button onClick={handleAssignSubmit}>Assign Request</Button>
          </Flex>
          <Text fontWeight={600} fontSize={'l'} mb={2} pt={2}>
            Assigned Admins
          </Text>
          <Box maxW={'500px'} overflowY={'scroll'} border={'1px'} borderRadius={'lg'}>
            {assignedAdmins.map((admin) => (
              <Flex key={admin.id} justify="space-between">
                <Text>
                  {admin.name} - {admin.email}
                </Text>
                <Button onClick={() => handleDeleteAdmin(admin.id)}>Delete</Button>
              </Flex>
            ))}
          </Box>
        </Box>
      )}
      <Button as={RouterLink} to={'/admin'}>
        Back
      </Button>
    </Box>
  );
};

export default AdminManage;
