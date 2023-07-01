import { Image, Flex, Box, Text, Link, useScrollPosition } from "@chakra-ui/react";
import React, {useState,useEffect} from "react";
import taxi from "./images/taxi1.png";
import car from "./images/car.png";
import "typeface-lato";
import "typeface-poppins";
import google from "./images/google.png";
import apple from "./images/apple.png";

const Content = () => {


  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        height="100vh" // Set the height of the container to full viewport height
        overflow="hidden"
      >
        <Box
          width="100%"
          height="100%"
          background={`url(${taxi})`}
          backgroundSize="cover"
          backgroundPosition="center"
          overflow="hidden"
          position="relative"
        >
          <Box display="flex" boxSize={550} padding={8}>
            <Flex direction="column">
              <Text
                mt="150px"
                color="white"
                fontSize="46px"
                fontWeight={800}
                fontFamily="Lato, sans-serif"
                textAlign="left"
              >
                The Best Way To Get Wherever You’re Going
              </Text>

              <Text
                mt="25px"
                color="white"
                fontSize="18px"
                fontFamily="Popins, sans-serif"
                textAlign="left"
              >
                We Will Bring You Quickly And Comfortably To Anywhere In Your
                City
              </Text>
              <Flex>
                <Link href="#" isExternal>
                  <Image
                    src={google}
                    boxSize="130px"
                    objectFit="contain"
                    marginRight="20px"
                  />
                </Link>
                <Link href="#" isExternal>
                  <Image src={apple} boxSize="130px" objectFit="contain" />
                </Link>
              </Flex>
            </Flex>
          </Box>

          <Box
            position="absolute"
            top={0}
            left={800}
            width="50%"
            height="90%"
            backgroundColor="#FFC700"
            borderRadius="0 0 0 30%"
          />
          <Box
            position="absolute"
            top={113}
            left={1000}
            width="50%"
            height="74%"
            backgroundColor="#F0bc04"
            borderRadius="10% 0 0 10%"
            border
          />
          <Image
            src={car}
            alt="car"
            position="absolute"
            top={150}
            left={480}
            // width="70%"
            // height="70%"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </Flex>
    </>
  );
};

export default Content;
