import * as React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { SectionHeading } from "./SectionHeading";
import { SectionContainer } from "./SectionContainer";
import { Testimonial } from "./Testimonial";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    image: "/nature.png",
    name: "Misty Rising",
    testimonial:
      "Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: "/nature.png",
    name: "Anna Kid",
    testimonial:
      "Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: "/nature.png",
    name: "Lulu Reynolds",
    testimonial:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: "/nature.png",
    name: "Riley Reid",
    testimonial:
      "Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: "/nature.png",
    name: "Olivia Bubbles",
    testimonial:
      "Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({}, [Autoplay()]);

  return (
    <SectionContainer label="Testimonials" colorScheme="light">
      <Box ref={emblaRef} className="embla" overflow="hidden" pb="5">
        <Flex className="embla__container" gap="8">
          {testimonials.map((testimonial) => (
            <Testimonial {...testimonial} />
          ))}
        </Flex>
      </Box>
    </SectionContainer>
  );
};
