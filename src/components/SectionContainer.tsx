import * as React from "react";
import { Box } from "@chakra-ui/react";
import { SectionHeading } from "./SectionHeading";

interface SectionContainerProps extends React.PropsWithChildren {
  label: string;
  colorScheme: "light" | "dark";
}

export const SectionContainer = (props: SectionContainerProps) => {
  return (
    <Box id={props.label.toLowerCase()} py="5" px="10">
      <SectionHeading {...props} />
      {props.children}
    </Box>
  );
};
