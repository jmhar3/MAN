import * as React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

export const Welcome = () => {
  return (
    <Box backgroundImage="/nature.png">
      <Flex align="center" justify="center" h="100vh">
        <Heading color="white">Melbourne Art Natural</Heading>
      </Flex>
    </Box>
  );
};
