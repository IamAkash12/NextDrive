import React from "react";
import { Box, Center, Flex, Image, Link, Text } from "@chakra-ui/react";
import google from "./images/google.png";
import apple from "./images/apple.png";
import logo from "./images/logo.png";
import insta_footer from "./images/insta_footer.png";
import fb_footer from "./images/fb_footer.png";
import twitter_footer from "./images/twitter_footer.png";
import pinterest_footer from "./images/pinterest_footer.png";
import google_footer from "./images/google_footer.png";
import "typeface-lato";
import "typeface-poppins";
const Footer = () => {
  return (
    <>
      <Box backgroundColor={"black"}>
        <Flex justifyContent={"center"}>
          <Image
            src={logo}
            width={120}
            height={120}
            style={{ transform: "translateY(-2rem)" }}
          />
        </Flex>

        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <Image src={insta_footer} width={47} height={47} margin={2} />
          <Image src={fb_footer} width={47} height={47} margin={2} />
          <Image src={twitter_footer} width={47} height={47} margin={2} />
          <Image src={pinterest_footer} width={47} height={47} margin={2} />
          <Image src={google_footer} width={47} height={47} margin={2} />

          <Link href="#" isExternal>
            <Image src={google} objectFit="contain" margin={1} />
          </Link>
          <Link href="#" isExternal>
            <Image src={apple} objectFit="contain" margin={1} />
          </Link>
        </Flex>

        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          fontFamily="Popins, sans-serif"
          color={"white"}
        >
          <Link
            href="#"
            isExternal
            margin={5}
            _hover={{
              color: "#ffc700",
              cursor: "pointer",
            }}
          >
            About Us
          </Link>
          <Link
            href="#"
            isExternal
            margin={5}
            _hover={{
              color: "#ffc700",
              cursor: "pointer",
            }}
          >
            Contact Us
          </Link>
          <Link
            href="#"
            isExternal
            margin={5}
            _hover={{
              color: "#ffc700",
              cursor: "pointer",
            }}
          >
            Terms & Conditions
          </Link>
          <Link
            href="#"
            isExternal
            margin={5}
            _hover={{
              color: "#ffc700",
              cursor: "pointer",
            }}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            isExternal
            margin={5}
            _hover={{
              color: "#ffc700",
              cursor: "pointer",
            }}
          >
            Disclamer
          </Link>
          <Link
            href="#"
            isExternal
            margin={5}
            _hover={{
              color: "#ffc700",
              cursor: "pointer",
            }}
          >
            FAQ
          </Link>
        </Flex>
        

      </Box>
    </>
  );
};

export default Footer;
