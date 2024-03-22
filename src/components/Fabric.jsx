import React from 'react';
import { Box, HStack, VStack, Image, Text } from '@chakra-ui/react';
import { useFabricContext } from "../FabricContext";

export default function Fabric() {
  const { fabricNames, sNames } = useFabricContext();

  return (
    <Box>
      <div>
        { fabricNames && fabricNames.map((fabric, index) => (
          <div key={index}>
            <HStack>
              <VStack>
               <Box h="200px" w="200px" display="flex" flexDirection="column" alignItems="center" justifyItems="center">
               <Image src={fabric.imageUrl} />
                <Text>{fabric.name}</Text>
               </Box>
              </VStack>
            </HStack>
          </div>
        ))}
      </div>
      <div>
        { sNames && sNames.map((sName, index) => (
          <div key={index}>{sName}</div>
        ))}
      </div>
    </Box>
  );
}
