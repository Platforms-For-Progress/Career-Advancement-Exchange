import React from 'react';
import { useState } from 'react';
import { FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import {
  Flex,
  Box,
  Text,
  Input,
  Button,
  Image,
  Spacer,
  FormControl,
  FormLabel,
  IconButton,
  HStack,
  InputGroup,
  InputLeftElement,
  Textarea,
  CheckboxGroup,
  Checkbox,
  useCheckboxGroup,
  Wrap,
  Center
} from '@chakra-ui/react';
import girlImage from '../../assets/girlImage.png';
import { IoLocationSharp, IoMail } from 'react-icons/io5';
import { BsPerson } from 'react-icons/bs';
import { firestore } from '../../firebase/index';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
const bg_page = '#fcf4cf';
const bg_brand_yellow = '#F5C362';

const teams = [
  {
    name: 'Software/Web Development'
  },
  {
    name: 'Marketing & Fundraising'
  },
  {
    name: 'Business'
  },
  {
    name: 'UI/UX'
  }
];

const GetInvolvedPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [checkedValue, setCheckedValues] = useState([]);

  const onNameChange = (event) => setName(event.target.value);
  const onEmailChange = (event) => setEmail(event.target.value);
  const onMessageChange = (event) => setMessage(event.target.value);
  const onCheckChange = (values) => setCheckedValues(values);

  const submit = (event) => {
    event.preventDefault();
    console.log('Attempting submit');
    addDoc(collection(firestore, 'getinvolved_applications'), {
      name: name,
      email: email,
      message: message,
      interested_teams: checkedValue
    })
      .then(() => {
        setName('');
        setEmail('');
        setMessage('');
        console.log('Submitted');
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error submiting: ', error);
        alert('Something went wrong submitting. Please try again.');
      });
  };

  return (
    <Box bg={'background.400'} minH="95vh" p={4}>
      <Flex
        margin="0 auto"
        mt="2vh"
        px={10}
        justify="center"
        align="center"
        direction={'column'}
        bg={'brand.200'}
        width={{ base: '95vw', md: '70vw', lg: '40vw', xl: '30vw' }}
        style={{
          backdropFilter: 'blur(15px)',
          background: 'brand.700',
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
          borderRadius: '2vw'
        }}>
        <Flex
          align="center"
          direction={'column'}
          my={8}
          // ml={{ base: 0, md: 8, lg: 12, xl: 16 }}
        >
          {/* <Box m={10}> */}
          <Text fontSize={{ base: '2xl', md: '3xl' }} mb={4}>
            <b>Get Involved</b>
          </Text>

          <Spacer h={4}></Spacer>
          <Flex direction="column" pl={5}>
            <Box pr={4} ml={{ base: '2vw', md: 0 }} mb={'2vh'}>
              <HStack>
                <IoMail />

                <Text>team@careeradvancementexchange.com</Text>
              </HStack>
              <Spacer h={4}></Spacer>
              <HStack>
                <IoLocationSharp />
                <Text>Champaign, IL</Text>
              </HStack>
            </Box>
          </Flex>

          {/* </Box> */}

          <Box p={7} bg="white" borderRadius={10} mt={0}>
            {/* <FormControl mb={5} onSubmit={submit} > */}
            <form onSubmit={(event) => submit(event)}>
              <FormControl isRequired>
                <FormLabel>Your Name</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsPerson color="gray.300" />}
                    size="xs"
                  />
                  <Input type="name" required={true} onChange={onNameChange} />
                </InputGroup>
              </FormControl>

              <Spacer h={4}></Spacer>

              <FormControl isRequired>
                <FormLabel>Your Email</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<HiOutlineMail color="gray.300" />}
                    size="xs"
                  />
                  <Input type="email" required={true} onChange={onEmailChange} />
                </InputGroup>
              </FormControl>
              <Spacer h={4}></Spacer>

              <FormControl>
                <FormLabel>Why are you interested in joining the CAE team?</FormLabel>
                <Textarea onChange={onMessageChange} />
              </FormControl>

              <Spacer h={4}></Spacer>

              <FormControl>
                <FormLabel>Interested Team</FormLabel>
                <CheckboxGroup value={checkedValue} onChange={onCheckChange}>
                  <Flex direction="column">
                    {teams.map((team) => (
                      <Checkbox value={team.name}>{team.name}</Checkbox>
                    ))}
                  </Flex>
                </CheckboxGroup>
              </FormControl>

              <Spacer h={4}></Spacer>
              <Center>
                <Button type="submit" mb={0} bg={'brand.400'} textColor="white">
                  Submit
                </Button>
              </Center>
            </form>
          </Box>
        </Flex>

        <Flex align="center" direction={'row'}>
          <a
            href="https://www.linkedin.com/company/career-advancement-exchange"
            target="_blank"
            rel="noreferrer">
            <IconButton
              colorScheme="blackAlpha"
              variant="ghost"
              aria-label="LinkedIn"
              icon={<FaLinkedinIn size={25} />}
            />
          </a>
          <a href="https://www.tiktok.com/@caexchange" target="_blank" rel="noreferrer">
            <IconButton
              colorScheme="blackAlpha"
              variant="ghost"
              aria-label="TikTok"
              icon={<FaTiktok size={20} />}
              role="link"
            />
          </a>
          <a href="https://www.instagram.com/caexchange/" target="_blank" rel="noreferrer">
            <IconButton
              colorScheme="blackAlpha"
              variant="ghost"
              aria-label="Instagram"
              icon={<RiInstagramFill size={25} />}
            />
          </a>
        </Flex>
      </Flex>
    </Box>
  );
};
export default GetInvolvedPage;
