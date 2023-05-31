import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Stack,
  Checkbox,
  CheckboxGroup,
  Center
} from '@chakra-ui/react';

function SelectMultiple({ prompt, label, options, userResponses, handleResponseChange }) {
  return (
    <Box>
      <FormControl>
        <FormLabel>{prompt}</FormLabel>
        <CheckboxGroup colorScheme="brand">
          <Stack direction="column">
            {options.map((option, index) => (
              <Checkbox
                key={index}
                value={option}
                isChecked={userResponses[label] && userResponses[label].includes(option)}
                onChange={(e) =>
                  handleResponseChange(label, e.target.value, e.target.checked ? 'add' : 'remove')
                }>
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
