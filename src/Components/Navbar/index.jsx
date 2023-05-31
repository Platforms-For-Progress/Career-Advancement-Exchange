import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Avatar,
  Spinner
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import NAV_ITEMS from './NavItems';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [user, loading, error] = useAuthState(auth);

  return (
    <Box>
      <Flex
        // bgGradient='linear(to-r, brand.200, brand_pink.200)'
        bg = {useColorModeValue('#F28C8C', 'brand_pink.200')}

        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        // borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link
            as={RouterLink}
            to={'/'}
            rounded={'md'}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
            transition='all 0.1s ease-in'
            margin='0 10px 0 0px'
            >
            Career Advancement Exchange
          </Link>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
          {loading ? (
            <Spinner />
          ) : !user ? (
            <>
              <Button
                as={RouterLink}
                fontSize={'sm'}
                fontWeight={400}
                variant={'link'}
                to={'/signin'}>
                Sign In
              </Button>
              <Button
                as={RouterLink}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'brand.400'}
                to={'/signup'}
                _hover={{
                  bg: 'brand.300'
                  
                }}>
                Sign Up
              </Button>
            </>
          ) : (
            <Avatar
              as={RouterLink}
              size={'sm'}
              src={user?.photoURL}
              name={user?.displayName}
              to={'/profile'}
            />
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
