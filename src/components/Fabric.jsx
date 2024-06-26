import React from 'react';
import { Box,  VStack, Image, Text } from '@chakra-ui/react';
import { useFabricContext } from "../FabricContext";

export default function Fabric() {
  const { fabricNames, setShirts } = useFabricContext();
  console.log(fabricNames)

  const handleInputChange = () => {
    setShirts(fabricNames)
  }; 
  return (
    <Box>
      <div>
        { fabricNames && fabricNames.map((fabric, index) => (
          <div key={index} >
            <VStack p="1rem">
              <VStack>
               <Box h="200px" w="200px" display="flex" flexDirection="column" alignItems="center" justifyItems="center">
               <Image src={fabric.imageUrl} onClick={handleInputChange} />
                <Text>{fabric.name}</Text>
               </Box>
              </VStack>
            </VStack>
          </div>
        ))}
      </div>
     
    </Box>
  );
}
