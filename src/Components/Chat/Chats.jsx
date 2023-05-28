import React, {useState, useEffect, useContext} from 'react'
import pic from "/src/assets/ElisaCarrillo.png"
import { Box, Image, Text } from '@chakra-ui/react'
import { UserContext } from '../../utils/User'
import { doc, onSnapshot } from 'firebase/firestore'
import { firestore } from '../../firebase'

const Chats = () => {
  const [chats, setChats] = useState([]);
  const {user, userInfo, loading, error} = useContext(UserContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(firestore, "userChats", userInfo.name), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      }
    };
    userInfo.name && getChats();
  }, []) 
  console.log(Object.entries(chats))
  return (
    <Box>
    {Object.entries(chats)?.map((chat) => (
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
      key={chat[0]}
    >
      <Image
        width={"81px"}
        height={"81px"}
        borderRadius={"25%"}
        boxShadow={"0px 5px 20px 5px #d5d9db"}
        objectFit={"cover"}
      />
      <Box>
        <Text 
        fontSize={"18px"}
        fontWeight={"500"}
        >{chat[1].userInfo.name}</Text>
        <Text
        fontSize={"14px"}
        color={"black"}
        >Sure. What do you wanna discus?</Text>
      </Box>
      </Box>
    ))}
    </Box>
  )
}

export default Chats
