import React from 'react'
import { Box, HStack, Input,  } from "@chakra-ui/react";
import Fabric from './Fabric';
import { useFabricContext } from "../FabricContext";
import Scissors from './Scissors';


export default function Left() {
  const { value } = useFabricContext();

  return (
    <>
      <Box  >
    <HStack>
        <Box w={448} h={946} bg="#D9D9D9" p="1rem">
          <Input type="text"  bgColor="white" borderRadius="0"   placeholder="Search" ></Input>
          <Box>
            {value === "0" ? (
 <Fabric/>
            ):(
              <Scissors/>
            )}
         
          </Box>
        </Box>
       
    </HStack>
            </Box></>
  
  )
}
