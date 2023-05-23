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

const steps = [
  {
    title: 'First',
    questions: [
      'What do you do for work/study? What do you enjoy most about it?',
      'What are your hobbies/interests? How did you get interested in them?'
    ]
  },
  {
    title: 'Second',
    questions: [
      'What is your favorite book/movie/TV show and why?',
      "What's something you've always wanted to try but haven't yet?",
      "What are your values? What's important to you in life?"
    ]
  },
  {
    title: 'Third',
    questions: [
      "What's something you're passionate about?",
      "What's a challenge you've faced in your life and how did you overcome it?",
      "What's something that makes you happy?"
    ]
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
    steps
      .flatMap((step) => step.questions)
      .reduce((acc, question) => {
        acc[question] = '';
        return acc;
      }, {})
  );
  useEffect(() => {
    if (!userInfo) {
      navigate('/signin');
    }
    if (userInfo?.request?.survey_data) {
      setUserResponses((previous) =>
        steps
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
        [steps[activeStep].questions[questionIndex]]: event.target.value
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

  return (
    <Box bg="white" minH="95vh" p={4}>
      <Stepper size="lg" index={activeStep} colorScheme="brand">
        {steps.map((step, index) => (
          <Step key={index} onClick={() => setActiveStep(index)}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              {/* <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription> */}
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          {steps[activeStep].questions.map((question, index) => (
            <div key={index}>
              <Text fontSize={'2xl'} fontWeight="bold" color="black" textAlign="center" mt="10vh">
                {question}
              </Text>
              <Textarea
                size="lg"
                onChange={(response) => handleResponseChange(index, response)}
                value={userResponses[[steps[activeStep].questions[index]]]}
              />
            </div>
          ))}
          {/* {activeStep} */}
          {/* <Text fontSize={'2xl'} fontWeight="bold" color="black" textAlign="center" mt="10vh">What do you do for work/study? What do you enjoy most about it?</Text> */}
        </Stack>
        {activeStep === steps.length - 1 ? (
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
          <Button onClick={() => setActiveStep(activeStep + 1)}>Next</Button>
        )}
      </Stack>
      <Center>
        <Button colorScheme="orange" as={RouterLink} to="/profile">
          Back to Profile
        </Button>
      </Center>
    </Box>
  );
};
export default CreateRequest;
