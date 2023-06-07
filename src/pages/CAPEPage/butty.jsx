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
import Epilogue from '../../assets/Epilogue-VariableFont_wght.ttf'
import Inter from '../../assets/Inter-VariableFont_slnt,wght.ttf'

const brand = '#EFD79F';
const Butty = (props) => {
  return (
    <Box>
      <Menu>
        <MenuButton
          as={Button}
          bg={'brand.400'}
          width={{base: '250px', md: '561px'}}
          height={'121px'}
          px={20}
          py={10}
          fontSize="4xl"
          fontFamily={Inter}
          rightIcon={<ChevronDownIcon />}></MenuButton>
        <MenuList bg={"brand.200"} height={'500px'} width={'561px'} position={'relative'}>
          {Object.keys(props.videoData).map((key) => {
            return (
              <MenuItem bg={"brand.200"} _hover={{ backgroundColor: 'brand.300' }}>
                <Box
                  position={'relative'}
                  width={"44%"}
                  height="33%"
                  as="iframe"
                  marginRight={'15px'}
                  src={props.videoData[key]}
                  sx={{
                    aspectRatio: '16/9'
                  }}></Box>
                <Text fontFamily={Inter}>{key}</Text>
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
        left={{base: 0, md: 10}}
        justifyContent={'center'}
        alignItems={'center'}
        pos={'relative'}
        borderRadius={'10px'}
        width={{base: "200px" , md: "259px"}}
        height="88px"
        bg={'brand.200'}>
        <Text
          position={'absolute'}
          fontSize="4xl"
          fontFamily={Epilogue}
          justifyContent={'center'}
          alignContent={'center'}
          marginTop={22}
          marginLeft={{base: 10, md: 58}}>
          {' '}
          {props.weekName}
        </Text>
      </Box>
    </Box>
  );
};
export default Butty;
