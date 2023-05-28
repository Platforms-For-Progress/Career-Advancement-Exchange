import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Stack,
  Checkbox,
  CheckboxGroup
} from '@chakra-ui/react';

function SelectMultiple({ prompt, options }) {
  return (
    <Box m={4}>
      <FormControl>
        <FormLabel>{prompt}</FormLabel>
        <CheckboxGroup colorScheme="blue">
          <Stack direction="column">
            {options.map((option, index) => (
              <Checkbox key={index} value={option}>
                {option}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </FormControl>
    </Box>
  );
}

export default SelectMultiple;
