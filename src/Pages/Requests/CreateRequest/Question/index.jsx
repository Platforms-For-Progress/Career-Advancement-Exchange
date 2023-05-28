import React from 'react';
import { Box, FormControl, FormLabel, Image, Radio, Stack, Text } from '@chakra-ui/react';
import FreeResponse from './FreeResponse';
import SelectMultiple from './SelectMultiple';
import SelectOne from './SelectOne';
import SelectOneImage from './SelectOneImage';
import SelectMultipleImage from './SelectMultipleImage';

const QuestionAdapter = ({ question }) => {
  switch (question.type) {
    case 'free-response':
      return <FreeResponse {...question} />;
    case 'select-one':
      return <SelectOne {...question} />;
    case 'select-multiple':
      return <SelectMultiple {...question} />;
    case 'select-one-image':
      return <SelectOneImage {...question} />;
    case 'select-multiple-image':
      return <SelectMultipleImage {...question} />;
    default:
      return null;
  }
};

export default QuestionAdapter;
