import Simple from "../../Components/Subscribe/Index";
import { Box, Text } from "@chakra-ui/react";
import Countdown from "react-countdown";
import React from "react";
import { useBreakpointValue } from "@chakra-ui/react";

export default function Loading() {
    const fontSize = useBreakpointValue({ base: "6xl", md: "9xl" });

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render something when the countdown is complete
      return <Text>Countdown complete!</Text>;
    } else {
      // Render the countdown timer
      return (
        <><Text
              fontSize={fontSize} // Set the font size to a larger size
            //   @media (max-width: 768px) {
            //     font-size: 6rem;
            //     }


              color="grey.400" // Set the color to pink
              bg={"radial-gradient(circle, #FDCC7D, #FAD9F5) 0% 0% / 100% 100%"}

              bgClip="text"


              textAlign={"center"}
              fontFamily={"Prata"}
              fontWeight={"bold"}
              letterSpacing={"wide"}
              mt={"30vh"}

              


          >
              {days} : {hours} : {minutes} : {seconds}
          </Text><Text
              fontSize="3xl" // Set the font size to a larger size
              color="grey.400" // Set the color to pink
              bg={"radial-gradient(circle, #FDCC7D, #FAD9F5) 0% 0% / 100% 100%"}
              bgClip={"text"}
                textAlign={"center"}
                fontFamily={"Prata"}
                fontWeight={"bold"}
                mb={"10vh"}
                letterSpacing={"wide"}

          >
                  days -  hours -  minutes - seconds
              </Text></>

      );
    }
  };

  return (
    <Box bg={"#f9f6e8"}
            minH={'100vh'} >
      {/* <Text>Loading</Text> */}
      <Countdown date={new Date(2023, 4, 30)} renderer={renderer} />
      <Simple />
    </Box>
  );
}
