import React from 'react'
import pic from "/src/assets/ElisaCarrillo.png"
import { Box, Image, Text } from '@chakra-ui/react'

const Chats = () => {
  return (
    <Box
      paddingTop={"25px"}
      pb={"25px"}
      pl={"15px"}
      pr={"20px"}
      borderBottom={"0.5px solid #d5d9db"}
      display={"flex"}
      alignItems={"center"}
      gap={"10px"}
      color={"black"}
      cursor={"pointer"}
      _hover={{backgroundColor: "lightgray"}}
    >
      <Image
        width={"81px"}
        height={"81px"}
        borderRadius={"25%"}
        boxShadow={"0px 5px 20px 5px #d5d9db"}
        objectFit={"cover"}
        src={pic}
      />
      <Box>
        <Text 
        fontSize={"18px"}
        fontWeight={"500"}
        >Elisa</Text>
        <Text
        fontSize={"14px"}
        color={"black"}
        >Sure. What do you wanna discus?</Text>
      </Box>
    </Box>
  )
}

export default Chats
