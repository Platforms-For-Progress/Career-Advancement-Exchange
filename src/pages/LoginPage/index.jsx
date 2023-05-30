import { useState, useEffect } from 'react';
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Center,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { auth } from '../../firebase';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);

  useEffect(() => {
    if (user || userGoogle) {
      navigate('/profile');
    }
  }, [user, userGoogle]);

  return (
    <Flex p={8} flex={1} align={'center'} justify={'center'}>
      <Stack spacing={4} w={'full'} maxW={'md'}>
        <Heading fontSize={'2xl'}>Sign in to your account</Heading>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Stack spacing={6}>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            align={'start'}
            justify={'space-between'}>
            <Checkbox onChange={() => setRememberMe((rememberMe) => !rememberMe)}>
              Remember me
            </Checkbox>
            <Link as={RouterLink} to={'/forgot-password'} color={'brand.500'}>
              Forgot password?
            </Link>
          </Stack>
          <Button
            colorScheme={'brand'}
            variant={'solid'}
            isLoading={loading}
            onClick={async () => await signInWithEmailAndPassword(email, password)}>
            Sign in
          </Button>
          <Button
            w={'full'}
            maxW={'md'}
            variant={'outline'}
            leftIcon={<FcGoogle />}
            isLoading={loadingGoogle}
            onClick={async () => await signInWithGoogle()}>
            <Center>
              <Text>Sign in with Google</Text>
            </Center>
          </Button>
        </Stack>
        {(error || errorGoogle) && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Error signing in!</AlertTitle>
            <AlertDescription>Please try again.</AlertDescription>
          </Alert>
        )}
      </Stack>
    </Flex>
  );
}
