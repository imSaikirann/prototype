import React from "react";
import { Box, Text, Flex, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Catalog() {
  // Array with three elements to render the Flex components
  const flexItems = [1, 2, 3];

  return (
    <div>
      <Box p="3rem">
        <Text fontSize="5xl">Pick Your Style</Text>
  
        <Flex mt="3rem" alignItems="center" align="center" justifyContent="space-between" >
          
        {flexItems.map((item, index) => (
           <Link to="/customize" >
            <VStack key={index}  >
              <Box w="317px" h="453px" bg="#D9D9D9"></Box>
              <Text>Suit Style-{index + 1}</Text> {/* Use index to display the style number */}
            </VStack>
           </Link>
          ))}
        </Flex>

        <Flex mt="3rem" alignItems="center" align="center" justifyContent="space-between" >
          
          {flexItems.map((item, index) => (
           <Link to="/customize" >
            <VStack key={index}  >
              <Box w="317px" h="453px" bg="#D9D9D9"></Box>
              <Text>Suit Style-{index + 1}</Text> {/* Use index to display the style number */}
            </VStack>
           </Link>
          ))}
        </Flex>
      </Box>
    </div>
  );
}
