"use client";

import {
  Box,
  Flex,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

const Links = [
  "About",
  "Contact",
  "Packages",
  "Info",
  "Testimonials",
  "Gallery",
];

interface NavLinkProps {
  label: string;
}

const NavLink = (props: NavLinkProps) => {
  const { label } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={`/#${label.toLowerCase()}`}
    >
      {label}
    </Box>
  );
};

export const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={4}>
      <Flex p="4" alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Stack
          direction="row"
          as="nav"
          spacing={4}
          display={{ base: "none", md: "flex" }}
        >
          {Links.map((link) => (
            <NavLink key={link} label={link} />
          ))}
        </Stack>
        <Flex alignItems="center">
          <Button variant="solid" colorScheme="teal" size="sm" mr={4}>
            Contact
          </Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
              <NavLink key={link} label={link} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
