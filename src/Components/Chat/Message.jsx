import { Box, Text, Avatar} from '@chakra-ui/react'
import React, {useContext, useState} from 'react'
import { UserContext } from '../../utils/User'

const Message = ({message, user, img}) => {
  const {userInfo} = useContext(UserContext)  
  return (
    <Box>
        <Box
        display={"flex"}
        gap={"20px"}
        marginBottom={"20px"}
        flexDirection={ (user.sendId !== userInfo.name) ? "none" : "row-reverse"}
        >
            <Avatar
            name={ (user.sendId !== userInfo.name) ? user?.sendId : userInfo?.name}
            src={user?.photoURL}
            width={"40px"}
            height={"40px"}
            borderRadius={"25%"}
            boxShadow={"0px 5px 20px 5px #d5d9db"}
            objectFit={"cover"}
            />
            <Box 
                display={"flex"}
                flexDir={"column"}
                gap={"10px"}
                maxWidth={"80%"}
            >
                <Text
                    bg={ (user.sendId !== userInfo.name) ? "#dcdfe3" : "#f2981b"}
                    padding={"10px"}
                    borderRadius={ (user.sendId !== userInfo.name) ? "10px 10px 10px 0px" : "10px 10px 0px 10px"}
                    maxWidth={"max-content"}
                >
                {message}
                </Text>
            </Box>
        </Box>

    </Box>
  )
}

export default Message
