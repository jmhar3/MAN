import * as React from "react";
import { Box, Stack, Heading, IconButton } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <Box backgroundImage="/nature.png">
      <Stack align="center" justify="center" h="100vh" color="white">
        <Heading
          pr="120px"
          fontSize="6xl"
          fontFamily="Jost"
          color="brand.white"
          textShadow="1px 1px 2px grey"
        >
          Melbourne
        </Heading>

        <Heading
          m="-16"
          zIndex="900"
          fontSize="9xl"
          color="brand.babyBlue"
          textShadow="1px 1px 2px grey"
        >
          Art
        </Heading>

        <Heading
          pl="180px"
          fontSize="6xl"
          fontFamily="Jost"
          color="brand.white"
          textShadow="1px 1px 2px grey"
        >
          Natural
        </Heading>

        <IconButton
          as={Link}
          to="/#about"
          fontSize="2xl"
          variant="ghost"
          color="brand.babyBlue"
          aria-label="scroll down"
          icon={<ArrowDownIcon />}
          _hover={{ bg: "none", color: "brand.babyBlue" }}
        />
      </Stack>
    </Box>
  );
};
