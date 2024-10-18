import * as React from "react";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SectionHeading } from "./SectionHeading";
import { SectionContainer } from "./SectionContainer";

export const About = () => {
  return (
    // <SectionContainer label="About" colorScheme="light">
    <Flex gap="6" px="10" pt="10">
      <Img src="/nature.png" w="xl" />
      <Stack>
        <Flex align="center" gap="5" pb="3">
          <Heading color="green.900" w="16%">
            About me
          </Heading>
          <Divider borderColor="green.900" />
        </Flex>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Stack>
    </Flex>
    // </SectionContainer>
  );
};
