import React from "react";
import { Box, Flex, Heading, Text, Avatar, Link, Button, Spacer } from "@chakra-ui/react";
import info from "./portfolio.json"

const Portfolios = () => {
  return (
      <Box bg={'#F9F6E8'}>
        <Spacer h='2vw'></Spacer>
          <Box mr="2vw" mb="2vw" ml="2vw">
              <Heading as="h2">Portfolios</Heading>
              {info.map((portfolio) => (
                  <Flex
                      direction={["column", "row"]}
                      justifyContent="left"
                      alignItems="left"
                      m={0}
                  >
                      <Flex
                          p="2vw"
                          w={["90vw", "40vw"]}
                          direction="column"
                          justify="flex-start"
                          alignItems="flex-start"
                          borderRadius="2vw"
                          boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.2)"
                          outline="1px solid black"
                          m="2%"
                      >
                          <Flex direction="column" flex="5">
                              <Avatar
                                  size='3xl'
                                  src={portfolio.img}
                                  alt="Clarisa Carrillo"
                                  w="60%"
                                  borderRadius="60%"
                                  m="2vw"
                                  alignSelf="flex-start"
                              />
                              <Link href={portfolio.link} isExternal>
                                  <Button bg='brand.400' fontFamily="Dongle" fontSize="1.45rem">
                                      Visit Her Portfolio
                                  </Button>
                              </Link>
                          </Flex>

                          <Flex direction="column" flex="15">
                              <Heading as="h3" fontWeight="bold">
                                  {portfolio.name}
                              </Heading>
                              <Text
                                  fontFamily="Prata"
                                  p="1vw"
                                  fontSize="2.5vh"
                              >
                                  {portfolio.blurb}
                              </Text>
                          </Flex>
                      </Flex>
                  </Flex>
              ))}
          </Box>
    </Box>
      
  );
};

export default Portfolios;