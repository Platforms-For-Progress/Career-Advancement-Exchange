import React from 'react';
import { Box } from '@chakra-ui/react';
import { Flex, Text } from '@chakra-ui/react';

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

const CAPEPage = () => {
  return (
    <Box bg="background.400" minH="95vh" minW ="100vw" mt={0}>
      <Flex direction={{base: 'column', md: 'row'}}>
        <Box>
          <Text fontFamily={'Prata'} pos={'relative'} right={-10} fontSize="7xl">
            CAPE
          </Text>

          <Menu>
            <MenuButton
              as={Button}
              bg={"brand.300"}
              right={-10}
              width={{base: '300px', md:'561px'}}
              top={20}
              height={'121px'}
              px={20}
              py={10}
              fontSize="4xl"
              fontFamily={'Prata'}
              
              rightIcon={<ChevronDownIcon />}></MenuButton>
            <MenuList bg={"brand.300"} height={'500px'} width={'561px'} position={'absolute'}>
              <MenuItem bg={"brand.300"}>
                <Box
                  pos={'relative'}
                  title="HIIIIIIIIIIIi"
                  textColor={'black'}
                  width="44%"
                  height="33%"
                  as="iframe"
                  src="https://drive.google.com/file/d/1gTBuCoMupZofPuOLTaYPsshrIoiCcu8h/preview"
                  sx={{
                    aspectRatio: '16/9'
                  }}></Box>
                <span>
                  <Text fontFamily={'prata'}> youtube vid 1</Text>
                </span>
              </MenuItem>
              <MenuItem bg={"brand.300"}>
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
                <span> youtube vid 2</span>
              </MenuItem>
            </MenuList>
          </Menu>

          {/* <Text   pos={'relative'} ml={900} top={-5} fontSize='5xl'>Programs</Text>
      <Button  pos={'relative'} w='20%' h='100px'ml={900} top={5} colorScheme='brand'color='black' fontSize='4xl'>CAPE</Button> */}
        </Box>

        <Box>
          <Flex direction={{base:'column', md:'row'}}>
            <Menu>
              <MenuButton
                as={Button}
                bg={"brand.300"}
                left={{base: 10, md: 400}}
                top={190}
                width={{base: '300px', md:'561px'}}
                height={'121px'}
                px={20}
                py={10}
                fontSize="4xl"
                fontFamily={'Prata'}
                rightIcon={<ChevronDownIcon />}></MenuButton>
              <MenuList bg={"brand.300"} height={'500px'} width={'561px'} position={'absolute'}>
                <MenuItem bg={"brand.300"}>
                  <Box
                    position={'relative'}
                    width="44%"
                    height="33%"
                    as="iframe"
                    src="https://www.youtube.com/embed/CdzgZ0JxtQw"
                    sx={{
                      aspectRatio: '16/9'
                    }}></Box>
                  <Text fontFamily={'prata'}>Week 2 vid</Text>
                </MenuItem>
              </MenuList>
            </Menu>
            {/* <Button  pos={'relative'} w='33%' h='100px' ml={800} top={150} bg={brand} color='black' fontSize='4xl'>CAPE</Button>  */}
          </Flex>
        </Box>
      </Flex>
      <Flex direction="row">
        <Box
          pos={'relative'}
          borderRadius={'10px'}
          top={{base:'-30vh', md:-67}}
          left={{base: 10, md:20}}
          title="656uhgfgh"
          width="259px"
          height="88px"
          bg={'red.400'}>
          <Text
            position={'relative'}
            fontSize="4xl"
            fontFamily={'Prata'}
            marginTop={22}
            marginLeft={58}>
            {' '}
            Week 1
          </Text>
        </Box>
      </Flex>

      <Flex direction="row">
        <Box
          pos={'relative'}
          borderRadius={'10px'}
          // top={-150}
          // left={1000}
          top={{base:'-10vh', md:-150}}
          left={{base: 10, md:1000}}
          title="656uhgfgh"
          width="259px"
          height="88px"
          bg={'red.400'}>
          <Text
            position={'relative'}
            fontSize="4xl"
            fontFamily={'Prata'}
            marginTop={22}
            marginLeft={58}>
            {' '}
            Week 2
          </Text>
        </Box>
      </Flex>

      {/* <Text   pos={'relative'} ml={900} top={-5} fontSize='5xl'>Programs</Text>
      <Button  pos={'relative'} w='20%' h='100px'ml={900} top={5} colorScheme='brand'color='black' fontSize='4xl'>CAPE</Button> */}
    </Box>
  );
};

// 2. Call `extendTheme` and pass your custom values

export default CAPEPage;
