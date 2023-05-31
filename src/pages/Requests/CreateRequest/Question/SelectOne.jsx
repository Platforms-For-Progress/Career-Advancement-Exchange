import React from 'react';
import { Box, FormControl, FormLabel, RadioGroup, Radio, Stack } from '@chakra-ui/react';

function SelectOne({ prompt, label, options, userResponses, handleResponseChange }) {
  return (
    <Box m={4}>
      <FormControl>
        <FormLabel>{prompt}</FormLabel>
        <RadioGroup
          colorScheme="brand"
          onChange={(value) => handleResponseChange(label, value)}
          value={userResponses[label]}>
          <Stack direction="column">
            {options.map((choice, index) => (
              <Radio key={index} value={choice}>
                {choice}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default SelectOne;
