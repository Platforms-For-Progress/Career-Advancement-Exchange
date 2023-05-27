import React from 'react'
import { Box, Stack, Text, Image} from '@chakra-ui/react'
import Messages from './Messages'
import MessageInput from './Input'
import pic from "/src/assets/ElisaCarrillo.png"



const Chat = () => {
  return (
    <Stack direction={"column"} spacing={0}>
      <Box bg={'white'} h="80px" display={'flex'} alignItems={"center"} padding="10px">
        <Image 
          src={pic}
          w={"46px"}  
          h={"46px"}
          objectFit={"cover"}
          borderRadius={"25%"}
          boxShadow={"0px 5px 20px 5px #d5d9db"}
        />
        <Text paddingLeft={"15px"} fontSize={'larger'} fontWeight={"500"}>Elisa</Text>
      </Box>

      <Box bg={'white'} height={"70vh"}>
        <Messages/>
      </Box>

      <Stack padding={"10px"}>
        <Box bg={'white'} height={"calc(100% - 50px)"} borderRadius={"10"}>
          <MessageInput/>
        </Box>
      </Stack>
    </Stack>
  )
}

export default Chat
