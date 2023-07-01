import React from "react";
import { Image, Box, Flex, Text, Divider } from "@chakra-ui/react";
import "typeface-lato";
import "typeface-poppins";
import { chakra } from "@chakra-ui/react";
import arrive from "./images/arrive_safely.png";
import bokk from "./images/bokk.png";
import driver from "./images/get_driver.png";
import track from "./images/track_driver.png";
import "typeface-lato";

const Working = () => {
  const horizontalLineStyle = {
    height: "3px",
    width: "90px",
    backgroundColor: "#1e8cf8",
    borderRadius: "4px",
    marginTop: "10px",
  };

  return (
    <>
      <Box
        backgroundColor="black"
        height={500}
        mt={20}
        fontFamily="Lato, sans-serif"
      >
        <Box padding={50}>
          <Text color="white" fontSize="30px" fontWeight={800}>
            How It Works
          </Text>
        </Box>

        <Flex
          justifyContent={"space-between"}
          width={"90%"}
          maxWidth={"1024"}
          gap={100}
          margin="auto"
        >
          <Flex flexDirection="column" alignItems="center" flex={1} >
            <Box
              backgroundColor="white"
              boxSize={120}
              borderRadius={15}
              _hover={{
                bg: "DodgerBlue",
                cursor: "pointer",
              }}
            >
              <Flex justifyContent="center" alignItems="center" height="100%">
                <Image src={bokk} />
              </Flex>
            </Box>
            <Text
              fontSize={20}
              fontWeight={750}
              color="white"
              textAlign="center"
              mt={10}
            >
              Book In Just 2 Steps
            </Text>
            <div style={horizontalLineStyle}></div>
            <Text color="white " mt="5">Book Your Cab In Just 2 Easy Steps</Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center" flex={1}>
            <Box
              backgroundColor="white"
              boxSize={120}
              borderRadius={15}
              _hover={{
                bg: "DodgerBlue",
                cursor: "pointer",
              }}
            >
              <Flex justifyContent="center" alignItems="center" height="100%">
                <Image src={driver} />
              </Flex>
            </Box>
            <Text
              fontSize={20}
              fontWeight={750}
              color="white"
              textAlign="center"
              mt={10}
            >
              Get a Driver
            </Text>
            <div style={horizontalLineStyle}></div>
            <Text color="white " mt="5">Get An Expert Driver At Your Place In Single Click.</Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center" flex={1}>
            <Box
              backgroundColor="white"
              boxSize={120}
              borderRadius={15}
              _hover={{
                bg: "DodgerBlue",
                cursor: "pointer",
              }}
            >
              <Flex justifyContent="center" alignItems="center" height="100%">
                <Image src={track} />
              </Flex>
            </Box>
            <Text
              fontSize={20}
              fontWeight={750}
              color="white"
              textAlign="center"
              mt={10}
            >
              Track a Driver
            </Text>
            <div style={horizontalLineStyle}></div>
            <Text color="white " mt="5">Track Your Driver Using Nextdrive App.</Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center"flex={1} >
            <Box
              backgroundColor="white"
              boxSize={120}
              borderRadius={15}
              _hover={{
                bg: "DodgerBlue",
                cursor: "pointer",
              }}
            >
              <Flex justifyContent="center" alignItems="center" height="100%">
                <Image src={arrive} />
              </Flex>
            </Box>
            <Text
              fontSize={20}
              fontWeight={750}
              color="white"
              textAlign="center"
              mt={10}
            >
              Arrive Safely
            </Text>
            <div style={horizontalLineStyle}></div>
            <Text color="white " mt="5">Arrive At Your Place Safely.</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Working;
