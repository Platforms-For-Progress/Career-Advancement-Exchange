import { Box, FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import { useState } from 'react';

function FreeResponseQuestion({ prompt, label, userResponses, handleResponseChange }) {
  return (
    <Box m={4}>
      <FormControl>
        <FormLabel>{prompt}</FormLabel>
        <Textarea
          maxW={'500px'}
          placeholder="Type your response here..."
          value={userResponses[label]}
          onChange={(e) => handleResponseChange(label, e.target.value)}
        />
      </FormControl>
    </Box>
  );
}

export default FreeResponseQuestion;
