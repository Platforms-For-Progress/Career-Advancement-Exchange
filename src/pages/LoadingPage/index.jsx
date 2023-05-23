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
    Spinner,
    Image,
    AspectRatio
  
  } from '@chakra-ui/react';

  import gif from '../../assets/logo (1).gif';

function LoadingPage() {
  return (
    <Flex justify={'center'} align={'center'}>
    <Image src={gif} alt='Logo' minH='420px' minW='420' objectFit='cover' fit='contain' />
    </Flex>
  );
}

export default LoadingPage;
