import React from 'react';
import { Box, Center, useColorModeValue } from '@chakra-ui/react';
const ProfileCard = ({ children }) => {
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
        {children}
      </Box>
    </Center>
  );
};

export default ProfileCard;
