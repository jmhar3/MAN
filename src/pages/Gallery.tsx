import * as React from "react";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "../components/CarouselDots";
import { GalleryItem } from "../components/GalleryItem";

import { EmblaCarouselType, EmblaEventType } from "embla-carousel";

const gallery = [
  {
    label: "Film",
    displayImage: "/nature.png",
    images: ["/nature.png"],
  },
  {
    label: "Light Retouching",
    displayImage: "/nature.png",
    images: ["/nature.png"],
  },
  {
    label: "Complete Retouching",
    displayImage: "/nature.png",
    images: ["/nature.png"],
  },
  ,
  {
    label: "Shibari",
    displayImage: "/nature.png",
    images: ["/nature.png"],
  },
];

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export const Gallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, containScroll: false },
    [Autoplay()]
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <Stack alignContent="space-between" justifyContent="space-between" h="98vh">
      <Heading>Gallery</Heading>

      <Stack gap="5" className="embla">
        <Box ref={emblaRef} className="embla__viewport" overflow="hidden">
          <Flex className="embla__container" align="flex-end">
            {gallery.map(
              (set, index) =>
                set && (
                  <GalleryItem {...set} isFocused={selectedIndex === index} />
                )
            )}
          </Flex>
        </Box>

        <Flex className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              isSelected={index === selectedIndex}
              onClick={() => onDotButtonClick(index)}
              className="embla__dot"
            />
          ))}
        </Flex>
      </Stack>
    </Stack>
  );
};
