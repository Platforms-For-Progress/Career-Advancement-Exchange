import { FormEvent, ChangeEvent, useState } from 'react';
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { setRequest } from '../../firebase/firestore';

export default function Simple() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState(
    'initial'
  );
  const [error, setError] = useState(false);

  return (
    <Flex
      
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('#f9f6e8', 'gray.800')}>
      <Container
        maxW={'lg'}
        bg={useColorModeValue('brand.200', 'whiteAlpha.100')}
        boxShadow={'xl'}
        rounded={'lg'}
        m={4}
        p={6}
        direction={'column'}>
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={5}>
          Subscribe to our Newsletter
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
          onSubmit={ (e) => {
            e.preventDefault();
            console.log("submitting")
            setState('submitting');
            setRequest("subscribed" , email, {
                email: email,
                subscribed: true,
                createdAt: new Date(),

            }).then(() => {
                console.log("success");
                setState('success');
                return;
            }).catch((error) => {
                console.log(error);
                setError(true);
                setState('initial');
                return;
            });


            
            // remove this code and implement your submit logic right here
            // setTimeout(() => {
            //   if (email === 'fail@example.com') {
            //     setError(true);
            //     setState('initial');
            //     return;
            //   }

            //   setState('success');
            // }, 1000);
          }}>
          <FormControl>
            <Input
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={useColorModeValue('gray.300', 'gray.700')}
              id={'email'}
              type={'email'}
              required
              placeholder={'Your Email'}
              aria-label={'Your Email'}
              value={email}
              disabled={state !== 'initial'}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </FormControl>
          <FormControl w={{ base: '100%', md: '40%' }}>
            <Button
            //   colorScheme={state === 'success' ? 'orange' : 'yellow'}
              bg={state === 'success' ? 'orange.300' : 'orange.300'}
              isLoading={state === 'submitting'}
              w="100%"
              type={state === 'success' ? 'button' : 'submit'}>
              {state === 'success' ? <CheckIcon /> : 'Submit'}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={'center'}
          color={error ? 'red.500' : 'gray.500'}>
          {error
            ? 'Oh no an error occured! 😢 Please try again later.'
            : "Welcome to our community 🎉 "}
        </Text>
      </Container>
    </Flex>
  );
}