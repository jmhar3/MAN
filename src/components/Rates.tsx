import * as React from "react";

import {
  Divider,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
  useToken,
} from "@chakra-ui/react";

import { SectionContainer } from "./SectionContainer";
import { ContactFormType } from "../pages/Home";
import { Package } from "./Package";

export interface RatesProps {
  setContactForm: React.Dispatch<React.SetStateAction<ContactFormType>>;
}

const packages = [
  {
    title: "Digital",
    description:
      "Something for everyone. Laboris nisi ut aliquip ex ea commodo consequat.",
    included: ["1.5 hours", "15 high resolution edits", "Light Retouching"],
    rate: 475,
  },
  {
    title: "Complete",
    description:
      "The ultimate brand booster. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    included: ["4 hours", "20 high resolution edits", "Complete Retouching"],
    rate: 1000,
  },
  {
    title: "35mm Film",
    description:
      "My personal specialty. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    included: ["2 hours", "20 high res film scans"],
    rate: 635,
  },
];

const Extra = (props: { label: string; price: string }) => {
  return (
    <Stack gap="0">
      <Text fontWeight="semibold">{props.label}</Text>
      <Text>{props.price}</Text>
    </Stack>
  );
};

export const Rates = (props: RatesProps) => {
  const [green900] = useToken("colors", ["green.900"]);

  return (
    <SectionContainer label="Packages" colorScheme="light">
      <Stack align="center">
        <Stack
          py="4"
          gap="6"
          w="70%"
          align="center"
          divider={<StackDivider borderColor="brand.800" />}
        >
          {packages.map((item, index) => (
            <Package {...item} {...props} index={index} />
          ))}
        </Stack>
        <Stack
          gap="3"
          py="6"
          px="10"
          mt="4"
          w="95%"
          rounded="md"
          border={`solid 1px ${green900}`}
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
            divider={<StackDivider borderColor="brand.800" />}
          >
            <Extra label="Add on a roll of film" price="$50" />
            <Extra
              label="30 mins extension w 5 additional images"
              price="$150"
            />
            <Extra
              label="Additional Edits (price per image)"
              price="Light Retouch - $20 | Full Retouch - $45"
            />
            <Extra label="All RAWs in High Resolution" price="$150" />
          </Stack>
        </Stack>
      </Stack>
    </SectionContainer>
  );
};