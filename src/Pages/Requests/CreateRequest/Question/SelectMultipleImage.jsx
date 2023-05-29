import { Box, FormControl, FormLabel, Image, Flex, Text, Checkbox, Button } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useState } from 'react';

function SelectMultipleImage({ prompt, options, label, userResponses, handleResponseChange }) {
  const [selected, setSelected] = useState([]);

  const handleSelect = (label) => {
    setSelected([...selected, label]);
  };

  const handleUnselect = (label) => {
    setSelected(selected.filter((item) => item !== label));
  };

  return (
    <Box m={4}>
      <FormControl>
        <FormLabel>{prompt}</FormLabel>
        <Flex wrap="wrap">
          {options.map((choice, index) => (
            <Box key={index} position="relative">
              <Checkbox
                value={choice.label}
                onChange={(e) =>
                  e.target.checked ? handleSelect(choice.label) : handleUnselect(choice.label)
                }
                display="none"
              />
              <Box
                onClick={() =>
                  selected.includes(choice.label)
                    ? handleUnselect(choice.label)
                    : handleSelect(choice.label)
                }
                cursor="pointer"
                mx="10px">
                <Text>{choice.label}</Text>
                <Image
                  outline="1.5px solid black"
                  src={choice.image}
                  alt={choice.label}
                  height="200px"
                  opacity={selected.includes(choice.label) ? 0.5 : 1}
                />
                {selected.includes(choice.label) && (
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
