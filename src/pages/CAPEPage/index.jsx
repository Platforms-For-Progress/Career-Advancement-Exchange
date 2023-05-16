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

const CAPEPage= () => {
  return (
    <Box bg="#F9F6E8" minH='95vh' maxW="full" mt={0} centerContent overflow="auto">
      <Flex direction='row'>
        <Box>
        <Text  fontFamily={'prata'} pos={'relative'} right={-10} fontSize='7xl'>CAPE</Text>
      <Text   fontFamily={'prata'} pos={'relative'}  right={-10} pt={0}  fontSize='4xl'>Week 1</Text>
      {/* <Text   pos={'relative'} ml={900} top={-5} fontSize='5xl'>Programs</Text>
      <Button  pos={'relative'} w='20%' h='100px'ml={900} top={5} colorScheme='brand'color='black' fontSize='4xl'>CAPE</Button> */}
     

        </Box>
        <Box>
        <Text  fontFamily={'prata'} pos={'relative'} left={800} top={100} fontSize='5xl'>Week 2</Text>
      {/* <Button  pos={'relative'} w='33%' h='100px' ml={800} top={150} bg={brand} color='black' fontSize='4xl'>CAPE</Button>  */}

        </Box>

      </Flex>


      

      
      {/* <Text   pos={'relative'} ml={900} top={-5} fontSize='5xl'>Programs</Text>
      <Button  pos={'relative'} w='20%' h='100px'ml={900} top={5} colorScheme='brand'color='black' fontSize='4xl'>CAPE</Button> */}
      


    </Box>
  );
};


// 2. Call `extendTheme` and pass your custom values






export default CAPEPage;
