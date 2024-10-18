import * as React from "react";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
  useToken,
} from "@chakra-ui/react";
import { Package } from "./Package";
import { SectionContainer } from "./SectionContainer";

const packages = {
  digital: {
    title: "Digital",
    description: "Something for everyone",
    included: ["1.5 hours", "15 high resolution edits"],
    rate: 475,
  },
  film: {
    title: "35mm Film",
    description: "My personal specialty",
    included: ["2 hours", "20 high res film scans"],
    rate: 635,
  },
  complete: {
    title: "Complete",
    description: "The ultimate brand booster",
    included: [
      "4 hours",
      "20 high resolution edits",
      "Complete Retouching including",
      "airbrushing",
      "blemish removal",
      "teeth whitening",
      "tattoo removal",
      "colour grading",
    ],
    rate: 1000,
  },
};

const Extra = (props: { label: string; price: string }) => {
  return (
    <Stack gap="0">
      <Text fontWeight="semibold">{props.label}</Text>
      <Text>{props.price}</Text>
    </Stack>
  );
};

export const Packages = () => {
  const [green900] = useToken("colors", ["green.900"]);

  return (
    <SectionContainer label="Packages" colorScheme="light">
      <Flex justify="center" justifyContent="space-evenly">
        <Package {...packages.digital} />
        <Package {...packages.complete} isDistinct />
        <Package {...packages.film} />
      </Flex>
      <Stack
        border={`solid 1px ${green900}`}
        rounded="md"
        gap="3"
        py="6"
        px="10"
        mt="4"
      >
        <Flex align="center" gap="5">
          <Heading>Extras</Heading>
          <Divider borderColor="green.900" />
        </Flex>
        <Stack
          direction="row"
          align="center"
          justify="center"
          justifyContent="space-between"
          divider={<StackDivider borderColor="green.900" />}
        >
          <Extra label="Add on film" price="$50" />
          <Extra label="30 mins extension w 5 additional images" price="$150" />
          <Extra
            label="Additional Edits (price per image)"
            price="Light Retouch - $20 | Full Retouch - $45"
          />
          <Extra label="All RAWs in High Resolution" price="$150" />
        </Stack>
      </Stack>
    </SectionContainer>
  );
};
