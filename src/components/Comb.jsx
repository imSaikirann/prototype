import React from 'react';
import { Box, Image } from "@chakra-ui/react";
import { useFabricContext } from "../FabricContext";

export default function Comb() {
  const { setFabricNames, setSNames } = useFabricContext();

  const handleInputChange = () => {
    setFabricNames([
      { imageUrl: "purple.jpg", name: "Poplin" },
      { imageUrl: "lp.jpg", name: "Oxford" },
    ]);
  }; 

  const handleSChange = () => {
    setSNames(["Scissor 1", "Scissor 2", "Scissor 3"]);
  };

  return (
    <>
      <Box>
        <Box w={448} h={182} bg="#D9D9D9" display="flex" justifyContent="center" alignItems="center" gap="3rem">
          <Box onClick={handleInputChange} w="100px" h="100px" bg="#00171F" color="white" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Image src="./fabric.png"></Image>
            Fabrics</Box>
          <Box onClick={ handleSChange} w="100px" h="100px" bg="#00171F" color="white" display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
          <Image src="./fabric.png"></Image> Scissors</Box>
        </Box>
      </Box>
    </>
  );
}
