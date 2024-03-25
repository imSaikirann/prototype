import React from 'react';
import { Box, VStack, Image, Text } from '@chakra-ui/react';
import { useFabricContext } from "../FabricContext";

export default function Scissors() {
  const { sci ,setTop} = useFabricContext();
 
  const onhandleChange =()=>{
    setTop(sci)
  }
console.log(sci)

  return (
    <Box>
      <div>
        { sci && sci.map((fabric, index) => (
          <div key={index} >
            <VStack p="1rem">
              <VStack>
               <Box h="200px" w="200px" display="flex" flexDirection="column" alignItems="center" justifyItems="center">
               <Image src={fabric.shirtD} h="300px"  onClick={onhandleChange} />
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
