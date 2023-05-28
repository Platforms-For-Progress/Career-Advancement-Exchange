import React from 'react';
import { Box, FormControl, FormLabel, RadioGroup, Radio, Stack } from '@chakra-ui/react';

function MultipleChoiceQuestion({ prompt, options }) {
  return (
    <Box m={4}>
      <FormControl>
        <FormLabel>{prompt}</FormLabel>
        <RadioGroup colorScheme="blue">
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

export default MultipleChoiceQuestion;
