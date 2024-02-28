import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Nav() {
  return (
    <Flex
      py="5"
      px="10"
      w="100%"
      position="fixed"
      justify="space-between"
      color="white"
    >
      <Flex gap="3">
        <Link href="/about">About</Link>
        <Link href="/packages">Packages</Link>
      </Flex>
      <Link href="/">
        <Heading>Melbourne Art Natural</Heading>
      </Link>
      <Link href="/contact">Get In Touch</Link>
    </Flex>
  );
}
