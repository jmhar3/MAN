import { Box } from "@chakra-ui/react";

export const Bumper = (props: { id: string }) => {
  return (
    <Box
      id={props.id}
      height="64px"
      display="block"
      marginTop="-64px"
      visibility="hidden"
    />
  );
};
