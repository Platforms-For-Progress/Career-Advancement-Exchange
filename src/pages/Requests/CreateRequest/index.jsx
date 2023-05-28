import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Stack,
  Input,
  Editable,
  EditablePreview,
  EditableInput,
  EditableTextarea,
  Textarea,
  useColorModeValue,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Center
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { setRequest } from '../../../firebase/firestore';
import { setDoc, doc, updateDoc } from 'firebase/firestore';
import { auth, firestore } from '../../../firebase';
import { useUser } from '../../../utils/User';

import StepTemplate from './StepTemplate';
import introQuestions from './survey/intro_questions.json';
import contentQuestions from './survey/content_questions.json';
import designQuestions from './survey/design_questions.json';
import endQuestions from './survey/end_questions.json';
import survey from './survey/survey.json';

const steps = [
  {
    label: 'Introduction',
    description: 'Tell us about yourself',
    content: <StepTemplate questions={introQuestions} />
  },
  {
    label: 'Content',
    description: "What's on your website?",
    content: <StepTemplate questions={contentQuestions} />
  },
  {
    label: 'Design',
    description: 'Tell us what you envision',
    content: <StepTemplate questions={designQuestions} />
  },
  {
    label: 'Wrapping Up',
    description: 'Almost there!',
    content: <StepTemplate questions={endQuestions} />
  }
];

const CreateRequest = () => {
  const navigate = useNavigate();
  const { user, userInfo, loading, error } = useUser();
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length
  });
  const [userResponses, setUserResponses] = useState(
    survey
      .flatMap((step) => step.questions)
      .reduce((acc, question) => {
        acc[question] = '';
        return acc;
      }, {})
  );
  useEffect(() => {
    if (userInfo?.request?.survey_data) {
      setUserResponses((previous) =>
        survey
          .flatMap((step) => step.questions)
          .reduce((acc, question) => {
            acc[question] = userInfo.request.survey_data[question] ?? previous[question];
            return acc;
          }, {})
      );
    }
  }, [userInfo]);
  const handleResponseChange = (questionIndex, event) => {
    setUserResponses((previous) => {
      return {
        ...previous,
        [survey[activeStep].questions[questionIndex]]: event.target.value
      };
    });
  };

  const handleSubmit = async () => {
    try {
      await updateDoc(doc(firestore, 'users', user.uid), {
        'request.survey_data': Object.entries(userResponses).map(([prompt, response]) => ({
          prompt,
          response
        })),
        status: 'pending'
      });
      navigate('/request');
    } catch (error) {
      alert('There was an error submitting your request, please try again');
      console.log(error);
    }
  };

  const handleSave = async () => {
    try {
      await updateDoc(doc(firestore, 'users', user.uid), {
        'request.survey_data': Object.entries(userResponses).map(([prompt, response]) => ({
          prompt,
          response
        })),
        status: 'pending'
      });
    } catch (error) {
      alert('There was an error saving your request, please try again');
      console.log(error);
    }
  };

  return (
    <Box bg="white" minH="95vh" p={4}>
      <Stepper size="lg" index={activeStep} colorScheme="brand" mx={10}>
        {steps.map(({ label, description, content }, index) => (
          <Step key={index} onClick={() => setActiveStep(index)}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
            <Box flexShrink="0">
              <StepTitle>{label}</StepTitle>
              <StepDescription>{description ?? ''}</StepDescription>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        {steps[activeStep].content}
        {/* <Stack align={'center'}>
          {survey[activeStep].questions.map((question, index) => (
            <div key={index}>
              <Text fontSize={'2xl'} fontWeight="bold" color="black" textAlign="center" mt="10vh">
                {question}
              </Text>
              <Textarea
                size="lg"
                onChange={(response) => handleResponseChange(index, response)}
                value={userResponses[[survey[activeStep].questions[index]]]}
              />
            </div>
          ))}
        </Stack> */}
        <Flex direction={'column'}>
          <Center flex flexDir="row" justifyContent={'space-around'}>
            <Button
              onClick={() => setActiveStep(activeStep - 1)}
              w={'full'}
              ml={5}
              isDisabled={activeStep === 0}>
              Previous
            </Button>
            <Button
              onClick={() => setActiveStep(activeStep + 1)}
              w={'full'}
              ml={5}
              isDisabled={activeStep === survey.length - 1}>
              Next
            </Button>
          </Center>
          {activeStep === survey.length - 1 ? (
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, brand.300, brand.400)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, brand.400, brand.300)'
              }}
              onClick={handleSubmit}>
              Submit Request
            </Button>
          ) : (
            <>
              <Button
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, brand.300, brand.400)"
                color={'white'}
                _hover={{
                  bgGradient: 'linear(to-r, brand.400, brand.300)'
                }}
                onClick={handleSave}>
                Save responses
              </Button>
            </>
          )}
        </Flex>
        <Center>
          <Button colorScheme="orange" as={RouterLink} to="/profile">
            Back to Profile
          </Button>
        </Center>
      </Stack>
    </Box>
  );
};
export default CreateRequest;
