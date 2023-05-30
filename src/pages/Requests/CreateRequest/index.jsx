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

const steps = [
  {
    label: 'Introduction',
    description: 'Tell us about yourself',
    questions: introQuestions
  },
  {
    label: 'Content',
    description: "What's on your website?",
    questions: contentQuestions
  },
  {
    label: 'Design',
    description: 'What do you envision?',
    questions: designQuestions
  },
  {
    label: 'Wrapping Up',
    description: 'Almost there!',
    questions: endQuestions
  }
];

const CreateRequest = () => {
  const navigate = useNavigate();
  const { user, userInfo, loading, error } = useUser();

  const [submitLoading, setSubmitLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length
  });
  const [userResponses, setUserResponses] = useState({});

  const handleResponseChange = (questionLabel, response, action) => {
    if (action == 'add') {
      setUserResponses((previous) => {
        const updatedResponses = { ...previous };
        if (!updatedResponses[questionLabel]) {
          updatedResponses[questionLabel] = [];
        }
        updatedResponses[questionLabel] = [...updatedResponses[questionLabel], response];
        return updatedResponses;
      });
    } else if (action == 'remove') {
      setUserResponses((previous) => {
        return {
          ...previous,
          [questionLabel]: previous[questionLabel].filter((item) => item != response)
        };
      });
    } else {
      setUserResponses((previous) => {
        return {
          ...previous,
          [questionLabel]: response
        };
      });
    }
  };

  useEffect(() => {
    if (userInfo?.request?.survey_data) {
      setUserResponses(userInfo.request.survey_data);
    }
  }, [userInfo]);

  const saveResponses = async () => {
    await updateDoc(doc(firestore, 'users', user.uid), {
      'request.survey_data': userResponses,
      status: 'pending'
    });
  };

  const handleSubmit = async () => {
    setSubmitLoading(true);
    try {
      await saveResponses();
      navigate('/request');
    } catch (error) {
      alert('There was an error submitting your request, please try again');
      console.log(error);
    }
    setSubmitLoading(false);
  };

  const handleSave = async () => {
    setSaveLoading(true);
    try {
      await saveResponses();
    } catch (error) {
      alert('There was an error saving your request, please try again');
      console.log(error);
    }
    setSaveLoading(false);
  };

  return (
    <Box bg="white" minH="95vh" p={4}>
      <Stepper size="lg" index={activeStep} colorScheme="brand" mx={10} display={{base: "none"}}>
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
        <StepTemplate
          questions={steps[activeStep].questions}
          userResponses={userResponses}
          handleResponseChange={handleResponseChange}
        />
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
              isDisabled={activeStep === steps.length - 1}>
              Next
            </Button>
          </Center>
          {activeStep === steps.length - 1 ? (
            <Stack>
              <Button
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, brand.300, brand.400)"
                color={'white'}
                _hover={{
                  bgGradient: 'linear(to-r, brand.400, brand.300)'
                }}
                onClick={handleSave}
                loadingText="Saving"
                isLoading={saveLoading}>
                Save responses
              </Button>
              <Button
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, brand.300, brand.400)"
                color={'white'}
                _hover={{
                  bgGradient: 'linear(to-r, brand.400, brand.300)'
                }}
                onClick={handleSubmit}
                loadingText="Submitting"
                isLoading={submitLoading}>
                Submit Request
              </Button>
            </Stack>
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
                onClick={handleSave}
                loadingText="Saving"
                isLoading={saveLoading}>
                Save responses
              </Button>
            </>
          )}
        </Flex>
        <Center>
          <Button colorScheme="brand" as={RouterLink} to="/profile">
            Back to Profile
          </Button>
          {/* <Button
            onClick={() => {
              console.log(userResponses);
            }}>
            Test
          </Button> */}
        </Center>
      </Stack>
    </Box>
  );
};
export default CreateRequest;
