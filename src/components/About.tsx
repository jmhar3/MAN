import * as React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Img,
  Stack,
  Text,
  useToken,
} from "@chakra-ui/react";
import { Info } from "./Info";
import { Link } from "react-router-dom";
import { InfoOutlineIcon } from "@chakra-ui/icons";

export const About = () => {
  const [green900] = useToken("colors", ["green.900"]);

  return (
    <Flex gap="6" px="10" pt="10">
      <Img src="/m.a.n.png" w="lg" />

      <Stack>
        <Flex align="center" gap="5" pb="3">
          <Heading color="green.900" w="20%">
            Who am I?
          </Heading>
          <Divider borderColor="green.900" />
        </Flex>

        <Text>I am a young male photographer from Victoria, Australia.</Text>

        <Text>
          I aim to look underneath at what makes us all human and what brings us
          together, rather than what divides us. Through the medium of
          photography I aim to start a dialogue about mental health, nudity and
          sexuality. Specialising in natural and available light portraits I aim
          to keep my aesthetic raw and organic.
        </Text>

        <Text>
          Underneath our clothes, on the inside, we are all the human. We think,
          we feel and we struggle sometimes. The images shown here are designed
          to invoke a sense of similarity and variety simultaneously. Yes we all
          look different, some of us are thin, some of us are thick, some of us
          are pale and some are dark; we are all shades and shapes, but we all
          are human.
        </Text>

        <Text>
          Having taken up photography around the age of 14, I have over a decade
          of experience behind the camera. Starting off with landscapes and
          street photography at a young age before moving into portraiture as an
          adult, I have a range of styles at my disposal.
        </Text>

        <Text>
          Having worked in the lighting department in film + TV for several
          years, I have a keen eye and understanding for how to identify and
          shape light. I bring that knowledge to set along with excellent people
          skills that allows anyone to feel comfortable in front of the lens.
        </Text>

        <Info />

        <Box mt="3" textAlign="right">
          <Button
            as={Link}
            to="/info"
            bg="brand.white"
            w="fit-content"
            color="green.900"
            leftIcon={<InfoOutlineIcon />}
            border={`solid 1px ${green900}`}
            _hover={{
              bg: "green.900",
              color: "brand.white",
            }}
          >
            Find out more
          </Button>
        </Box>
      </Stack>
    </Flex>
  );
};
