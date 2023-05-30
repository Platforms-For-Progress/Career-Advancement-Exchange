import React from 'react';
import { Box } from '@chakra-ui/react';
import { Flex, Text } from '@chakra-ui/react';

import Butty from './butty';

import '@fontsource/prata';
import { Button } from '@chakra-ui/react';
import VideoButton from '../../components/VideoButton/VideoButton';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider
} from '@chakra-ui/react';
import Epilogue from '../../assets/Epilogue-VariableFont_wght.ttf'

const brand = '#EFD79F';


const CAPEPage = () => {
  return (

    <Box bg="background.400" minH="95vh" maxW="full" mt={0} marginBottom={'300px'}>
      <Box>
        <Text fontFamily={Epilogue} pos={'relative'} right={-10} fontSize="7xl">
          CAPE
        </Text>
      </Box>

      <Flex direction={{base: "column", md:"row"}} mt={68} ml={10} gap={'20%'}>
        <Butty
          weekName="Week 0"
          videoData={{
            'Welcome video from our founder Elisa Carrillo!':
              'https://drive.google.com/file/d/12DpwqSssO8shYg7qbrmtsEXA9suS0htn/preview',
            'This lesson is all about Git! Learn about git, download git, and prepare git to be used with VSCode and GitHub! Click to learn more!':
              'https://drive.google.com/file/d/16ZnykVD0YiGRqeGuCekLnwXN55triE77/preview',
            'What is GitHub? In this video you will make your own GitHub account and your first own repository! At the end resources will be shared to get you started.':
              'https://drive.google.com/file/d/1J42CxOVAMVNn0EWj9-HmGLayHccMcNlq/preview',
            'What is VSCode? Here you will download VSCode, learn how to navigate folders and files, and Basic Commands via the Command Line':
              'https://drive.google.com/file/d/1vYUzCiak_QO-VkCr9g35RvTkec12gmX8/preview'
          }}></Butty>
        <Butty weekName="Week 1" videoData={{}}></Butty>
      </Flex>
      {/* //add more flexs to add more weeks
      */}

    </Box>
  );
};

// 2. Call `extendTheme` and pass your custom values

export default CAPEPage;
