import { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Icon,
  createIcon,
  useColorModeValue
} from '@chakra-ui/react';
import gif from '../../assets/logo (1).gif';
import bgImg from '../../assets/bgill.png';
import girl from '../../assets/girlImage.png';
import LoadingPage from '../LoadingPage';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const CATCHY_JSON = [
  { label: 'catchy', content: 'Unleash' },
  { label: 'catchy', content: 'your' },
  { label: 'catchy', content: 'potential' },
  { label: 'catchy', content: 'and' },
  { label: 'catchy', content: 'achieve' },
  { label: 'catchy', content: 'your' },
  { label: 'catchy', content: 'career' },
  { label: 'catchy', content: 'goals' },
  { label: 'catchy', content: 'with' },
  { label: 'catchy', content: 'Career' },
  { label: 'catchy', content: 'Advancement' },
  { label: 'catchy', content: 'Exchange.' }
];

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay in loading the content
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Box bgGradient="linear(to-l, brand_pink.300, brand.400)" minH="95vh" p={4}>
      <Flex
        margin="0 auto"
        mt="2vh"
        justify="center"
        align="center"
        direction="column"
        bg="white"
        width={{ base: '100%', md: '50vw' }}
        style={{
          backdropFilter: 'blur(15px)',
          background: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          borderRadius: '10px',
          color: 'black',
          opacity: 0.8,
          padding: '1rem'
        }}>
        <Image
          src={girl}
          maxH="420px"
          minW={{ base: '220px', md: 'auto' }}
          objectFit="cover"
          fit="contain"
        />

        <Text
          fontSize={{ base: '2xl', md: '4xl' }}
          mt={{ base: '1rem', md: '2vw' }}
          margin={{ mt: '1rem', md: '2vw' }}
          fontWeight="bold"
          // margin= '0'
          // _hover={{
          // color: 'brand.400',
          // transition: 'all .25s ease-in-out',
          // fontWeight: 'black',
          // textShadow: '2px 2px 0px rgba(0,0,0,0.3), 4px 4px 0px rgba(0,0,0,0.2), 6px 6px 0px rgba(0,0,0,0.1)',

          // }}
          textAlign="center">
          a personalized ePortfolio,
        </Text>
        <Text
          fontSize={{ base: '2xl', md: '4xl' }}
          // margin={{ base: '1rem', md: '2vw' }}
          mb={{ base: '1rem', md: '2vw' }}
          fontWeight="bold"
          // mt={'-1vh'}
          // _hover={{
          // color: 'brand.400',
          // transition: 'all .25s ease-in-out',
          // fontWeight: 'black',
          // textShadow: '2px 2px 0px rgba(0,0,0,0.3), 4px 4px 0px rgba(0,0,0,0.2), 6px 6px 0px rgba(0,0,0,0.1)',

          // }}
          textAlign="center">
          because you're the main character
        </Text>
        {/* <Text fontSize='xl' margin='4vh' textAlign='center'>
          {CATCHY_JSON.map((item) => (
            <Text
              as="span"
              color="black.300"
              margin="0.25vh"
              flex="flex"
              flexWrap="wrap"
              _hover={{
                // your styles here
              }}
            >
              {item.content}
            </Text>
          ))}
          <Button margin='4vh' colorScheme='brand' bg={'brand.300'} size='lg' mt={4} _hover={{bg: 'brand.400'}}>
            Get Started
          </Button>

          </Flex>
          {/* <Flex mr={'3vw'}>
            <Image src={girl} minH='520px' minW='420' objectFit='cover' fit='contain' />
          </Flex> */}

        <Button
          margin="4vh"
          colorScheme="brand"
          bg={'brand.400'}
          size="lg"
          mt={4}
          _hover={{ bg: 'brand.300' }}
          as={RouterLink}
          to={'/profile'}>
          Get Started
        </Button>
      </Flex>
    </Box>
  );
};

export default Home;
