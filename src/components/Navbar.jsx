import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      bg={isScrolled ? "white" : "rgba(255, 255, 255, 0)"}
      h="82px"
      position="fixed"
      w="100%"
      zIndex="999"
      transition="background-color 0.3s"
    >
      <Flex
        align="center"
        justify="space-between"
        px="6"
        maxW="7xl"
        mx="auto"
        h="100%"
      >
        {/* Left side of the navbar */}
        <Flex align="center" gap="2.5rem" >
          <Menu >
            <MenuButton as={Link} href="#collections" fontWeight="bold">
              Collections 
            </MenuButton>
            <MenuList borderRadius="0" w="150px" h="250px"> 
              <MenuItem>Suit Type 1</MenuItem>
              <MenuItem>Suit Type 2</MenuItem>
              <MenuItem>Suit Type 3</MenuItem>
              <MenuItem>Suit Type 4</MenuItem>
              <MenuItem>Suit Type 5</MenuItem>
              <MenuItem>Suit Type 6</MenuItem>
              
            </MenuList>
          </Menu>
          <Link href="#new-arrivals" ml="4" fontWeight="bold">
            New Arrivals
          </Link>
          <Link href="#about-us" ml="4" fontWeight="bold">
            About Us
          </Link>
        </Flex>
        <Box>
          <Image
            src={isScrolled ? "./bblogo.png" : "./bblogo.png"}
            w="auto"
            h="75px"
            alt="Logo"
          />
        </Box>
        <Flex align="center" gap="2.5rem">
          {/* Add any additional elements or icons here */}
          <Link href="#" ml="4" fontWeight="bold">
            Login
          </Link>
          <Link
            href="#"
            ml="4"
            fontWeight="bold"
            color="white"
            bg="blue.500"
            borderRadius="md"
            px="3"
            py="1"
            _hover={{ bg: "blue.600" }}
          >
            Sign Up
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
