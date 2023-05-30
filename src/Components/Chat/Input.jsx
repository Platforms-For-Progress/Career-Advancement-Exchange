import React, {useContext, useState} from 'react'
import { UserContext } from '../../utils/User'
import { ChatContext } from './ChatContext'
import { Stack, Box, Textarea, Image, Button} from '@chakra-ui/react'
import { Timestamp, arrayUnion, serverTimestamp, updateDoc, doc } from 'firebase/firestore'
import { firestore } from '../../firebase'
import {v4 as uuid} from "uuid"

const MessageInput = () => {
  const [text, setText] = useState("")
  const {userInfo} = useContext(UserContext)
  const {data} = useContext(ChatContext)

  const handleSend = async() => {
    await updateDoc(doc(firestore, "chats", data.chatId), {
      messages: arrayUnion({
        id: uuid(),
        text,
        sendId: userInfo.name,
        date: Timestamp.now(),
      })
    });

    await updateDoc(doc(firestore, "userChats", userInfo.name), {
      [data.chatId + ".lastMessage"]: {
        text
      }, 
      [data.chatId + ".date"]: serverTimestamp(),
    });
    
    await updateDoc(doc(firestore, "userChats", data.user.name), {
      [data.chatId + ".lastMessage"]: {
        text
      }, 
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("")
  }

  return (
    <Stack direction={"row"} spacing={0} alignItems={"flex-end"}>
      <Box width={"100%"}>
        <Textarea 
          placeholder='Write message here...' 
          resize={"none"}
          height={"14vh"}
          width={"100%"}
          border={"none"}
          _focusVisible={false}
          _placeholder={{color: "black"}}
          onChange={(e) => setText(e.target.value)}
          value={text}
          />
      </Box>
      <Box flexDirection={"row-reverse"} pr={"10px"} pb={"10px"}>
        <Button
        bg={"#A4D5F1"}
        color={'black'}
        onClick={handleSend}
        >
          Send
        </Button>
      </Box>
    </Stack>
  )
}

export default MessageInput
