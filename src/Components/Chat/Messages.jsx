import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import Message from './Message'
import pic from "/src/assets/ElisaCarrillo.png"
import pic2 from "/src/assets/jacobshalabi.jpeg"

const Messages = () => {
  return (
    <Box
    bg={"lightgray"}
    padding={"10px"}
    height={"calc(100%)"}
    overflow={"scroll"}

    >
      <Message message={"Hello"} img={pic} side={false}/>
      <Message message={"Hello"} img={pic2} side={true}/>
      <Message message={"I want to talk about my current page"} img={pic} side={false}/>
      <Message message={"Sure. What do you wanna discus?"} img={pic2} side={true}/>
    </Box>
  )
}

export default Messages
