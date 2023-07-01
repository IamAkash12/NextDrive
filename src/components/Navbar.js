import React, { useEffect, useState } from "react";
import { Text, Box, Flex, chakra, Image } from "@chakra-ui/react";
import logo from "./images/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsScrolled(scrollPosition !== 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        bg={isScrolled ? "#ffc700" : "transparent"}
        py={4}
        px={8}
        color="black"
        fontFamily="Poppins, sans-serif"
        fontSize="18px"
        position="fixed"
        top={0}
        left={0}
        width="100%"
        zIndex={999}
        transition="background-color 0.3s ease-in-out, color 0.3s ease-in-out"
      >
        <Flex alignItems="center">
          <Image
            src={logo}
            boxSize="60px"
            objectFit="contain"
            mr={4}
            alignItems="center"
          />

          <Flex ml={4} justifyContent="flex-end" flex={1}>
            <chakra.a
              mx={2}
              href="#"
              _hover={{ color: "white", textDecoration: "underline" }}
            >
              Our Mission
            </chakra.a>
            <chakra.a
              mx={2}
              href="#"
              _hover={{ color: "white", textDecoration: "underline" }}
            >
              How it works
            </chakra.a>
            <chakra.a
              mx={2}
              href="#"
              _hover={{ color: "white", textDecoration: "underline" }}
            >
              Mobile App
            </chakra.a>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;