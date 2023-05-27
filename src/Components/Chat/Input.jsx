import { Stack, Box, Textarea, Image, Button} from '@chakra-ui/react'
import React from 'react'

const MessageInput = () => {
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
          />
      </Box>
      <Box flexDirection={"row-reverse"} pr={"10px"} pb={"10px"}>
        <Button
        bg={"#A4D5F1"}
        color={'black'}
        >
          Send
        </Button>
      </Box>
    </Stack>
  )
}

export default MessageInput
