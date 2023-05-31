import { Box, FormControl, FormLabel, Image, Flex, Text, Checkbox, Button } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useState } from 'react';

function SelectMultipleImage({ prompt, options, label, userResponses, handleResponseChange }) {
  return (
    <Box m={4}>
      <FormControl>
        <FormLabel>{prompt}</FormLabel>
        <Flex wrap="wrap">
          {options.map((choice, index) => (
            <Box key={index} position="relative">
              <Checkbox
                value={choice.label}
                isChecked={userResponses[label] && userResponses[label].includes(choice.label)}
                onChange={(e) =>
                  handleResponseChange(label, e.target.value, e.target.checked ? 'add' : 'remove')
                }
                display="none"
              />
              <Box
                cursor="pointer"
                mx="10px"
                onClick={() =>
                  handleResponseChange(
                    label,
                    choice.label,
                    userResponses[label] && userResponses[label].includes(choice.label)
                      ? 'remove'
                      : 'add'
                  )
                }>
                <Text>{choice.label}</Text>
                <Image
                  outline="1.5px solid black"
                  src={choice.image}
                  alt={choice.label}
                  height="200px"
                  opacity={
                    userResponses[label] && userResponses[label].includes(choice.label) ? 0.5 : 1
                  }
                />
                {userResponses[label] && userResponses[label].includes(choice.label) && (
                  <CheckIcon
                    position="absolute"
                    boxSize={10}
                    right={5}
                    bottom={5}
                    color="green.500"
                  />
                )}
              </Box>
            </Box>
          ))}
        </Flex>
      </FormControl>
    </Box>
  );
}

export default SelectMultipleImage;
