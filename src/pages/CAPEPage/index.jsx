import React, {Button, useState } from 'react'
import { 
  Card, 
  CardHeader, 
  CardBody, 
  Heading, 
  Stack, 
  StackDivider, 
  Box, 
  Text, 
  AspectRatio } from '@chakra-ui/react'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Portal
} from '@chakra-ui/react'
import Content from './Content'
import { ChevronDownIcon } from '@chakra-ui/icons'

const brand = '#EFD79F';

const CAPEPage = () => {
  const [menuLabel, setMenuLabel] = useState("Week 0")
  return (
    
    <Stack spacing={"50px"} padding={"25px"} flex={1}>
      <Box>
            <Menu closeOnSelect={true} isLazy={true}>
            <MenuButton 
              width={{sm: "100%", md: "250px", lg: "250px"}}
              as={Button} 
              bgColor={"#f2bfb8"} 
              padding={"5"}
              borderRadius={"5px"}
              textColor={"light grey"}
              boxShadow={"0px 0px 5px 0px #e1e3e3"}
              > {menuLabel} <ChevronDownIcon/> </MenuButton>

            <Portal>
              <MenuList 
              width={"250px"}
              bgColor={"#f0a89e"}
              borderRadius={"5px"}
              padding={"5px"}
              boxShadow={"0px 0px 5px 0px #e1e3e3"}
              borderColor={"#f0a89e"}

              >
                <MenuItem _hover={{ bg: '#FDC0C0', borderRadius: "5px"}} bgColor={"#f0a89e"} padding={"10px"} onClick={() => setMenuLabel("Week 0")}>Week 0</MenuItem>
                <MenuItem _hover={{ bg: '#FDC0C0', borderRadius: "5px"}} bgColor={"#f0a89e"} padding={"10px"} onClick={() => setMenuLabel("Week 1")}>Week 1</MenuItem>
                <MenuItem _hover={{ bg: '#FDC0C0', borderRadius: "5px"}} bgColor={"#f0a89e"} padding={"10px"} onClick={() => setMenuLabel("Week 2")}>Week 2</MenuItem>
                <MenuItem _hover={{ bg: '#FDC0C0', borderRadius: "5px"}} bgColor={"#f0a89e"} padding={"10px"} onClick={() => setMenuLabel("Week 3")}>Week 3</MenuItem>
                <MenuItem _hover={{ bg: '#FDC0C0', borderRadius: "5px"}} bgColor={"#f0a89e"} padding={"10px"} onClick={() => setMenuLabel("Week 4")}>Week 4</MenuItem>
                <MenuItem _hover={{ bg: '#FDC0C0', borderRadius: "5px" }} bgColor={"#f0a89e"} padding={"10px"} onClick={() => setMenuLabel("Week 5")}>Week 5</MenuItem>
                <MenuItem _hover={{ bg: '#FDC0C0', borderRadius: "5px" }} bgColor={"#f0a89e"} padding={"10px"} onClick={() => setMenuLabel("Week 6")}>Week 6</MenuItem>
              </MenuList>
            </Portal>  
            </Menu>
       </Box>
       <Content week={menuLabel}/>
    </Stack>
  )
};


export default CAPEPage;
