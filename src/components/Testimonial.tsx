import * as React from "react";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";

interface TestimonialProps {
  image: string;
  name: string;
  testimonial: string;
}
export const Testimonial = (props: TestimonialProps) => {
  return (
    <Stack className="embla__slide" flex="0 0 39%" minW="0">
      <Img src={props.image} />
      <Flex align="center">
        <Heading w="50%">{props.name}</Heading>
        <Divider borderColor="brand.800" />
      </Flex>
      <Text>{props.testimonial}</Text>
    </Stack>
  );
};
