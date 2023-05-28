import { Flex, HStack, Stack } from '@chakra-ui/react';
import React from 'react';
import FreeResponseQuestion from './Question/FreeResponse';
import QuestionAdapter from './Question';

const StepTemplate = ({ questions }) => {
  return (
    <Stack w="90vw">
      {questions.map((question, index) => (
        <QuestionAdapter key={index} question={question} />
      ))}
    </Stack>
  );
};

export default StepTemplate;
