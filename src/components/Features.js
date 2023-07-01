import { Flex, Image, Box, Text, Link } from "@chakra-ui/react";
import google from "./images/google.png";
import apple from "./images/apple.png";
import getIn from "./images/getIn.png";
import cleancar from "./images/cleancar.png";
import drivers from "./images/drivers.png";
import shield from "./images/shield.png";
import billing from "./images/billing.png";

import "typeface-lato";
import "typeface-poppins";

import React from "react";

const Features = () => {
  return (
    <>
      <Flex
        flexDirection="row-reverse"
        mt={10}
        mr={10}
        justifyContent={"flex-end"}
      >
        <Box>
          <Image
            src={getIn}
            objectFit="cover"
            objectPosition="center"
            width="1000px"
          />
        </Box>

        <Box mt="10" textAlign={"left"} ml={8}>
          <Text fontFamily="Lato, sans-serif" fontSize={30} fontWeight={800}>
            Get A Mobile Application
          </Text>
          <Text
            fontFamily="Popins, sans-serif"
            fontSize={13}
            fontWeight={100}
            textAlign={"left"}
            mt={5}
          >
            Nextdrive Provides You Vast Car Options Through This Cab Service
            App. Our Taxi Services Have Numerous Cars Accessible With Them
            Through This Greatest Cab Booking App.
          </Text>
          <Flex flexDirection={"column"} alignItems={"space-between"} mt={8}>
            <Flex flexDirection={"row"}>
            <Box
              boxSize={70}
              boxShadow="md"
              backgroundColor={"white"}
              borderRadius={10}
              justifyItems={"center"}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image src={cleancar} boxSize="30px" objectFit="contain" />
            </Box>
            <Flex flexDirection={"column"}>
            <Text ml={3} mt={3} fontWeight={700} fontFamily="Popins, sans-serif">Clean Car</Text>
            <Text ml={3} mt={1} fontWeight={100} fontFamily="Popins, sans-serif">You can get best cars at affordable prize</Text>
            </Flex>
            </Flex>
           

            <Flex flexDirection={"row"} mt={7}>
            <Box
              boxSize={70}
              boxShadow="md"
              backgroundColor={"white"}
              borderRadius={10}
              justifyItems={"center"}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image src={billing} boxSize="30px" objectFit="contain" />
            </Box>
            <Flex flexDirection={"column"}>
            <Text ml={3} mt={3} fontWeight={700} fontFamily="Popins, sans-serif">Transparent Billing</Text>
            <Text ml={3} mt={1} fontWeight={100} fontFamily="Popins, sans-serif">This App Gives You 100% Transparency In Billing Whether Its Online Or Cash.</Text>
            </Flex>
            </Flex>

            <Flex flexDirection={"row"} mt={7}>
            <Box
              boxSize={70}
              boxShadow="md"
              backgroundColor={"white"}
              borderRadius={10}
              justifyItems={"center"}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image src={shield} boxSize="30px" objectFit="contain" />
            </Box>
            <Flex flexDirection={"column"}>
            <Text ml={3} mt={3} fontWeight={700} fontFamily="Popins, sans-serif">Reliable Service</Text>
            <Text ml={3} mt={1} fontWeight={100} fontFamily="Popins, sans-serif">Cab Services Provides Very Much Hassle-Free And Reliable.</Text>
            </Flex>
            </Flex>

            <Flex flexDirection={"row"} mt={7}>
            <Box
              boxSize={70}
              boxShadow="md"
              backgroundColor={"white"}
              borderRadius={10}
              justifyItems={"center"}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image src={drivers} boxSize="30px" objectFit="contain" />
            </Box>
            <Flex flexDirection={"column"}>
            <Text ml={3} mt={3} fontWeight={700} fontFamily="Popins, sans-serif">Courteous Drivers</Text>
            <Text ml={3} mt={1} fontWeight={100} fontFamily="Popins, sans-serif">This App Driver Is Very Much Polite And Clever Of City Map.</Text>
            </Flex>
            </Flex>
            

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
      </Flex>
    </>
  );
};

export default Features;
