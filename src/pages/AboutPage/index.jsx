import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
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
  
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import {
  CgWebsite
} from 'react-icons/cg';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { ReactElement } from 'react';
import { GrPowerCycle } from 'react-icons/gr';
import businessImage from '../../assets/adobe.jpeg'


const StatsCard = (props) => {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
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
      minH = "95vh"
      mx={'auto'}
      py={5}
      px={{ base: 2, sm: 12, md: 17 }}
      bg={useColorModeValue('#F9F6E8', 'gray.900')}>
    <SplitWithImage />
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        Our Progress
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'We Have'} stat={'7 website deployments'} />
        <StatsCard title={'In'} stat={'2 different states'} />
        <StatsCard title={'With Over'} stat={'5000 website views'} />
      </SimpleGrid>
    </Box>
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        Our Team
      </chakra.h1>
      </Box>
    
    
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
          bg={props.iconBg}
          >
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
    <Container maxW={'5xl'} mt={'5'} verticalAlign={'center'} py={12} shadow={'xl'}
    border={'1px solid'}
    borderColor={useColorModeValue('gray.800', 'gray.500')}
    rounded={'lg'}  padding={"16"} paddingY={"24"} borderRadius={'2xl'}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          
          <Heading>Celebrating your background, together</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              icon={
                <Icon as={CgWebsite} color={'orange.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              title={'ePortfolios'}
              children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            />
            <Feature
              icon={<Icon as={FaChalkboardTeacher} color={'orange.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              title={'Education'}
              children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              // color={'green.800'}
            />
            
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={businessImage           }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}