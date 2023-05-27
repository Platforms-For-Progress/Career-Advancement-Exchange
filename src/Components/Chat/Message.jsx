import { Box, Image, Text } from '@chakra-ui/react'
import React, {useState} from 'react'
import pic from "/src/assets/ElisaCarrillo.png"

const Message = ({message, side, img}) => {
  return (
    <Box>
        {side ? 
            <Box
            display={"flex"}
            gap={"20px"}
            marginBottom={"20px"}
            >
                <Image
                width={"40px"}
                height={"40px"}
                borderRadius={"25%"}
                objectFit={"cover"}
                src={img}
                />
                <Box 
                    display={"flex"}
                    flexDir={"column"}
                    gap={"10px"}
                    maxWidth={"80%"}
                >
                    <Text
                        bg={"#dcdfe3"}
                        padding={"10px"}
                        borderRadius={"10px 10px 10px 0px"}
                        maxWidth={"max-content"}
                    >
                    {message}
                    </Text>
                </Box>
            </Box>
        : 
            <Box
            display={"flex"}
            gap={"20px"}
            marginBottom={"20px"}
            flexDirection={"row-reverse"}
            >
                <Image
                width={"40px"}
                height={"40px"}
                borderRadius={"25%"}
                objectFit={"cover"}
                src={pic}
                />
                <Box 
                    display={"flex"}
                    flexDir={"column"}
                    gap={"10px"}
                    maxWidth={"80%"}
                >
                    <Text
                        bg={"#f2981b"}
                        padding={"10px"}
                        borderRadius={"10px 10px 0px 10px"}
                        maxWidth={"max-content"}
                    >
                    {message}
                    </Text>
                </Box>
            </Box>
        }
    </Box>
  )
}

export default Message
