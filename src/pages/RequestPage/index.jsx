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
 
    

    
  } from '@chakra-ui/react';
import { useState } from 'react';
import {setRequest } from '../../firebase/firestore'
import { set } from 'firebase/database';
import { auth } from '../../firebase';

import { useUser } from '../../utils/User';
const steps = [
    {
        title: 'First',
        questions: ['What do you do for work/study? What do you enjoy most about it?', 'What are your hobbies/interests? How did you get interested in them?'],

      
    },
    {
        title: 'Second',
        questions: ['What is your favorite book/movie/TV show and why?', "What's something you've always wanted to try but haven't yet?", "What are your values? What's important to you in life?"],
    },
    {
        title: 'Third',
        questions: ["What's something you're passionate about?", "What's a challenge you've faced in your life and how did you overcome it?", "What's something that makes you happy?"],
    },
]
const createRequest =() => {
    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
      })
    const [userResponses, setUserResponses] = useState([]);
    const [userResponse, setUserResponse] = useState('');
    const { user, userInfo, loading, error } = useUser();
    console.log(userResponses);
    const handleResponseChange = (questionIndex, event) => {
        const newResponses = [...userResponses];
        newResponses[activeStep] = {
          ...newResponses[activeStep],
          [questionIndex]: event.target.value,
        };
        setUserResponses(newResponses);
      };
    
      const handleSubmit = () => {
        console.log(userResponses);
        setRequest("requests", user.uid, userResponses).then(() => {
            console.log('done');
            }
        ).catch((error) => {
            console.log(error);
        });

      };

    return (
        
        <Box
        bg="white"
        minH="95vh"
        p={4}
        >
            <Stepper size='lg' index={activeStep} colorScheme='brand'>
                {steps.map((step, index) => (
                    <Step key={index} onClick={() => setActiveStep(index)}>
                    <StepIndicator>
                        <StepStatus
                        complete={<StepIcon />}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                        />
                    </StepIndicator>

                    <Box flexShrink='0'>
                        {/* <StepTitle>{step.title}</StepTitle> */}
                        {/* <StepDescription>{step.description}</StepDescription> */}
                    </Box>

                    <StepSeparator />
                    </Step>
                ))}
                </Stepper>  
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
            { steps[activeStep].questions.map((question, index) => (
                <>
                <Text fontSize={'2xl'} fontWeight="bold" color="black" textAlign="center" mt="10vh">{question}</Text>
                <Textarea  size="lg" onChange={(response)=>handleResponseChange(index, response)}  value={
        userResponses[activeStep] && userResponses[activeStep][index] ? 
        userResponses[activeStep][index] : 
        ''
    } />
                </>
            ))}
            {/* {activeStep} */}
        {/* <Text fontSize={'2xl'} fontWeight="bold" color="black" textAlign="center" mt="10vh">What do you do for work/study? What do you enjoy most about it?</Text> */}

        
        </Stack>
        { activeStep === steps.length - 1 ? (
            <Button
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, brand.300, brand.400)"
                color={'white'}
                _hover={{
                bgGradient: 'linear(to-r, brand.400, brand.300)',
                }}
                onClick={handleSubmit}
            >
                Submit Request
            </Button>
        ) : (
            <Button onClick={() => setActiveStep(activeStep + 1)}>Next</Button>
            ) }
        
        </Stack>

        
        </Box>
    );
}
export default createRequest;