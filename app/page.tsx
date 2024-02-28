import { Image, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack bg="teal.900" align="center">
      <Image
        w="100vw"
        h="99vh"
        rounded="3xl"
        src="https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp"
      />
    </Stack>
  );
}
