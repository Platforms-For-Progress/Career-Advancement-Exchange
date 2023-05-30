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
const Butty = (props) => {
  return (
    <Box>
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
        <MenuList bg={brand} height={'500px'} width={'561px'} position={'relative'}>
          {Object.keys(props.videoData).map((key) => {
            return (
              <MenuItem bg={brand} _hover={{ backgroundColor: '#F1CB71' }}>
                <Box
                  position={'relative'}
                  width="44%"
                  height="33%"
                  as="iframe"
                  marginRight={'15px'}
                  src={props.videoData[key]}
                  sx={{
                    aspectRatio: '16/9'
                  }}></Box>
                <Text fontFamily={'prata'}>{key}</Text>
              </MenuItem>
            );
          })}
          {/* <Box
              position={'relative'}
              width="44%"
              height="33%"
              as="iframe"
              src="https://www.youtube.com/embed/iXsM6NkEmFc"
              sx={{
                aspectRatio: '16/9'
              }}></Box> */}
        </MenuList>
      </Menu>
      <Box
        top={-150}
        left={10}
        pos={'relative'}
        borderRadius={'10px'}
        width="259px"
        height="88px"
        bg={'#E6C17B'}>
        <Text
          position={'absolute'}
          fontSize="4xl"
          fontFamily={'prata'}
          justifyContent={'center'}
          alignContent={'center'}
          marginTop={22}
          marginLeft={58}>
          {' '}
          {props.weekName}
        </Text>
      </Box>
    </Box>
  );
};
export default Butty;
