import { Heading, Image, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack bg="teal.900" align="center">
      <Image
        m="2"
        w="99vw"
        h="99vh"
        rounded="90px"
        src="https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp"
      />
      <Heading position="fixed" bottom="21px" color="white">
        Melbourne Art Natural
      </Heading>
    </Stack>
  );
}
