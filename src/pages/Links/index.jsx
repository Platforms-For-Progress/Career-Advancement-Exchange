import {
    Container,
    Flex,
    Box,
    Heading,
    IconButton,
    Link, 
    Center
  } from '@chakra-ui/react';
  import { FaLinkedinIn, FaTiktok, FaInstagram } from 'react-icons/fa';
  import { FcSurvey } from 'react-icons/fc';
  
  export default function Links() {
    return(
      <Container maxW="container.xl">
        <Center my={5}> 
          <Heading as="h2" size={["md", "lg", "xl"]} color="brand.300">
            Follow us on social media!
          </Heading>
        </Center>
        <Flex direction={["column", "row"]} justifyContent="center" mt={{ base: 10, md: 20 }} mb={{ lg: 0 }} alignItems="center">
          <Link href="https://www.linkedin.com/company/career-advancement-exchange/" isExternal>
            <Box as={IconButton}
              aria-label="linkedin"
              variant="ghost"
              size={["md", "md", "lg"]}
              isRound={true}
              _hover={{ transform: 'scale(1.1)', bg: 'brand.200' }}
              m={2}
              icon={<FaLinkedinIn size={["24px", "36px", "48px"]} />}
            />
          </Link>
          <Link href="https://www.tiktok.com/@caexchange" isExternal>
            <Box as={IconButton}
              aria-label="tiktok"
              variant="ghost"
              size={["md", "md", "lg"]}
              isRound={true}
              _hover={{ transform: 'scale(1.1)', bg: 'brand.200' }}
              m={2}
              icon={<FaTiktok size={["24px", "36px", "48px"]} />}
            />
          </Link>
          <Link href="https://www.instagram.com/caexchange" isExternal>
            <Box as={IconButton}
              aria-label="instagram"
              variant="ghost"
              size={["md", "md", "lg"]}
              isRound={true}
              _hover={{ transform: 'scale(1.1)', bg: 'brand.200' }}
              m={2}
              icon={<FaInstagram size={["24px", "36px", "48px"]} />}
            />
          </Link>
          <Link href="https://forms.gle/UAjdaUwrgWL4nyyu8" isExternal>
            <Box as={IconButton}
              aria-label="survey"
              variant="ghost"
              size={["md", "md", "lg"]}
              isRound={true}
              _hover={{ transform: 'scale(1.1)', bg: 'brand.200' }}
              m={2}
              icon={<FcSurvey size={["24px", "36px", "48px"]} />}
            />
          </Link>
        </Flex>
      </Container>
    );
  }
  