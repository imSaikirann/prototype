import React from 'react';

import { Box, Button, Image, Text } from "@chakra-ui/react";
import Catalog from './Catalog';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Box position="relative">
      <Image src='./home_banner.png' width="100%" height="auto" />
      <Box position="absolute" top="0" left="0" width="100%" height="100%">
     

        {/* Centered box */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          width="70%" 
          color="white"
        >
           <Text fontSize="5xl" fontWeight="bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.4)' }}>
            YOUR DIMENSIONS, OUR MISSION
          </Text>
          <Text fontSize="4xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.4)' }}>
            STYLE ELEVATION IN EVERY TRANSITION
          </Text>

          <Box style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.4)' }}>
            <Link to="/customize"><Button bgColor="white" p="10px" pl="16px" pr="16px" borderRadius="0"  >Customize Your Suit</Button></Link>
          </Box>
        </Box>
      </Box>
    </Box>
    <Box>
      <Catalog/>
    </Box>
    </>
  

  );
}
