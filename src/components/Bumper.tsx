import { Box } from "@chakra-ui/react";

export const Bumper = (props: { id: string }) => {
  return (
    <Box
      id={props.id}
      height="66px"
      display="block"
      marginTop="-66px"
      visibility="hidden"
    />
  );
};
