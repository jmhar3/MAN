import * as React from "react";
import { EmailIcon } from "@chakra-ui/icons";
import emailjs from "@emailjs/browser";
import { ContactForm, ExtrasEnum, PackageEnum } from "../pages/Home";

import {
  AbsoluteCenter,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  StackDivider,
  Text,
  Textarea,
  useToast,
  useToken,
} from "@chakra-ui/react";

export interface ContactProps {
  contactForm: ContactForm;
  setContactForm: React.Dispatch<React.SetStateAction<ContactForm>>;
}

export const Contact = ({ contactForm, setContactForm }: ContactProps) => {
  const { extras, email, message, preferredPackage, preferredContactMethod } =
    contactForm;

  const toast = useToast();
  const [brand200] = useToken("colors", ["brand.200"]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const isEmailError = email?.length === 0;
  const isMessageError = message?.length === 0;

  const sendEmail = (e: React.SyntheticEvent) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_TEMPLATE_ID!,
        email,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result);
          toast({
            title: "Message sent!",
            status: "success",
            duration: 5000,
          });
          setIsSubmitting(false);
          setContactForm({ email: "", extras: [] });
        },
        (error) => {
          console.error(error);
          toast({
            title: "Something went wrong",
            description: "Please try emailing or DMing me",
            status: "error",
            duration: 5000,
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <Box bg="green.900" id="contact" py="1">
      <Stack w="100%" p="10" gap="6">
        <Flex
          p="6"
          px="8"
          rounded="md"
          align="center"
          justifyContent="space-between"
          backgroundImage="url(/noise.png)"
          backgroundColor="rgba(244,245,241,0.9)"
          backgroundBlendMode="lighten"
          border={`solid 1px ${brand200}`}
        >
          <Heading fontFamily="Jost" fontSize="xl">
            Want to know more? Get in touch
          </Heading>
          <Flex gap="3" align="center">
            <EmailIcon />
            <Text>NOAH@MELBOURNEARTNATURAL.COM</Text>
          </Flex>
          <Flex gap="3" align="center">
            <EmailIcon />
            <Text>@MELBOURNEARTNATURAL</Text>
          </Flex>
          <Flex gap="3" align="center">
            <EmailIcon />
            <Text>OR USE THE FORM BELOW...</Text>
          </Flex>
        </Flex>

        <Box>
          <Flex align="center" gap="5" pb="3">
            <Heading color="brand.100">Contact</Heading>
            <Divider borderColor="brand.100" />
          </Flex>

          <FormControl isInvalid={isEmailError || isMessageError}>
            <Stack
              py="3"
              gap="6"
              divider={<StackDivider borderColor="brand.800" />}
            >
              <Stack direction="row" gap="0" justifyContent="space-between">
                <FormLabel color="brand.100">Preferred Name</FormLabel>
                <Input type="name" bg="brand.100" maxW="60%" />
              </Stack>

              <Stack gap="5">
                <Stack gap="0" direction="row" justifyContent="space-between">
                  <FormLabel color="brand.100">
                    Preferred Contact Method
                  </FormLabel>

                  <ButtonGroup size="sm" isAttached variant="outline">
                    <Button
                      onClick={() =>
                        setContactForm((data) => ({
                          ...data,
                          preferredContactMethod: "email",
                        }))
                      }
                      bg={
                        preferredContactMethod === "email"
                          ? "brand.200"
                          : "green.900"
                      }
                      color={
                        preferredContactMethod === "email"
                          ? "green.900"
                          : "brand.200"
                      }
                      _hover={{ bg: "brand.200", color: "green.900" }}
                    >
                      Email
                    </Button>

                    <Button
                      onClick={() =>
                        setContactForm((data) => ({
                          ...data,
                          preferredContactMethod: "instagram",
                        }))
                      }
                      bg={
                        preferredContactMethod === "instagram"
                          ? "brand.200"
                          : "green.900"
                      }
                      color={
                        preferredContactMethod === "instagram"
                          ? "green.900"
                          : "brand.200"
                      }
                      _hover={{ bg: "brand.200", color: "green.900" }}
                    >
                      Instagram
                    </Button>
                  </ButtonGroup>
                </Stack>

                <Stack direction="row" gap="0" justifyContent="space-between">
                  <FormLabel color="brand.100">Instagram Username</FormLabel>
                  <Stack gap="0" minW="60%">
                    <Input bg="brand.100" />
                  </Stack>
                </Stack>

                <Stack direction="row" gap="0" justifyContent="space-between">
                  <FormLabel color="brand.100">Email *</FormLabel>
                  <Stack gap="0" minW="60%">
                    <Input
                      bg="brand.100"
                      type="email"
                      value={email}
                      onChange={(e) =>
                        setContactForm((data: ContactForm) => ({
                          ...data,
                          email: e.target.value,
                        }))
                      }
                    />
                    {isEmailError && (
                      <FormHelperText color="brand.100">
                        Enter the email you'd like to me to contact you on.
                      </FormHelperText>
                    )}
                  </Stack>
                </Stack>
              </Stack>

              <Stack>
                <Stack direction="row" gap="0" justifyContent="space-between">
                  <FormLabel color="brand.100">Preferred Package</FormLabel>
                  <ButtonGroup size="sm" variant="outline">
                    <Button
                      onClick={() =>
                        setContactForm((data) => ({
                          ...data,
                          preferredPackage: PackageEnum.Digital,
                        }))
                      }
                      bg={
                        preferredPackage === "digital"
                          ? "brand.200"
                          : "green.900"
                      }
                      color={
                        preferredPackage === "digital"
                          ? "green.900"
                          : "brand.200"
                      }
                      _hover={{ bg: "brand.200", color: "green.900" }}
                    >
                      Digital
                    </Button>

                    <Button
                      onClick={() =>
                        setContactForm((data) => ({
                          ...data,
                          preferredPackage: PackageEnum.Film,
                        }))
                      }
                      bg={
                        preferredPackage === "film" ? "brand.200" : "green.900"
                      }
                      color={
                        preferredPackage === "film" ? "green.900" : "brand.200"
                      }
                      _hover={{ bg: "brand.200", color: "green.900" }}
                    >
                      Film
                    </Button>

                    <Button
                      onClick={() =>
                        setContactForm((data) => ({
                          ...data,
                          preferredPackage: PackageEnum.Complete,
                        }))
                      }
                      bg={
                        preferredPackage === "complete"
                          ? "brand.200"
                          : "green.900"
                      }
                      color={
                        preferredPackage === "complete"
                          ? "green.900"
                          : "brand.200"
                      }
                      _hover={{ bg: "brand.200", color: "green.900" }}
                    >
                      Complete
                    </Button>
                  </ButtonGroup>
                </Stack>

                <Stack direction="row" gap="0" justifyContent="space-between">
                  <FormLabel color="brand.100">Message *</FormLabel>
                  <Stack gap="0" minW="60%">
                    <Textarea
                      bg="brand.100"
                      value={message}
                      onChange={(e) =>
                        setContactForm((data: ContactForm) => ({
                          ...data,
                          message: e.target.value,
                        }))
                      }
                    />
                    {isMessageError && (
                      <FormHelperText color="brand.100">
                        Enter a message including any questions or booking
                        details.
                      </FormHelperText>
                    )}
                  </Stack>
                </Stack>

                <Stack
                  pt="3"
                  direction="row"
                  gap="0"
                  justifyContent="space-between"
                >
                  <FormLabel color="brand.100">Interested in extras</FormLabel>
                  <ButtonGroup size="sm" variant="outline">
                    <Button
                      bg={
                        extras.find((extra) => extra === "film")
                          ? "brand.200"
                          : "green.900"
                      }
                      color={
                        extras.find((extra) => extra === "film")
                          ? "green.900"
                          : "brand.200"
                      }
                      _hover={{ bg: "brand.200", color: "green.900" }}
                    >
                      Digital
                    </Button>

                    <Button
                      bg={
                        extras.find((extra) => extra === "extension")
                          ? "brand.200"
                          : "green.900"
                      }
                      color={
                        extras.find((extra) => extra === "extension")
                          ? "green.900"
                          : "brand.200"
                      }
                      _hover={{ bg: "brand.200", color: "green.900" }}
                    >
                      30 mins extension
                    </Button>

                    <Button
                      bg={
                        extras.find((extra) => extra === "edits")
                          ? "brand.200"
                          : "green.900"
                      }
                      color={
                        extras.find((extra) => extra === "edits")
                          ? "green.900"
                          : "brand.200"
                      }
                      _hover={{ bg: "brand.200", color: "green.900" }}
                    >
                      Additional edits
                    </Button>

                    <Button
                      bg={
                        extras.find((extra) => extra === "raws")
                          ? "brand.200"
                          : "green.900"
                      }
                      color={
                        extras.find((extra) => extra === "raws")
                          ? "green.900"
                          : "brand.200"
                      }
                      _hover={{ bg: "brand.200", color: "green.900" }}
                    >
                      All RAWs
                    </Button>
                  </ButtonGroup>
                </Stack>
              </Stack>
            </Stack>

            <Box position="relative">
              <Divider borderColor="brand.100" />
              <AbsoluteCenter bg="green.900" px="4">
                <Button
                  type="submit"
                  bg="brand.200"
                  onSubmit={sendEmail}
                  isLoading={isSubmitting}
                  loadingText="Submitting"
                  leftIcon={<EmailIcon />}
                  _hover={{ bg: "brand.400" }}
                >
                  Send Message
                </Button>
              </AbsoluteCenter>
            </Box>
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
};
