import * as React from "react";
import { Box } from "@chakra-ui/react";
import { SectionHeading } from "./SectionHeading";

interface SectionContainerProps extends React.PropsWithChildren {
  id?: string;
  label: string;
  colorScheme: "light" | "dark";
}

export const SectionContainer = (props: SectionContainerProps) => {
  const id = props.id || props.label.toLowerCase();
  return (
    <Box id={id} py="5" px="10">
      <SectionHeading {...props} />
      {props.children}
    </Box>
  );
};
