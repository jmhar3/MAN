import * as React from "react";
import {
  Text,
  Box,
  Heading,
  useToken,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Img,
  Stack,
} from "@chakra-ui/react";

export interface AccordianItemProps {
  label: string;
  info: string;
  imageInfo?: string;
  images?: string[];
}

export const AccordianItem = (props: AccordianItemProps) => {
  const [babyGreen] = useToken("colors", ["brand.babyGreen"]);

  const { label, info, imageInfo, images } = props;

  return (
    <AccordionItem>
      <AccordionButton _expanded={{ borderBottom: `solid 1px ${babyGreen}` }}>
        <Box as="span" flex="1" textAlign="left">
          <Heading as="i" size="md" fontFamily="Jost">
            {label}
          </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Stack gap="3">
          <Text>{info}</Text>
          {imageInfo && <Text as="i">{imageInfo}</Text>}
          {images && (
            <Flex gap="5" overflow="scroll">
              {images.map((image) => (
                <Img src={image} w="sm" />
              ))}
            </Flex>
          )}
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  );
};
