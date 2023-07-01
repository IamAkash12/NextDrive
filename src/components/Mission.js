import React from "react";
import { Image, Box, Flex, Text } from "@chakra-ui/react";
import mission from "./images/mission.png";
import "typeface-lato";
import "typeface-poppins";
import clock from "./images/clock.png";
import touch from "./images/touch.png";
import notebook from "./images/notebook.png";
const Mission = () => {
  return (
    <>
      <Flex alignItems="center" marginLeft={10} mt={20}>
        <Image src={mission} marginRight={10} width={800} height={700} />
        <Box  fontFamily="Lato, sans-serif">
          <Text
            color="#333333"
            fontSize="40px"
            fontStyle="bold"
            fontWeight={800}
            textAlign={"left"}
          >
            Our Mission <br /> Statement
          </Text>
          <Text textAlign={"left"} mt={10}>
            The Online Cab Booking Service Providers Care The Price Of Traveling
            Based On The Distance Of Travel Trip And Type Of Car, Traffic, And
            Waiting Prices. There Are Numerous Apps Available In The Android
            Play Store And Apple App Store For Cab Booking In India.
          </Text>
          <Text textAlign={"left"} mt={10}>
            Selecting The Greatest Taxi Booking Apps In India Is Tough, Which
            May Vary From Town To Town.
          </Text>

          <Box display="flex" mt={10} justifyContent={"space-between"}>
            <Box
               boxShadow="md"
               p={4}
               width={230}
               height={150}
               display="flex"
               flexDirection="column"
               alignItems="center"
               justifyContent="center"
            >
              <Image src={clock} boxSize="60px" objectFit="contain" />
              <Text textAlign="center">Surge Free Gurantee</Text>
            </Box>
            <Box
              boxShadow="md"
              p={4}
              width={230}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image src={notebook} boxSize="60px" objectFit="contain" />
              <Text textAlign="center">Book for now or later</Text>
            </Box>
            <Box
               boxShadow="md"
               p={4}
               width={230}
               display="flex"
               flexDirection="column"
               alignItems="center"
               justifyContent="center"
            >
              <Image src={touch} boxSize="60px" objectFit="contain" />
              <Text textAlign="center">Cashless Payment</Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Mission;
