import React from 'react';
import { Box } from '@chakra-ui/react';
import { Flex, Text } from '@chakra-ui/react';

import Butty from './Butty';

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

const brand = '#EFD79F';

const CAPEPage = () => {
  return (
    <Box bg="#F9F6E8" minH="95vh" maxW="full" mt={0}>
    
        <Box>
          <Text fontFamily={'prata'} pos={'relative'} right={-10} fontSize="7xl">
            CAPE
          </Text>

         

      
        </Box>

        
    
      

      <Flex direction="row" mt={68} ml={10} gap={"20%"}>
        
        <Butty weekName="Week 0" videoData={{
          "This lesson is all about Git! Learn about git, download git, and prepare git to be used with VSCode and GitHub! Click to learn more!": "https://drive.google.com/file/d/16ZnykVD0YiGRqeGuCekLnwXN55triE77/preview",
          "github lesson": "https://drive.google.com/file/d/1J42CxOVAMVNn0EWj9-HmGLayHccMcNlq/preview",
          "vscode lesson": "https://drive.google.com/file/d/1vYUzCiak_QO-VkCr9g35RvTkec12gmX8/preview"

        }}>

        </Butty>
        <Butty  weekName="Week 1" videoData={{
          "COMING SOON": ""
        }}>

        </Butty>
      </Flex>
      {/* //add more flexs to add more weeks  
      IM KILLING MYSELF
      */}

      
    </Box>
  );
};

// 2. Call `extendTheme` and pass your custom values

export default CAPEPage;
