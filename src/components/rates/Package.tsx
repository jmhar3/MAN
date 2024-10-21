import * as React from "react";
import { CheckCircleIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

import {
  Flex,
  Heading,
  Stack,
  Text,
  useToken,
  List,
  ListIcon,
  ListItem,
  Button,
  Img,
  Tooltip,
} from "@chakra-ui/react";

import { RatesProps } from "./Rates";
import { PackageEnum } from "../../pages/Home";
import { ExampleModal } from "./ExampleModal";

export interface PackageProps extends RatesProps {
  image: string;
  title: string;
  description: string;
  included: string[];
  rate: number;
  index: number;
}

export const Package = (props: PackageProps) => {
  const { index, image, title, description, included, rate, setContactForm } =
    props;

  const [green900] = useToken("colors", ["green.900"]);
  const navigate = useNavigate();

  const bookPackage = () => {
    setContactForm((formValues) => ({
      ...formValues,
      preferredPackage:
        title.toLowerCase() === "35mm film"
          ? PackageEnum.Film
          : (title.toLowerCase() as PackageEnum),
    }));

    navigate("/#contact");
  };

  const isOdd = (number: number) => {
    return (number & 1) === 1;
  };

  return (
    <Flex gap="20" align="center" w="100%">
      {isOdd(index) && <Img src={image} boxSize="sm" objectFit="cover" />}

      <Stack gap="2" h="100%" w="100%" justify="center" align="flex-start">
        <Stack py="3" gap="5">
          <Stack gap="0">
            <Heading
              as="i"
              mb="-1.5"
              fontSize="2xl"
              fontFamily="Jost"
              _firstLetter={{
                mr: "-0.5",
                fontSize: "5xl",
                fontFamily: "Imperial Script",
                fontStyle: "normal",
              }}
            >
              {title}
            </Heading>
            <Text fontSize="lg">{description}</Text>
          </Stack>

          <List spacing="2">
            {included.map((item) => (
              <ListItem as={Flex} gap="2" align="center">
                <ListIcon as={CheckCircleIcon} color="green.900" m="0" />
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

        <Flex gap="3">
          <Button
            size="sm"
            bg="green.900"
            w="fit-content"
            color="brand.white"
            _hover={{
              bg: "brand.white",
              color: "green.900",
            }}
            onClick={bookPackage}
            border={`solid 1px ${green900}`}
          >
            Book this package
          </Button>

          <ExampleModal
            description="This is a description about retouching blah blah blah"
            images={[
              "/nature.png",
              "/nature.png",
              "/nature.png",
              "/nature.png",
            ]}
          />
        </Flex>
      </Stack>

      {isOdd(index + 1) && <Img src={image} boxSize="sm" objectFit="cover" />}
    </Flex>
  );
};
