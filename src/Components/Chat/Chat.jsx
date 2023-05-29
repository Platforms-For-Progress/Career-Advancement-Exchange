import React, {useContext}from 'react'
import { Box, Stack, Text, Image, Avatar } from '@chakra-ui/react'
import Messages from './Messages'
import MessageInput from './Input'
import { ChatContext } from './ChatContext'



const Chat = () => {
  const {data} = useContext(ChatContext)
  return (
    <Stack direction={"column"} spacing={0}>
      <Box bg={'white'} h="80px" display={'flex'} alignItems={"center"} padding="10px">
        <Avatar
        name={data.user?.name}
        src={data.user?.photoURL}
        width={"46px"}
        height={"46px"}
        borderRadius={"25%"}
        boxShadow={"0px 5px 20px 5px #d5d9db"}
        objectFit={"cover"}
        />
        <Text paddingLeft={"15px"} fontSize={'larger'} fontWeight={"500"}>{data.user.name}</Text>
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
