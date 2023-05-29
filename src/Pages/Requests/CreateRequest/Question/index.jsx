import React from 'react';
import { Box, FormControl, FormLabel, Image, Radio, Stack, Text } from '@chakra-ui/react';
import FreeResponse from './FreeResponse';
import SelectMultiple from './SelectMultiple';
import SelectOne from './SelectOne';
import SelectOneImage from './SelectOneImage';
import SelectMultipleImage from './SelectMultipleImage';

const QuestionAdapter = ({ question, userResponses, setUserResponses }) => {
  const commonProps = {
    ...question,
    userResponses,
    setUserResponses
  };
  switch (question.type) {
    case 'free-response':
      return <FreeResponse {...commonProps} />;
    case 'select-one':
      return <SelectOne {...commonProps} />;
    case 'select-multiple':
      return <SelectMultiple {...commonProps} />;
    case 'select-one-image':
      return <SelectOneImage {...commonProps} />;
    case 'select-multiple-image':
      return <SelectMultipleImage {...commonProps} />;
    default:
      return null;
  }
};

export default QuestionAdapter;
