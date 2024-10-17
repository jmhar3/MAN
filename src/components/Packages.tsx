import * as React from "react";
import {
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
  useToken,
} from "@chakra-ui/react";
import { Package } from "./Package";
import { SectionContainer } from "./SectionContainer";

export const Packages = () => {
  const [green900] = useToken("colors", ["green.900"]);

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

  return (
    <SectionContainer label="Packages">
      <Stack gap="5">
        <Flex justify="center" justifyContent="space-evenly">
          <Package {...packages.digital} />
          <Package {...packages.complete} isDistinct />
          <Package {...packages.film} />
        </Flex>
      </Stack>
      <Stack
        border={`solid 1px ${green900}`}
        rounded="md"
        py="6"
        px="10"
        mt="4"
        mx="10"
      >
        <Heading>Extras</Heading>
        <Stack
          direction="row"
          align="center"
          justify="center"
          justifyContent="space-between"
          divider={<StackDivider borderColor="green.900" />}
        >
          <Stack>
            <Text>Add on film</Text>
            <Text>$50</Text>
          </Stack>
          <Stack>
            <Text>30 mins extension w 5 additional images</Text>
            <Text>$150</Text>
          </Stack>
          <Stack>
            <Text>Additional Edits (price per image)</Text>
            <Text>Light Retouch - $20 | Full Retouch - $45</Text>
          </Stack>
          <Stack>
            <Text>All RAWs in High Resolution</Text>
            <Text>$150</Text>
          </Stack>
        </Stack>
      </Stack>
    </SectionContainer>
  );
};
