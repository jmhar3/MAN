import * as React from "react";
import { Box, Flex, Heading, Img, Stack } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "../components/CarouselDots";
import { gallery } from "./Gallery";
import { useParams } from "react-router-dom";

export const GalleryView = () => {
  let { set: setLabel } = useParams();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, containScroll: false },
    [Autoplay()]
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const set = gallery.find((set) => set.label.toLowerCase() === setLabel);

  return (
    <Stack alignContent="space-between" justifyContent="space-between" h="98vh">
      <Heading>{set?.label}</Heading>

      <Stack gap="5" className="embla" align="center">
        <Box ref={emblaRef} className="embla__viewport" overflow="hidden">
          <Flex className="embla__container" align="flex-end">
            {set?.images.map((image, index) => (
              <Box
                pr="5"
                minW="0"
                className="embla__slide"
                flex={selectedIndex === index ? "0 0 55%" : "0 0 35%"}
              >
                <Img src={image} />
              </Box>
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
