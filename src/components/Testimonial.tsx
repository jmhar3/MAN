import * as React from "react";
import { Heading, Img, Stack, Text } from "@chakra-ui/react";

interface TestimonialProps {
  image: string;
  name: string;
  testimonial: string;
}
export const Testimonial = (props: TestimonialProps) => {
  return (
    <Stack>
      <Img src={props.image} />
      <Heading>{props.name}</Heading>
      <Text>{props.testimonial}</Text>
    </Stack>
  );
};
