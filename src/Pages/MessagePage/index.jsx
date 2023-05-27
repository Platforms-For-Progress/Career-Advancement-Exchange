import React, {useState} from 'react'
import { Box, Input, Stack, Text, Button, useStatStyles } from '@chakra-ui/react'
import Chat from '../../Components/Chat/Chat'
import Chats from '../../Components/Chat/Chats'



const MessagePage = () => {
  const [newMessage, setNewMessage] = useState(false);  

  return (
    <Stack direction={"row"} w={"100vw"} bg={"#d5d9db"} spacing={0}>
        <Box 
            flex={1} 
            bg={'white'}
            boxShadow={"2xl"}
            overflow={"scroll"}
        >
        {/* navbar with "message" label and new chat button */}
        <Box
        display={"flex"}
        alignItems={"center"}
        bg={'white'}
        height={"80px"}
        padding={"10px"}
        justifyContent={"space-between"}
        color={"black"}
        borderBottom={"0.5px solid #d5d9db"}
        >
            <Text fontSize={"20px"}> Messages</Text>
            <Button
            height={"40px"}
            width={"35px"}
            borderRadius={"100%"}
            border={"0.5px solid orange"}
            bg={"orange"}
            boxShadow={"0px 8px 10px 2px #d5d9db"}
            fontSize={"larger"}
            _hover={"none"}
            _focusVisible={"none"}
            onClick={() => setNewMessage(!newMessage)}
            >+</Button>
        </Box>
        {newMessage ? 
        <Box borderBottom={"0.5px solid #d5d9db"}>
            <Text fontSize={"25px"} pl={"15px"}>Start a new message</Text>
            <Input 
            placeholder='Type Name'
            border={"none"}
            _focusVisible={false}
            />
        </Box>
        :
        <></>
        }

        <Chats/>   
        </Box>

        <Box flex={2}>
        <Chat/>
        </Box>
    </Stack>
  )
}

export default MessagePage
