import * as React from "react";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "../components/CarouselDots";
import { GalleryItem } from "../components/GalleryItem";

export const gallery = [
  {
    id: "film",
    label: "Film",
    displayImage: "/nature.png",
    images: [
      "/nature.png",
      "/nature.png",
      "/nature.png",
      "/nature.png",
      "/nature.png",
      "/nature.png",
      "/nature.png",
    ],
  },
  {
    id: "light-retouching",
    label: "Light Retouching",
    displayImage: "/nature.png",
    images: [
      "/nature.png",
      "/nature.png",
      "/nature.png",
      "/nature.png",
      "/nature.png",
      "/nature.png",
      "/nature.png",
    ],
  },
  {
    id: "complete-retouching",
    label: "Complete Retouching",
    displayImage: "/nature.png",
    images: [
      "/nature.png",
      "/nature.png",
      "/nature.png",
      "/nature.png",
      "/nature.png",
      "/nature.png",
      "/nature.png",
    ],
  },
  {
    id: "shibari",
    label: "Shibari",
    displayImage: "/nature.png",
    images: [
      "/nature.png",
      "/nature.png",
      "/nature.png",
      "/nature.png",
      "/nature.png",
      "/nature.png",
      "/nature.png",
    ],
  },
];

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

      <Stack gap="5" className="embla" align="center">
        <Box ref={emblaRef} className="embla__viewport" overflow="hidden">
          <Flex className="embla__container" align="flex-end">
            {gallery.map((set, index) => (
              <GalleryItem {...set} isFocused={selectedIndex === index} />
            ))}
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
