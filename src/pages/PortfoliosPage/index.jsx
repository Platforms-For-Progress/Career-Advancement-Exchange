import React from "react";
import { Box, Flex, Heading, Text, Avatar, Link, Button, useBreakpointValue } from "@chakra-ui/react";
import info from "./portfolio.json"
import Inter from '../../assets/Inter-VariableFont_slnt,wght.ttf';

const Portfolios = () => {
  const boxWidth = useBreakpointValue({ base: "100%", md: "90vw" });
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const justifyFlexStart = useBreakpointValue({ base: "center", md: "flex-start" });
  const alignItemsFlexStart = useBreakpointValue({ base: "center", md: "flex-start" });
  return (
    <Box m="2vw" mt={"4vw"}>
     
      {info.map((portfolio) => (
      
        <Flex
          p="2vw"
          w={boxWidth}
          direction={flexDirection}
          justify={justifyFlexStart}
          alignItems={alignItemsFlexStart}
          borderRadius="2vw"
          boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.2)"
          outline="1px solid black"
          m="2%"
          fontFamily={Inter}
          
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
              <Button bg={"brand.200"}  fontSize="1.45rem" textAlign={'center'} alignSelf="flex-start" fontFamily={Inter}>
                Visit Her Portfolio
              </Button>
            </Link>
          </Flex>

          <Flex direction="column" flex="15">
            <Heading as="h3" fontWeight="bold" fontFamily={Inter}>
              {portfolio.name}
            </Heading>
            <Text
              
              p="1vw"
              fontSize="2.5vh"
              fontFamily={Inter}
            >
              {portfolio.blurb}
            </Text>
          </Flex>
        </Flex>
      
      ))}
    </Box>
  );
};

export default Portfolios;