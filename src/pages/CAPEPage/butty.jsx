

import React from 'react';
import { Box } from '@chakra-ui/react';
import { Flex, Text } from '@chakra-ui/react';

import '@fontsource/prata';
import { Button } from '@chakra-ui/react';
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
const butty=()=> {
return(
    <Menu>
    <MenuButton
      as={Button}
      bg={brand}
    
      width={'561px'}
   
      height={'121px'}
      px={20}
      py={10}
      fontSize="4xl"
      fontFamily={'prata'}
      rightIcon={<ChevronDownIcon />}></MenuButton>
    <MenuList bg={brand} height={'500px'} width={'700px'}>
      <MenuItem bg={brand}>
        <Box
          pos={'relative'}
          title="HIIIIIIIIIIIi"
          textColor={'black'}
          width="44%"
          height="33%"
          as="iframe"
          src="https://www.youtube.com/embed/CdzgZ0JxtQw"
          sx={{
            aspectRatio: '16/9'
          }}></Box>
        <span>BRUH youtube vid 1 </span>
      </MenuItem>
      <MenuItem bg={brand}>
        <Box
          pos={'relative'}
          title="HIIIIIIIIIIIi"
          width="44%"
          height="33%"
          as="iframe"
          src="https://www.youtube.com/embed/CdzgZ0JxtQw"
          sx={{
            aspectRatio: '16/9'
          }}></Box>
        <span>BRIH youtube vid 2</span>
      </MenuItem>
    </MenuList>
  </Menu>

)
}
export default butty;