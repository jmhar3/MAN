import { AbsoluteCenter, Box, Divider, Heading } from "@chakra-ui/react";

interface SectionHeadingProps {
  label: string;
  colorScheme: "light" | "dark";
}
export const SectionHeading = (props: SectionHeadingProps) => {
  const { colorScheme, label } = props;

  return (
    <Box position="relative" py="10">
      <Divider
        borderColor={colorScheme === "light" ? "green.900" : "brand.100"}
      />
      <AbsoluteCenter
        bg={colorScheme === "light" ? "brand.100" : "green.900"}
        px="4"
      >
        <Heading color={colorScheme === "light" ? "green.900" : "brand.100"}>
          {label}
        </Heading>
      </AbsoluteCenter>
    </Box>
  );
};
