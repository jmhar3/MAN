import * as React from "react";
import { Box, Stack, Heading, IconButton } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

export const Welcome = () => {
  return (
    <Box backgroundImage="/nature.png">
      <Stack>
        <Stack align="center" justify="center" h="100vh" color="white">
          <Heading fontFamily="Jost" pr="100px">
            Melbourne
          </Heading>
          <Heading
            size="4xl"
            m="-9"
            color="brand.500"
            textShadow="1px 1px 2px grey"
          >
            Art
          </Heading>
          <Heading fontFamily="Jost" pl="110px">
            Natural
          </Heading>
        </Stack>

        <IconButton
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
