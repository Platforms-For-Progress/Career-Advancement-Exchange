import React from 'react';
import { useUser } from '../../../utils/User';

const MessageAdmin = () => {
  const { user, userInfo, loading, error } = useUser();
  if (!userInfo || loading) {
  }
  return <></>;
};

export default MessageAdmin;
