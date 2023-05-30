import React from 'react';
import { Box } from '@chakra-ui/react';
import { Flex, Text, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Inter from '../../assets/Inter-VariableFont_slnt,wght.ttf';
import Epilogue from '../../assets/Epilogue-VariableFont_wght.ttf';

const brand = '#EFD79F';

const ResourcesPage = () => {
  return (
    <Box bg="background.400" minH="95vh" maxW="full" mt={0} centerContent overflow="auto">
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Box>
          <Text fontFamily={Epilogue} pos={'relative'} right={{base: 0, md: -10}} fontSize={{ base: '4xl', md: '7xl' }}>
            Resources
          </Text>
          
          {/* <Text   pos={'relative'} ml={900} top={-5} fontSize='5xl'>Programs</Text>
      <Button  pos={'relative'} w='20%' h='100px'ml={900} top={5} colorScheme='brand'color='black' fontSize='4xl'>CAPE</Button> */}
          <Box
            pos={'relative'}
            borderWidth={20}
            borderColor={'brand.300'}
            right={{base: 0, md: -30}}
            width={{ base: '100%', md: '200%' }}
            height="100%"
            mt={10}
            as="iframe"
            src="https://drive.google.com/file/d/1gTBuCoMupZofPuOLTaYPsshrIoiCcu8h/preview"
            sx={{
              aspectRatio: '16/9'
            }}></Box>
        </Box>
        <Box>
          <Text fontFamily={Epilogue} pos={'relative'} left={{base: 0, md: 750}} top={100} fontSize={{ base: '3xl', md: '5xl' }}>
            Programs
          </Text>
          <Button
            as={RouterLink}
            to={'/resources/cape'}
            fontFamily={Inter}
            pos={'relative'}
            w={{ base: '100%', md: '140%' }}
            h="100px"
            left={{base: 0, md: 750}}
            top={130}
            bg={"brand.300"}
            color="black"
            fontSize={{ base: '2xl', md: '4xl' }}>
            CAPE
          </Button>
        </Box>
      </Flex>

      {/* <Text   pos={'relative'} ml={900} top={-5} fontSize='5xl'>Programs</Text>
      <Button  pos={'relative'} w='20%' h='100px'ml={900} top={5} colorScheme='brand'color='black' fontSize='4xl'>CAPE</Button> */}
    </Box>
  );
};

// 2. Call `extendTheme` and pass your custom values

export default ResourcesPage;
