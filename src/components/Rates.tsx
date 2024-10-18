import * as React from "react";
import {
  Divider,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
  useToken,
  List,
  ListIcon,
  ListItem,
  useBoolean,
  Button,
  Img,
  Tag,
  Tooltip,
} from "@chakra-ui/react";
import { SectionContainer } from "./SectionContainer";
import { CheckCircleIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Extra = (props: { label: string; price: string }) => {
  return (
    <Stack gap="0">
      <Text fontWeight="semibold">{props.label}</Text>
      <Text>{props.price}</Text>
    </Stack>
  );
};
export const Rates = () => {
  const [green900] = useToken("colors", ["green.900"]);

  const packages = [
    {
      title: "35mm Film",
      description: "My personal specialty",
      included: ["2 hours", "20 high res film scans"],
      rate: 635,
    },
    {
      title: "Digital",
      description: "Something for everyone",
      included: ["1.5 hours", "15 high resolution edits", "Light Retouching"],
      rate: 475,
    },
    {
      title: "Complete",
      description: "The ultimate brand booster",
      included: ["4 hours", "20 high resolution edits", "Complete Retouching"],
      rate: 1000,
    },
  ];

  return (
    <SectionContainer label="Packages" colorScheme="light">
      <Stack
        pb="6"
        gap="6"
        align="center"
        divider={<StackDivider borderColor="green.900" />}
      >
        {packages.map((item, index) => (
          <Package {...item} index={index} />
        ))}
      </Stack>
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

export interface PackageProps {
  title: string;
  description: string;
  included: string[];
  rate: number;
  isDistinct?: boolean;
  index: number;
}

export const Package = (props: PackageProps) => {
  const {
    index,
    title,
    description,
    included,
    rate,
    isDistinct = false,
  } = props;

  const [green900] = useToken("colors", ["green.900"]);
  const navigate = useNavigate();

  const bookPackage = () => {
    navigate("/#contact");
  };

  const isOdd = (number: number) => {
    return (number & 1) === 1;
  };

  return (
    <Flex gap="10" w="60%" justifyContent="space-between">
      {isOdd(index) && <Img src="/nature.png" w="md" />}
      <Stack gap="3" align="center" w="40%">
        <Stack
          py="3"
          px="6"
          gap="5"
          rounded="md"
          border={isDistinct ? `1px solid ${green900}` : "none"}
        >
          <Stack gap="1">
            <Heading size="xl">{title}</Heading>
            <Text as="i" fontSize="lg">
              {description}
            </Text>
          </Stack>
          <List spacing={3}>
            {included.map((item) => (
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                {item}{" "}
                {item === "Complete Retouching" && (
                  <Tooltip
                    label="ie. airbrushing, teeth whitening, tattoo removal, blemish removal & colour grading"
                    fontSize="md"
                  >
                    <InfoOutlineIcon />
                  </Tooltip>
                )}
                {item === "Light Retouching" && (
                  <Tooltip
                    label="ie. blemish removal & colour grading"
                    fontSize="md"
                  >
                    <InfoOutlineIcon />
                  </Tooltip>
                )}
              </ListItem>
            ))}
          </List>
          <Text fontSize="2xl">${rate}</Text>
        </Stack>
        <Button
          onClick={bookPackage}
          border={`solid 1px ${green900}`}
          color="green.900"
          bg="brand.200"
          w="fit-content"
          _hover={{
            bg: "green.900",
            color: "brand.200",
          }}
        >
          Book this package
        </Button>
      </Stack>
      {isOdd(index + 1) && <Img src="/nature.png" w="md" />}
    </Flex>
  );
};
