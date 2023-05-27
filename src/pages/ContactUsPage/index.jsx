import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Image
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdFacebook, MdOutlineEmail } from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import { FaLinkedinIn, FaTiktok, FaInstagram } from 'react-icons/fa';
import girl from '../../assets/girlImage.png';

// import { firestore } from '../../base';

import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import {firestore} from '../../firebase/index.js';
export default function contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onNameChange = (event) => setName(event.target.value);
  const onEmailChange = (event) => setEmail(event.target.value);
  const onMessageChange = (event) => setMessage(event.target.value);
  
  const submit = (event) => {
    event.preventDefault();
    console.log("Attempting submit");
    setDoc(doc(firestore, "contacts", name), {
        Name : name,
        Email : email,
        Message: message,
    }).then(()=> {
        setName("");
        setEmail("");
        setMessage("");
        console.log("Submitted");
        window.location.reload();
    }).catch((error) => {
      console.error("Error submiting: ", error);
    });
  }

  return (
    <Container bg="#F9F6E8" maxW="full" minH={'95vh'} mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg={'brand.300'}
          color="brand.700"
          m={{ sm: 4, md: 16, lg: 10 }}
          pt={{ sm: 5, md: 5, lg: 16 }}
          pl={{ sm: 5, md: 5, lg: 16 }}
          pr={{ sm: 5, md: 5, lg: 16 }}
          outline={'1px solid brand.200'}
          borderRadius="lg"
          boxShadow="lg"
          // width={{ base: '100%', md: '50vw' }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>

                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="400px"
                        variant="ghost"
                        color="brand.700"
                        _hover={{ border: '2px solid brand.200' }}
                        leftIcon={<MdEmail color="brand.700" size="20px" />}>
                        team@careeradvancementexchange.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="195px"
                        variant="ghost"
                        color="brand.700"
                        _hover={{ border: '2px solid brand.200' }}
                        leftIcon={<MdLocationOn color="brand.700" size="20px" />}>
                        Champaign, IL
                      </Button>
                    </VStack>
                  </Box>
                  <Image
                    src={girl}
                    maxH="280px"
                    minW={{ base: '220px', md: 'auto' }}
                    ml={'15vw'}
                    mt={'-10vh'}
                    objectFit="cover"
                    fit="contain"
                    // align={'center'}
                    // justifyContent={'center'}
                    alignItems={'flex-end'}
                    opacity={0.6}
                  />
                  {/* <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    // alignItems="flex-end">
                    > */}

                  {/* </HStack> */}
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="brand.800">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" onChange={onNameChange} required={true} />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="email">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="brand.800">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" onChange={onEmailChange} required={true}/>
                        </InputGroup>
                      </FormControl>
                      <FormControl id="message">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="brand.800"
                          _hover={{
                            borderRadius: 'gray.300'
                          }}
                          placeholder="message"
                          onChange={onMessageChange}
                          required = {true}
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="brand.400"
                          color="white"
                          _hover={{}}
                          onClick={submit}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
            <Flex justifyContent="center" mt={{ lg: 20, md: 10 }} mb={{ lg: 0 }}>
              <IconButton
                aria-label="linkedin"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: 'brand.200' }}
                icon={<FaLinkedinIn size="28px" />}
              />
              <IconButton
                aria-label="tiktok"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: 'brand.200' }}
                icon={<FaTiktok size="28px" />}
              />
              <IconButton
                aria-label="instagram"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: 'brand.200' }}
                icon={<FaInstagram size="28px" />}
              />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
