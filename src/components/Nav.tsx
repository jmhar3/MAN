"use client";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Box,
  Flex,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Link as ChakraLink,
  useToken,
} from "@chakra-ui/react";

const Links = ["About", "Packages", "Info", "Testimonials", "Gallery"];

interface NavLinkProps {
  label: string;
}

const NavLink = (props: NavLinkProps) => {
  const { label } = props;
  return (
    <ChakraLink
      px={2}
      py={1}
      color="green.900"
      as={ReactRouterLink}
      to={
        label === "Gallery"
          ? `/${label.toLowerCase()}`
          : `/#${label.toLowerCase()}`
      }
      _hover={{
        textDecoration: "none",
        borderBottom: "1px solid green",
      }}
    >
      {label}
    </ChakraLink>
  );
};

export const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [green900] = useToken("colors", ["green.900"]);

  return (
    <Box
      px="4"
      top="0"
      left="0"
      w="100%"
      position="fixed"
      bg="brand.100"
      zIndex="999"
      borderBottom={`solid 1px ${green900}`}
    >
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
          <Button
            as={ReactRouterLink}
            to="/#contact "
            variant="outline"
            color="green.900"
            borderColor="green.900"
            _hover={{
              bg: "green.900",
              color: "brand.200",
            }}
            size="sm"
            mr={4}
          >
            Get in touch
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
