import React from 'react';
import { Box, Image } from "@chakra-ui/react";
import { useFabricContext } from "../FabricContext";


export default function Comb() {
  const { setFabricNames,setSci ,setValue} = useFabricContext();

  const handleInputChange = () => {
    setFabricNames([
      { imageUrl: "purple.jpg", name: "Poplin", shirtT:"pTop.png",shirtD: "pdown.png" },
      { imageUrl: "lp.jpg", name: "Oxford",shirt:"ox.jpg" },
    ]);
    setValue("0")
  }; 

  const handleSChange = () => {
    setSci([ {name: "New Knet", shirtT: "p0down.png"}, {name: "Kne collar",shirtD: "p_knet.png"}]);
    setValue("1")
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
