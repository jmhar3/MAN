import * as React from "react";
import { BiLogoGmail, BiLogoInstagram, BiSolidPencil } from "react-icons/bi";

import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Stack,
  StackDivider,
  Text,
  useToken,
} from "@chakra-ui/react";
import { ContactForm, ContactFormProps } from "./ContactForm";
import { Link } from "react-router-dom";

export const Contact = (props: ContactFormProps) => {
  const [brand200] = useToken("colors", ["brand.200"]);

  return (
    <Box
      backgroundImage="url(/noise.png)"
      backgroundColor="rgba(5, 38, 23, 0.9)"
      backgroundBlendMode="darken"
      py="1"
    >
      <Stack w="100%" p="10" gap="6">
        <Stack
          p="6"
          px="8"
          rounded="md"
          align="center"
          direction="row"
          backgroundBlendMode="lighten"
          border={`solid 1px ${brand200}`}
          justifyContent="space-between"
          backgroundImage="url(/noise.png)"
          backgroundColor="rgba(244,245,241,0.9)"
          divider={<StackDivider borderColor="brand.800" />}
        >
          <Heading fontFamily="Jost" fontSize="xl">
            Want to know more? Get in touch
          </Heading>
          <Flex gap="2" align="center">
            <Icon w="5" h="5" as={BiLogoGmail} />
            <Link to="mailto:melbourneartnude@gmail.com">
              <Text>MELBOURNEARTNUDE@GMAIL.COM</Text>
            </Link>
          </Flex>
          <Flex gap="2" align="center">
            <Icon w="5" h="5" as={BiLogoInstagram} />
            <Text>@MELBOURNE_ART_NATURAL</Text>
          </Flex>
          <Flex gap="2" align="center">
            <Icon w="5" h="5" as={BiSolidPencil} />
            <Text>OR USE THE FORM BELOW...</Text>
          </Flex>
        </Stack>

        <Box>
          <Flex align="center" gap="5" pb="3">
            <Heading color="brand.100" minW="12%">
              Send an inquiry
            </Heading>
            <Divider borderColor="brand.100" />
          </Flex>

          <ContactForm {...props} />
        </Box>
      </Stack>
    </Box>
  );
};
