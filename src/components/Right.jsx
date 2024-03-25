import React from "react";
import { Box, HStack, VStack, Image, Text } from "@chakra-ui/react";
import { useFabricContext } from "../FabricContext";

export default function Right() {
  const { shirts,top } = useFabricContext();
  

  // Assuming shirts is an array and you want to display the first shirt
  const firstShirtImageUrl = shirts.length > 0 ? shirts[0] : null;
const data = top.length > 0 ? top[1] : null;
  console.log("thg",data)
  
 

  return (
    <>
      <Box>
        <HStack>
          <Box
            w={908}
            h={1139}
            bg="#D9D9D9"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <VStack>
              <Box position="relative">
                {firstShirtImageUrl ? (
                  <>
                     <Image src={ firstShirtImageUrl.shirtT} position="absolute" zIndex="1" />
                  <Image src={firstShirtImageUrl.shirtD} />
                  </>
               
                ) : (
                  <>
                    <Image src="/top.png" position="absolute" zIndex="1" />
                    <Image src="/down.png" />
                  </>
                )}
              </Box>
              <Box
                w={669}
                h={141}
                bgColor="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <Text fontSize="3xl">Your Custom Shirt</Text>
                <Text fontSize="2xl">$69</Text>
              </Box>
            </VStack>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
