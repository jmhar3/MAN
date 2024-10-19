import * as React from "react";
import {
  Text,
  Box,
  Heading,
  Divider,
  useToken,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AbsoluteCenter,
} from "@chakra-ui/react";

export const Info = () => {
  const [brand800] = useToken("colors", ["brand.800"]);
  return (
    <Box>
      <Box position="relative" py="10">
        <Divider borderColor="green.900" />
        <AbsoluteCenter bg="brand.100" px="4">
          <Heading color="green.900" as="i" size="md" fontFamily="Jost">
            What it's like to work with me
          </Heading>
        </AbsoluteCenter>
      </Box>

      <Accordion allowToggle={true} borderColor="brand.800">
        <AccordionItem>
          <AccordionButton
            _expanded={{ borderBottom: `solid 1px ${brand800}` }}
          >
            <Box as="span" flex="1" textAlign="left">
              <Heading as="i" size="md" fontFamily="Jost">
                The booking process
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Heading as="i" size="md" fontFamily="Jost">
                On the day
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
