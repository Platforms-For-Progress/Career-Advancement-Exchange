import { Box, FormControl, FormLabel, Textarea } from '@chakra-ui/react';

function FreeResponseQuestion({ prompt }) {
  return (
    <Box m={4}>
      <FormControl>
        <FormLabel>{prompt}</FormLabel>
        <Textarea maxW={'500px'} placeholder="Type your response here..." />
      </FormControl>
    </Box>
  );
}

export default FreeResponseQuestion;
