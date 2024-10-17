import { AbsoluteCenter, Box, Divider, Heading } from "@chakra-ui/react";

export const SectionHeading = (props: { label: string }) => (
  <Box position="relative" py="10">
    <Divider borderColor="green.900" />
    <AbsoluteCenter bg="brand.100" px="4">
      <Heading>{props.label}</Heading>
    </AbsoluteCenter>
  </Box>
);
