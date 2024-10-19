import * as React from "react";
import { EmailIcon } from "@chakra-ui/icons";
import emailjs from "@emailjs/browser";
import { ContactForm } from "../pages/Home";

import {
  AbsoluteCenter,
  Box,
  Button,
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
  const { email, message, preferredPackage } = contactForm;

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
          setContactForm({ email: "" });
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
      <Flex w="100%" p="10" gap="10">
        <Stack border={`solid 1px ${brand200}`} w="25%" rounded="md">
          <Text>Email</Text>
        </Stack>

        <Box w="75%">
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
                  <RadioGroup defaultValue="2">
                    <Stack spacing={5} direction="row">
                      <Radio colorScheme="red" value="email">
                        <Text color="brand.100">Email</Text>
                      </Radio>
                      <Radio colorScheme="red" value="instagram">
                        <Text color="brand.100">Instagram</Text>
                      </Radio>
                    </Stack>
                  </RadioGroup>
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
                  <RadioGroup defaultValue="2" value={preferredPackage}>
                    <Stack spacing={5} direction="row">
                      <Radio colorScheme="red" value="digital">
                        <Text color="brand.100">Digital</Text>
                      </Radio>
                      <Radio colorScheme="red" value="film">
                        <Text color="brand.100">Film</Text>
                      </Radio>
                      <Radio colorScheme="red" value="complete">
                        <Text color="brand.100">Complete</Text>
                      </Radio>
                    </Stack>
                  </RadioGroup>
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
                  <Stack spacing={5} direction="row">
                    <Checkbox colorScheme="red" value="film">
                      <Text color="brand.100">Film</Text>
                    </Checkbox>
                    <Checkbox colorScheme="red" value="extension">
                      <Text color="brand.100">30 min extension</Text>
                    </Checkbox>
                    <Checkbox colorScheme="red" value="additional edits">
                      <Text color="brand.100">Additional edits</Text>
                    </Checkbox>
                    <Checkbox colorScheme="red" value="RAWs">
                      <Text color="brand.100">All RAWs</Text>
                    </Checkbox>
                  </Stack>
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
      </Flex>
    </Box>
  );
};
