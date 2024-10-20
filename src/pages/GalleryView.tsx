import * as React from "react";
import { Box, Flex, Heading, Img, Stack, Text } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { gallery } from "./Showcase";
import { useParams } from "react-router-dom";
import { ImageModal } from "../components/gallery/ImageModal";

export const GalleryView = () => {
  let { set: params } = useParams();

  const [emblaRef] = useEmblaCarousel({ loop: true, axis: "y" }, [Autoplay()]);

  const set = gallery.find((set) => set.id === params);

  return (
    <Flex alignContent="space-between" justifyContent="space-between" h="98vh">
      <Heading pt="28" pl="10">
        {set?.label}
      </Heading>

      <Text position="fixed" bottom="10" left="10" w="30vw">
        This is a description about this photo set. Additional information is
        able to be displayed here. This is a description about this photo set.
        Additional information is able to be displayed here. This is a
        description about this photo set. Additional information is able to be
        displayed here. This is a description about this photo set. Additional
        information is able to be displayed here. This is a description about
        this photo set. Additional information is able to be displayed here.
      </Text>

      <Flex gap="5" className="embla" align="center" overflow="hidden">
        <Box ref={emblaRef} className="embla__viewport" overflow="hidden">
          <Stack className="embla__container" align="flex-end" w="30vw">
            {set?.images.map((imageData) => (
              <Box pr="5" minW="0" className="embla__slide">
                <ImageModal {...imageData} />
              </Box>
            ))}
          </Stack>
        </Box>

        <Box ref={emblaRef} className="embla__viewport" overflow="hidden">
          <Stack className="embla__container" align="flex-end" w="30vw">
            {set?.images.map((imageData) => (
              <Box pr="5" minW="0" className="embla__slide">
                <ImageModal {...imageData} />
              </Box>
            ))}
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};
