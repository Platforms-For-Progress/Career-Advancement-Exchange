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
  useCheckboxGroup
} from '@chakra-ui/react';

import girlImage from '../../assets/girlImage.png';
import { IoLocationSharp, IoMail } from 'react-icons/io5';
import { BsPerson } from 'react-icons/bs';

const bg_page = '#fcf4cf';
const bg_brand_yellow = '#F5C362';

const GetInvolvedPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { value, getCheckboxProps } = useCheckboxGroup({ defaultValue: [] });

  const onNameChange = (event) => setName(event.target.value);
  const onEmailChange = (event) => setEmail(event.target.value);
  const onMessageChange = (event) => setMessage(event.target.value);

  const submit = (event) => {
    event.preventDefault();
    console.log('Attempting submit');
    console.log(name);
    console.log(email);
    console.log(message);
    console.log(value);
    alert('logged');
  };

  return (
    <Box bg={bg_page} minH="95vh" p={4}>
      <Flex
        margin="0 auto"
        mt="2vh"
        justify="center"
        align="center"
        direction="column"
        bg={bg_brand_yellow}
        width={{ base: '100%', md: '50vw' }}
        style={{
          backdropFilter: 'blur(15px)',
          background: bg_brand_yellow,
          //border: "1px solid rgba(255, 255, 255, 0.25)",
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
          borderRadius: '2vw'
          //outline: "1px solid #222221"
        }}>
        <Flex align="center" direction="row" p={10}>
          <Box m={10}>
            <Text fontSize="3xl">
              <b>Get Involved</b>
            </Text>

            <Spacer h={4}></Spacer>
            <Flex direction="column" pl={5}>
              <Box pr={4}>
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

            <Image align="right" height="200px" src={girlImage}></Image>
          </Box>

          <Box p={7} bg="white" borderRadius={10}>
            {/* <FormControl mb={5} onSubmit={submit} > */}
            <form onSubmit={(event) => submit(event)}>
              <FormControl isRequired>
                <FormLabel>Your Name</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" size="xs">
                    <BsPerson color="gray.300" />
                  </InputLeftElement>
                  <Input type="name" required={true} onChange={onNameChange} />
                </InputGroup>
              </FormControl>

              <Spacer h={4}></Spacer>

              <FormControl isRequired>
                <FormLabel>Your Email</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" size="xs">
                    <HiOutlineMail color="gray.300" />
                  </InputLeftElement>
                  <Input type="email" required={true} onChange={onEmailChange} />
                </InputGroup>
              </FormControl>
              <Spacer h={4}></Spacer>

              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea onChange={onMessageChange} />
              </FormControl>

              <Spacer h={4}></Spacer>

              <FormControl>
                <FormLabel>Interested Team</FormLabel>
                <CheckboxGroup>
                  <Flex direction="column">
                    <Checkbox {...getCheckboxProps({ value: 'team1' })}>Team 1</Checkbox>
                    <Checkbox {...getCheckboxProps({ value: 'team2' })}>Team 2</Checkbox>
                    <Checkbox {...getCheckboxProps({ value: 'team3' })}>Team 3</Checkbox>
                    <Checkbox {...getCheckboxProps({ value: 'team4' })}>Team 4</Checkbox>
                  </Flex>
                </CheckboxGroup>
              </FormControl>

              <Spacer h={4}></Spacer>

              <Button type="submit" mb={0} bg={bg_brand_yellow} textColor="white">
                Send Message
              </Button>
            </form>
          </Box>
        </Flex>

        <Flex align="center" direction="row">
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
