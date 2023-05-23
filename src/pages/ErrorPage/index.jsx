import React from 'react';
import { Box, Button, Center, Flex, Heading, Image, Link, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <Flex
      minH="100vh"
      w="full"
      bgImage={null}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      alignItems="center"
      justifyContent="center">
      <Box
        maxW="lg"
        w="full"
        px={4}
        py={8}
        backgroundColor="white"
        borderRadius="lg"
        boxShadow="md"
        opacity={0.9}>
        <VStack spacing={4} align="center">
          <Heading fontSize="3xl" mb={6}>
            Oops! Something went wrong.
          </Heading>
          <Text fontSize="lg">
            It looks like the page you are looking for doesn't exist or an error occurred.
          </Text>
          <Button colorScheme="orange" as={RouterLink} to="/">
            Back to Home
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
}
