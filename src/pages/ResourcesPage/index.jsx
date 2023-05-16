import React from 'react';
import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  Container,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  Center,
  Avatar,
  Button
  
  
} from '@chakra-ui/react';
import "@fontsource/prata";
import {Link as RouterLink} from 'react-router-dom';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import {
  CgWebsite
} from 'react-icons/cg';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { ReactElement, useState } from 'react';
import { GrPowerCycle } from 'react-icons/gr';
import businessImage from '../../assets/adobe.jpeg'
import {ButtonGroup } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react";




 const brand = "#EFD79F";

const ResourcesPage= () => {
  return (
    <Box bg="#F9F6E8" minH='95vh' maxW="full" mt={0} centerContent overflow="auto">
      <Flex direction='row'>
        <Box>
        <Text fontFamily={'prata'} pos={'relative'} right={-10} fontSize='7xl'>Resources</Text>
      <Text   fontFamily={'prata'} pos={'relative'}  right={-10} pt={0}  fontSize='4xl'>About Our Resources</Text>
      {/* <Text   pos={'relative'} ml={900} top={-5} fontSize='5xl'>Programs</Text>
      <Button  pos={'relative'} w='20%' h='100px'ml={900} top={5} colorScheme='brand'color='black' fontSize='4xl'>CAPE</Button> */}
      <Box
      pos={'relative'}
      borderWidth={20}
      borderColor={"#EFD79F"}
      right={-30}
      width='200%'
      height='100%' 
      as='iframe'
      src='https://www.youtube.com/embed/CdzgZ0JxtQw'
      sx={{
        aspectRatio: '16/9'
      }}></Box>

        </Box>
        <Box>
        <Text fontFamily={'prata'} pos={'relative'} left={750} top={100} fontSize='5xl'>Programs</Text>
      <Button as={RouterLink} to={'/resources/cape'} fontFamily={'prata'} pos={'relative'} w='140%' h='100px' left={750} top={130} bg={brand} color='black' fontSize='4xl'>CAPE</Button> 

        </Box>

      </Flex>


      

      
      {/* <Text   pos={'relative'} ml={900} top={-5} fontSize='5xl'>Programs</Text>
      <Button  pos={'relative'} w='20%' h='100px'ml={900} top={5} colorScheme='brand'color='black' fontSize='4xl'>CAPE</Button> */}
      


    </Box>
  );
};


// 2. Call `extendTheme` and pass your custom values






export default ResourcesPage;
