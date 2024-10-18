import * as React from "react";
import { Box, Stack, Heading, IconButton } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <Box backgroundImage="/nature.png">
      <Stack align="center" justify="center" h="100vh" color="white">
        <Heading fontFamily="Jost" pr="120px" fontSize="6xl">
          Melbourne
        </Heading>

        <Heading
          m="-16"
          zIndex="900"
          fontSize="9xl"
          color="brand.500"
          textShadow="1px 1px 2px grey"
        >
          Art
        </Heading>

        <Heading fontFamily="Jost" pl="180px" fontSize="6xl">
          Natural
        </Heading>

        <IconButton
          as={Link}
          to="/#about"
          fontSize="2xl"
          variant="ghost"
          color="brand.400"
          aria-label="scroll down"
          icon={<ArrowDownIcon />}
          _hover={{ bg: "none", color: "brand.400" }}
        />
      </Stack>
    </Box>
  );
};
