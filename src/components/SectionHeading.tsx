import { AbsoluteCenter, Box, Divider, Heading } from "@chakra-ui/react";

interface SectionHeadingProps {
  label: string;
  colorScheme: "light" | "dark";
}
export const SectionHeading = (props: SectionHeadingProps) => {
  const { colorScheme, label } = props;

  return (
    <Box position="relative" py="10">
      <Divider borderColor="green.900" />
      <AbsoluteCenter
        backgroundImage="url(/noise.png)"
        backgroundColor="rgba(244,245,241,0.9)"
        backgroundBlendMode="lighten"
        px="4"
      >
        <Heading color="green.900">{label}</Heading>
      </AbsoluteCenter>
    </Box>
  );
};
