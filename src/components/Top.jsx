import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Box
        h="36px"
        w="100%"
        bgColor="#00171F"
        zIndex="1"
        position={isScrolled ? "fixed" : "static"}
      >
        Top
      </Box>
    </div>
  );
}

export default App;
