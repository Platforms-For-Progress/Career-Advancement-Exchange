import React, {useState, useEffect, useContext} from 'react'
import { Avatar, Box, Image, Text } from '@chakra-ui/react'
import { UserContext } from '../../utils/User'
import { ChatContext } from './ChatContext'
import { doc, onSnapshot } from 'firebase/firestore'
import { firestore } from '../../firebase'

const Chats = () => {

  const [chats, setChats] = useState([]);
  const {user, userInfo} = useContext(UserContext);

  {/* dispatch function from useReducer which re-renders the page when a new chat group is selected */}
  const {dispatch} = useContext(ChatContext)

  {/* useEffect to get chats for the current user */}
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(firestore, "userChats", userInfo.name), (doc) => {
        if (doc.exists()) {
          setChats(doc.data());
        }
      });
      return () => {
        unsub();
      };
    };
    (user && userInfo) && getChats();
  }, [userInfo, user]) 

  {/* handles dispatch to display content of conversations between users */}
  const handleSelect = (u) => {
    dispatch({type:"CHANGE_USER", payload:u })
  }
  return (
    <Box>
    {Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map((chat) => (
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
      onClick={() => handleSelect(chat[1].userInfo)}
    >
      <Avatar
      name={chat[1].userInfo?.name}
      src={chat[1].userInfo?.photoURL}
      width={"81px"}
      height={"81px"}
      borderRadius={"25%"}
      boxShadow={"0px 5px 20px 5px #d5d9db"}
      objectFit={"cover"}
      />
      <Box overflow={"hidden"}>
        <Text 
        fontSize={"18px"}
        fontWeight={"500"}
        >{chat[1].userInfo?.name}</Text>
        <Text
        fontSize={"14px"}
        color={"black"}
        maxHeight={"25px"}
        >{chat[1].lastMessage?.text}</Text>
      </Box>
      </Box>
    ))}
    </Box>
  )
}

export default Chats
