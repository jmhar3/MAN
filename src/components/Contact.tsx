import * as React from "react";
import { BiLogoGmail, BiLogoInstagram, BiSolidPhone } from "react-icons/bi";

import {
  Box,
  Button,
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
import { InfoOutlineIcon } from "@chakra-ui/icons";

export const Contact = (props: ContactFormProps) => {
  const [white] = useToken("colors", ["brand.white", "green.900"]);

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
          border={`solid 1px ${white}`}
          justifyContent="space-between"
          backgroundImage="url(/noise.png)"
          backgroundColor="rgba(244,245,241,0.9)"
          divider={<StackDivider borderColor="brand.babyGreen" />}
        >
          <Heading fontFamily="Jost" fontSize="xl">
            Want to know more? Get in touch
          </Heading>
          <Link to="mailto:melbourneartnude@gmail.com">
            <Flex gap="2" align="center">
              <Icon w="5" h="5" as={BiLogoGmail} />
              <Text>MELBOURNEARTNUDE@GMAIL.COM</Text>
            </Flex>
          </Link>
          <Link to="https://www.instagram.com/melbourne_art_natural">
            <Flex gap="2" align="center">
              <Icon w="5" h="5" as={BiLogoInstagram} />
              <Text>@MELBOURNE_ART_NATURAL</Text>
            </Flex>
          </Link>
          <Link to="tel:0425870771">
            <Flex gap="2" align="center">
              <Icon w="5" h="5" as={BiSolidPhone} />
              <Text>0425 870 771</Text>
            </Flex>
          </Link>
        </Stack>

        <Box>
          <Flex align="center" gap="5" pb="3">
            <Heading color="brand.white" minW="12%">
              Send an inquiry
            </Heading>
            <Divider borderColor="brand.white" />
            <Button
              w="15%"
              as={Link}
              to="/info"
              bg="none"
              color="brand.white"
              leftIcon={<InfoOutlineIcon />}
              border={`solid 1px ${white}`}
              _hover={{
                bg: "brand.white",
                color: "green.900",
              }}
            >
              Booking policy
            </Button>
          </Flex>

          <ContactForm {...props} />
        </Box>
      </Stack>
    </Box>
  );
};
