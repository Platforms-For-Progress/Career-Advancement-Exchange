import {
  Box,
  FormControl,
  FormLabel,
  Image,
  Flex,
  Text,
  Checkbox,
  Button,
  RadioGroup,
  Radio
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useState } from 'react';

function SelectOneImage({ prompt, options, label, userResponses, handleResponseChange }) {
  return (
    <Box m={4}>
      <FormControl>
        <FormLabel>{prompt}</FormLabel>
        <Flex wrap="wrap">
          {options.map((choice, index) => (
            <Box key={index} position="relative">
              <Box
                cursor="pointer"
                mx="10px"
                onClick={() => handleResponseChange(label, choice.label)}>
                <Text>{choice.label}</Text>
                <Image
                  outline="1.5px solid black"
                  src={choice.image}
                  alt={choice.label}
                  height="200px"
                  opacity={userResponses[label] === choice.label ? 0.5 : 1}
                />
                {userResponses[label] === choice.label && (
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

export default SelectOneImage;
