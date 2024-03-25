import React from "react";
import { Box, Text, Flex, VStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Catalog() {
  // Array with three elements to render the Flex components
  const flexItems = [
    { imageUrl: "s1.jpg", name: "Single Breasted Suits" },
    { imageUrl: "s2.jpg", name: "Double Breasted Suits" },
    { imageUrl: "s3.jpg", name: "Slim Fit Suits" }
  ];
  const flexItems1 = [
    { imageUrl: "s4.jpg", name: "Regular Fit Suits" },
    { imageUrl: "s5.jpg", name: "Modern Fit Suits" },
    { imageUrl: "s6.jpg", name: "Peak Lapel Suit" }
  ];
  return (
    <div>
      <Box p="3rem">
        <Text fontSize="5xl">Pick Your Style</Text>

        <Flex mt="3rem" alignItems="center" align="center" justifyContent="space-between">
          {flexItems.map((item, index) => (
            <Link to="/customize" key={index}>
              <VStack _hover={{ transform: "scale(1.1)" }}>
                <Box
                  w="317px"
                  h="395px"
                  bg="#D9D9D9"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="transform 0.2s"
                  cursor="pointer"
                >
                  <Image src={item.imageUrl} maxW="100%" maxH="100%" objectFit="contain" />
                </Box>
                <Text>{item.name}</Text>
              </VStack>
            </Link>
          ))}
        </Flex>

        <Flex mt="3rem" alignItems="center" align="center" justifyContent="space-between">
          {flexItems1.map((item, index) => (
            <Link to="/customize" key={index}>
              <VStack _hover={{ transform: "scale(1.1)" }}>
                <Box
                  w="317px"
                  h="395px"
                  bg="#D9D9D9"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="transform 0.2s"
                  cursor="pointer"
                >
                  <Image src={item.imageUrl} maxW="100%" maxH="100%" objectFit="cover" w="317px" h="395px" />
                </Box>
                <Text>{item.name}</Text>
              </VStack>
            </Link>
          ))}
        </Flex>
      </Box>
    </div>
  );
}
