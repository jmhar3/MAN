import * as React from "react";
import { AccordianItem, AccordianItemProps } from "../components/AccordianItem";

import {
  Text,
  Box,
  Stack,
  Heading,
  Divider,
  Accordion,
  AbsoluteCenter,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const policy: AccordianItemProps[] = [
  {
    label: "Cancellation Policy",
    info: "To cancel any shoot and receive a full refund you must allow at least 48hrs. This will allow us to fill an empty booking slot or arrange other work. If you cancel with less than 48hrs then your deposit will be deducted from anyone else's booking cost who may be filling your appointment.",
  },
];

const faqs: AccordianItemProps[] = [
  {
    label: "I'm not a professional model, but I would love to work with you!",
    info: "I photograph people all the time that have never done a professional photoshoot before. Some people just want to have a keepsake of themselves looking young and beautiful, or maybe they want to take some special photos for/with their partner. It doesn't matter too much the reason, I am always more than happy to photograph you even if it's your first time! I'm very friendly and very experienced at working with all kinds of people!",
    imageInfo:
      "Shown here are a few example photos of people who booked their first ever shoot with me.",
    images: ["image.png", "nature.png"],
  },
  {
    label: "What if I want to keep my identity hidden?",
    info: "I've had lots of conversations with people who love the idea of having their photo taken, but because of work, family or general privacy they didn't want their face or identity shown. Your comfort and safety is of paramount importance to me. I am absolutely happy to accomodate any requests you have regarding your privacy. I am happy to compose my images and pose you in a manner which conceals your face, I can hide tattoos or marks in post production and if you don't wish the images to be posted online then they will remain yours to do with as you please. I only post images that my clients and models have given me permission to post, so you will always have the final say.",
    imageInfo:
      "Featured here are several images taken for people who wished to have their face or identity kept private.",
    images: ["image.png", "nature.png"],
  },
  {
    label: "Where do the photos go after we take them?",
    info: "When you pay for a shoot these photos are yours to own. You can post them wherever you please(as long as you credit M.A.N and they abide by the platforms regulations...looking at you Instagram), but I will always make sure I have your permission to post online.",
  },
  {
    label: "Do you shoot with couples?",
    info: "Absolutely! Some of my favourite shoots have been taking capturing genuine and beautiful connections between people. It's something I love to photograph and it can be much easier to have your photograph taken when it's with someone you love and trust.",
    imageInfo:
      "Here's a few examples of some beautiful couples I've photographed:",
    images: ["image.png", "nature.png"],
  },
  {
    label: "What locations are available to shoot in?",
    info: "I have a limited home studio set up currently, and it is quite portable which works well for my love of natural light. However I always love shooting outdoors and in nature. I am also available to come to your home and photograph you there too if that makes the process easier for you. However this is dependant on you having at least one room or a suitable backyard with acceptable natural light.",
    imageInfo: "Here are several images taken in my home studio set up:",
    images: ["image.png", "nature.png"],
  },
];

export const AdditionalInfo = () => {
  return (
    <Stack p="10" pt="28" gap="10">
      <Box position="relative">
        <Divider borderColor="green.900" />
        <AbsoluteCenter bg="brand.white" px="4">
          <Heading>Policy</Heading>
        </AbsoluteCenter>
      </Box>

      <Accordion allowToggle={true} borderColor="brand.babyGreen">
        {policy.map((item) => (
          <AccordianItem {...item} />
        ))}
      </Accordion>

      <Box position="relative">
        <Divider borderColor="green.900" />
        <AbsoluteCenter bg="brand.white" px="4">
          <Heading>Frequently Asked Questions</Heading>
        </AbsoluteCenter>
      </Box>

      <Accordion allowToggle={true} borderColor="brand.babyGreen">
        {faqs.map((item) => (
          <AccordianItem {...item} />
        ))}
      </Accordion>

      <Stack align="center">
        <Heading>Have any other questions?</Heading>
        <Text fontSize="lg">
          Contact me with any and all queries you might have. No such thing as a
          dumb question!
        </Text>
        <Button
          mt="4"
          size="sm"
          as={Link}
          to="/#contact"
          variant="outline"
          bg="brand.white"
          color="green.900"
          borderColor="green.900"
          _hover={{
            bg: "green.900",
            color: "brand.white",
          }}
        >
          Get in touch
        </Button>
      </Stack>
    </Stack>
  );
};
