import { Center, Flex, HStack, Stack } from '@chakra-ui/react';
import React from 'react';
import QuestionAdapter from './Question';

const StepTemplate = ({ questions, userResponses, handleResponseChange }) => {
  return (
    <Stack direction="column" spacing={4} alignItems="flex-start" m={4} p={4}>
      {questions.map((question, index) => (
        <QuestionAdapter
          key={index}
          question={question}
          userResponses={userResponses}
          handleResponseChange={handleResponseChange}
        />
      ))}
    </Stack>
  );
};

export default StepTemplate;
