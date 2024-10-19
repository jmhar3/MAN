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
      pr="5"
      minW="0"
      className="embla__slide"
      flex={props.isFocused ? "0 0 55%" : "0 0 35%"}
    >
      <Stack
        className="embla__slide__container"
        flex="0 0 50%"
        minW="0"
        gap="1"
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
