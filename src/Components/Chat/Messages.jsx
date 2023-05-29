import React, {useContext, useEffect, useState}from 'react'
import { Box, Text } from '@chakra-ui/react'
import Message from './Message'
import { ChatContext } from './ChatContext'
import { onSnapshot, doc } from 'firebase/firestore'
import { firestore } from '../../firebase'

const Messages = () => {
  const [messages, setMessages] = useState([])
  const { data } = useContext(ChatContext)

  useEffect(() => {
    const unsub = onSnapshot(doc(firestore, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    });
    return () => {
      unsub()
    }
  }, [data.chatId])
  return (
    <Box
    bg={"lightgray"}
    padding={"10px"}
    height={"calc(100%)"}
    overflow={"scroll"}

    >
    {messages.map(m => (
      <Message message={m.text} user={m} key={m.id}/>
    ))}
    </Box>
  )
}

export default Messages
