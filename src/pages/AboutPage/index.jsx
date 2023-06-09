import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue
} from '@chakra-ui/react';
import {
  Container,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  Center,
  Avatar,
  Button
} from '@chakra-ui/react';
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5';
import { CgWebsite } from 'react-icons/cg';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { ReactElement, useState } from 'react';
import { GrPowerCycle } from 'react-icons/gr';
import businessImage from '../../assets/adobe.jpeg';
import Elisa from '../../assets/ElisaCarrillo.png';
import Jacob from '../../assets/jacobshalabi.jpeg';

import React from 'react';
import { IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Inter from '../../assets/Inter-VariableFont_slnt,wght.ttf';
import Epilogue from '../../assets/Epilogue-VariableFont_wght.ttf'
// import Inter from '../../assets/Inter-VariableFont_slnt,wght.ttf'
// And react-slick as our Carousel Lib
// import Slider, { SliderRef, Settings } from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1
};

function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const data = [
    {
      title: 'Elisa Carrillo',
      description: 'Founder and CEO',
      image: Elisa
    },
    {
      title: 'Jacob Shalabi',
      description: 'Head of Software',
      image: Jacob
    },
    {
      title: 'Laiba Khan',
      description: 'Head of CAPE',
      image: businessImage
    },
    {
      title: 'Maryam Khatoon',
      description: 'Head of Marketing',
      image: businessImage
    },
    {
      title: 'Sid Wanjara',
      description: 'Software Developer',
      image: businessImage
    },
    {
      title: 'Ritul Soni',
      description: 'Head of R & D',
      image: businessImage
    },
    {
      title: 'Kaz Shah',
      description: 'Head of URW',
      image: businessImage
    },
    {
      title: 'Yasmine Munoz',
      description: 'Software Developer',
      image: businessImage
    }

    // 'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    // 'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    // 'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  ];

  return (
    <Flex w="100%" h="100%" align="center" justify="center" flexWrap={'wrap'} fontFamily={Inter}>
      {data.map((item) => (
        <Box
          maxW={'270px'}
          w={'full'}
          bg={
            'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)'
          }
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
          margin={'auto'}
          mb={5}>
          <Image
            h={'120px'}
            w={'120px'}
            borderRadius={'50%'}
            margin={'auto'}
            mt={'20px'}
            src={item.image}
            objectFit={'cover'}
          />

          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {item.title}
              </Heading>
              <Text color={'gray.500'}>{item.description}</Text>
            </Stack>
          </Box>
        </Box>
      ))}
    </Flex>
  );
}

const StatsCard = (props) => {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
      fontFamily={Inter}>
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
};

export default function BasicStatistics() {
  return (
    <Box
      maxW="100vw"
      minH="95vh"
      mx={'auto'}
      py={5}
      px={{ base: 2, sm: 12, md: 17 }}
      bg={useColorModeValue('background.400', 'gray.900')}
      fontFamily={Epilogue}>
      <SplitWithImage />
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        {/* <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
          Our Progress
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'We Have'} stat={'7 website deployments'} />
          <StatsCard title={'In'} stat={'2 different states'} />
          <StatsCard title={'With Over'} stat={'8000 website views'} />
        </SimpleGrid> */}
      </Box>
      {/* <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
          Our Team
        </chakra.h1>
        <Carousel />
      </Box> */}
    </Box>
  );
}

const Feature = (props) => {
  return (
    <Flex>
      <Flex shrink={0}>
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          h={12}
          w={12}
          rounded={'full'}
          fontFamily={Inter}
          bg={props.iconBg}>
          {props.icon}
          
        </Flex>
      </Flex>
      <Box ml={4}>
        <chakra.dt
          fontSize={'lg'}
          fontWeight={'medium'}
          lineHeight={'6'}
          color={useColorModeValue('gray.900', 'gray.100')}>
          {props.title}
        </chakra.dt>
        <chakra.dd mt={2} color={'gray.500'}>
          {props.children}
        </chakra.dd>
      </Box>
    </Flex>
  );
};

function SplitWithImage() {
  return (
    <Container
      maxW={'5xl'}
      mt={'5'}
      verticalAlign={'center'}
      py={12}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
      padding={'16'}
      paddingY={'24'}
      borderRadius={'2xl'}
      fontFamily={Epilogue}
      
      >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading fontFamily={Epilogue}>Celebrating your background, together</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            We believe that your background should not be a barrier to your success. We are dedicated to helping you achieve your career goals.
          </Text>
          <Stack
            spacing={4}
            divider={<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />}>
            <Feature
              icon={<Icon as={CgWebsite} color={'orange.500'} w={5} h={5} />}
              iconBg={useColorModeValue('brand.100', 'yellow.900')}
              title={'ePortfolios'}
              children={
                'We create free personalized ePortfolios for underrepresented individuals. We will work with you to create a website that showcases your skills and accomplishments.'
              }
            />
            <Feature
              icon={<Icon as={FaChalkboardTeacher} color={'orange.500'} w={5} h={5} />}
              iconBg={useColorModeValue('brand.100', 'yellow.900')}
              title={'Education'}
              children={
                'Our CAPE program teaches the basics of HTML, CSS, Javascript, and React. We drop new lessons each week.'
              }
              // color={'green.800'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image rounded={'md'} alt={'feature image'} src={businessImage} objectFit={'cover'} />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
