import React, {useContext, useState} from 'react'
import { Box, Input, Stack, Text, Button, useStatStyles } from '@chakra-ui/react'
import Chat from '../../Components/Chat/Chat'
import Chats from '../../Components/Chat/Chats'
import Search from '../../Components/Chat/Search'
import { ChatContext } from '../../Components/Chat/ChatContext'



const MessagePage = () => {
  {/* state to open/close search bar */}
  const [newMessage, setNewMessage] = useState(false);                            

  return (
    <Stack direction={"row"} w={"100vw"} bg={"#d5d9db"} spacing={0}>
        <Box 
            flex={1} 
            bg={'white'}
            boxShadow={"2xl"}
            overflow={"scroll"}
        >
        {/* navbar with "message" label and "create" button */}
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
            >{newMessage ? "x" : "+"}</Button>


        </Box>
        {newMessage && 
        <Search/>
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
