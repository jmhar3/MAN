import * as React from "react";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "../components/CarouselDots";
import { GalleryItem } from "../components/gallery/GalleryItem";

export interface Gallery {
  id: string;
  label: string;
  displayImage: string;
  images: Array<{ image: string; name: string; location?: string }>;
}

export const gallery: Gallery[] = [
  {
    id: "film",
    label: "35mm Film",
    displayImage: "/nature.png",
    images: [
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
    ],
  },
  {
    id: "light-retouching",
    label: "Light Retouching",
    displayImage: "/nature.png",
    images: [
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
    ],
  },
  {
    id: "complete-retouching",
    label: "Complete Retouching",
    displayImage: "/nature.png",
    images: [
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
    ],
  },
  {
    id: "shibari",
    label: "Shibari",
    displayImage: "/nature.png",
    images: [
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
      { image: "/nature.png", name: "Anna Kid" },
    ],
  },
];

export const Showcase = () => {
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
