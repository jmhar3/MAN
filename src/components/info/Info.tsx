import * as React from "react";
import { AccordianItem, AccordianItemProps } from "../AccordianItem";

import {
  Box,
  Heading,
  Divider,
  Accordion,
  AbsoluteCenter,
} from "@chakra-ui/react";

const info: AccordianItemProps[] = [
  {
    label: "Before you book",
    info: "",
  },
  {
    label: "The booking process",
    info: "",
  },
  {
    label: "On the day",
    info: "",
  },
  {
    label: "After the shoot",
    info: "",
  },
];

export const Info = () => {
  return (
    <Box>
      <Box position="relative" py="10">
        <Divider borderColor="green.900" />
        <AbsoluteCenter bg="brand.white" px="4">
          <Heading color="green.900" as="i" size="md" fontFamily="Jost">
            What it's like to work with me
          </Heading>
        </AbsoluteCenter>
      </Box>

      <Accordion allowToggle={true} borderColor="brand.babyGreen">
        {info.map((item) => (
          <AccordianItem {...item} />
        ))}
      </Accordion>
    </Box>
  );
};
