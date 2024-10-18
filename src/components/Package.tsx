import * as React from "react";
import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useBoolean,
  useToken,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export interface PackageProps {
  title: string;
  description: string;
  included: string[];
  rate: number;
  isDistinct?: boolean;
}

export const Package = (props: PackageProps) => {
  const { title, description, included, rate, isDistinct = false } = props;

  const [green900] = useToken("colors", ["green.900"]);
  const [showContactButton, setShowContactButton] = useBoolean();
  const navigate = useNavigate();

  const bookPackage = () => {
    navigate("/#contact");
  };

  return (
    <Stack
      gap="3"
      align="center"
      onMouseEnter={setShowContactButton.on}
      onMouseLeave={setShowContactButton.off}
    >
      <Stack
        py="3"
        px="6"
        gap="5"
        rounded="md"
        align="center"
        border={isDistinct ? `1px solid ${green900}` : "none"}
      >
        <Stack align="center" gap="1">
          <Heading size="xl">{title}</Heading>
          <Text as="i" fontSize="lg">
            {description}
          </Text>
        </Stack>
        <List spacing={3}>
          {included.map((item) => (
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              {item}
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
        w="100%"
        _hover={{
          bg: "green.900",
          color: "brand.200",
        }}
        visibility={showContactButton ? "inherit" : "hidden"}
      >
        Book this package
      </Button>
    </Stack>
  );
};
