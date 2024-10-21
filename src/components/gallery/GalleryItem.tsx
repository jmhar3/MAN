import * as React from "react";
import { Box, Img, Stack, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Gallery } from "../../pages/Showcase";

export interface GalleryItemProps extends Gallery {
  isFocused: boolean;
}

export const GalleryItem = (props: GalleryItemProps) => {
  return (
    <Box
      pr="5"
      minW="0"
      as={Link}
      className="embla__slide"
      to={`/gallery/${props.id}`}
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
          fontSize="2xl"
          fontFamily="Jost"
          _firstLetter={{
            mr: "-0.5",
            fontSize: "5xl",
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
