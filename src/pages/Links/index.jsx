import { Container, Flex, Box, Heading, IconButton, Link, Center } from '@chakra-ui/react';
import { FaLinkedinIn, FaTiktok, FaInstagram } from 'react-icons/fa';
import { FcSurvey } from 'react-icons/fc';

const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/career-advancement-exchange/',
    icon: <FaLinkedinIn size={['24px', '36px', '48px']} />
  },
  {
    label: 'Tiktok',
    href: 'https://www.tiktok.com/@caexchange',
    icon: <FaTiktok size={['24px', '36px', '48px']} />
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/caexchange',
    icon: <FaInstagram size={['24px', '36px', '48px']} />
  },
  {
    label: 'Survey',
    href: 'https://forms.gle/UAjdaUwrgWL4nyyu8',
    icon: <FcSurvey size={['24px', '36px', '48px']} />
  }
];

export default function Links() {
  return (
    <Container maxW="container.xl">
      <Center my={5}>
        <Heading as="h2" size={['md', 'lg', 'xl']} color="brand.300">
          Follow us on social media!
        </Heading>
      </Center>
      <Flex
        direction={['column', 'row']}
        justifyContent="center"
        mt={{ base: 10, md: 20 }}
        mb={{ lg: 0 }}
        alignItems="center">
        {links.map((link, index) => (
          <Link key={index} href={link.href} isExternal>
            <Box
              as={IconButton}
              aria-label={link.label}
              variant="ghost"
              size={['md', 'md', 'lg']}
              isRound={true}
              _hover={{ transform: 'scale(1.1)', bg: 'brand.200' }}
              m={2}
              icon={link.icon}
            />
          </Link>
        ))}
      </Flex>
    </Container>
  );
}
