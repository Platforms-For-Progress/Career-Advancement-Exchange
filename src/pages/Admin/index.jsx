import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useUser } from '../../utils/User';
import { Button, Heading } from '@chakra-ui/react';

const AdminHome = () => {
  const { user, userInfo, loading, error } = useUser();
  useEffect(() => {}, []);
  return (
    <div>
      <Heading>Admin Dashboard</Heading>
      {userInfo && userInfo.role === 'superadmin' && (
        <Button as={RouterLink} to={'/admin/manage'}>
          Manage
        </Button>
      )}
    </div>
  );
};

export default AdminHome;
