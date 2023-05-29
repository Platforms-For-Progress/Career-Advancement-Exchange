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
import panaImageGirl from '../../assets/panaImageGirl.svg';
import Epilogue from '../../assets/Epilogue-VariableFont_wght.ttf';
import Inter from '../../assets/Inter-VariableFont_slnt,wght.ttf';



const Home = () => {
  
  

  return (
    <Box bg="#FFFDFD" minH="95vh" maxW="full" mt={0} centerContent overflow="auto">
      <Flex direction="row">
        <Box>
          <Image
            pos={'relative'}
            
            width="100%"
            mt={10}
            height="80%"
            src={panaImageGirl}
            ></Image>

          
        </Box>
        <Box width={'50%'} >
          <Flex direction="row" justifyContent={'flex-end'}
            alignItems={'flex-end'}
            alignSelf={'flex-end'}
            align = {'flex-end'} >
          <Text
            fontFamily={Epilogue}
            pos={'relative'}
            textAlign={'right'}
            fontWeight={'medium'}
            
            mr={'10px'}
            color={'#65391A'}
            mt={'15vh'}

            
            fontSize="6xl">
            a 
          </Text>
          <Text
            fontFamily={Epilogue}
            
            
            pos={'relative'}
            textAlign={'right'}
            justifyContent={'flex-end'}
            alignItems={'flex-end'}
            alignSelf={'flex-end'}
            fontWeight={'bold'}
            mr={'8vw'}
            fontSize={'6xl'}
            color={"#D65947"}
            
            >
            free
          </Text>
          </Flex>
          <Text
            fontFamily={Epilogue}
            pos={'relative'}
            textAlign={'right'}
            justifyContent={'flex-end'}
            alignItems={'flex-end'}
            alignSelf={'flex-end'}
            align = {'flex-end'}
            mr={'8vw'}
            fontSize={'6xl'}
            textDecoration={'underline'}
            fontWeight={'medium'}
            color={'#65391A'}
            mt={'-20px'}
            >
            
              personalized 
        
            </Text>
          <Text
            fontFamily={Epilogue}
            pos={'relative'}
            textAlign={'right'}
            justifyContent={'flex-end'}
            alignItems={'flex-end'}
            alignSelf={'flex-end'}
            align = {'flex-end'}
            mr={'8vw'}
            fontWeight={'medium'}
            fontSize={'6xl'}
            color={'#65391A'}
            textDecoration={'underline'}
            mt={'-20px'}
            >
   
              ePortfolio
            
            </Text>
            <Text
            fontFamily={Inter}
            pos={'relative'}
            textAlign={'right'}
            justifyContent={'flex-end'}
            alignItems={'flex-end'}
            alignSelf={'flex-end'}
            align = {'flex-end'}
            mr={'8vw'}
            fontWeight={'medium'}
            fontSize={'4xl'}
            color={'#CD4910'}
            mt={'20px'}
            >
              your journey, your story
            </Text>
            <Text
            fontFamily={Inter}
            pos={'relative'}
            textAlign={'right'}
            justifyContent={'flex-end'}
            alignItems={'flex-end'}
            alignSelf={'flex-end'}
            align = {'flex-end'}
            mr={'8vw'}
            fontWeight={'medium'}
            fontSize={'4xl'}
            color={'#CD4910'}
            >
              let your ePortfolio speak for you
            </Text>

            <Button
            as={RouterLink}
            to={'/signup'}
            fontFamily={Inter}
            pos={'relative'}
            ml={'20vw'}
            bg={'#FF985E'}
            color={'#2C3134'}
            fontSize="3xl"
            mt={'10vh'}
            
            _hover={{
              bg: '#FF985E',
              boxShadow: '0 0 10px 3px #F6AF87'
            }}
            // height={'8vh'}
            p={7}
            >
              start now
            </Button>


        </Box>
      </Flex>
      

        
    </Box>

  );
};

export default Home;
