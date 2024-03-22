import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import Right from "./Right";

import LeftTop from "../LeftTop";

export default function Custum() {
  return (
    <div>
      <Box p="6rem">
        <HStack>
        <Right />
        <LeftTop/>
        </HStack>
      </Box>
    </div>
  );
}
