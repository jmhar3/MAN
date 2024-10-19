import * as React from "react";
import { Box, Img, Stack, Heading } from "@chakra-ui/react";

export interface GalleryItemProps {
  label: string;
  displayImage: string;
  images: string[];
  isFocused: boolean;
}

export const GalleryItem = (props: GalleryItemProps) => {
  return (
    <Box
      className="embla__slide"
      minW="0"
      pr="5"
      flex={props.isFocused ? "0 0 60%" : "0 0 40%"}
    >
      <Stack
        className="embla__slide__container"
        flex="0 0 50%"
        minW="0"
        gap="3"
      >
        <Heading
          as="i"
          size="lg"
          fontFamily="Jost"
          _firstLetter={{
            mr: "-0.5",
            fontSize: "6xl",
            fontFamily: "Imperial Script",
            fontStyle: "normal",
          }}
        >
          {props.label}
        </Heading>
        <Img src={props.displayImage} />
      </Stack>
    </Box>
  );
};
