import React from 'react';
import { Box, HStack, VStack, Image,Text } from "@chakra-ui/react";

export default function Right() {
  return (
    <>
      <Box>
        <HStack>
          <Box w={908} h={1139} bg="#D9D9D9" display="flex" alignItems="center" justifyContent="center" >
            <VStack pt="1rem">
              
            <Image src='./blue.webp'></Image>
              <Box w={669} h={141} bgColor="white" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                <Text fontSize="3xl">Your Custom Shirt</Text>
                <Text fontSize="2xl">  $69</Text>

              </Box>
            </VStack>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
