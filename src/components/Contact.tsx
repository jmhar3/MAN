import * as React from "react";
import { EmailIcon } from "@chakra-ui/icons";
import emailjs from "@emailjs/browser";
import { ContactForm, ExtrasEnum, PackageEnum } from "../pages/Home";
import { BiLogoGmail, BiLogoInstagram, BiSolidPencil } from "react-icons/bi";

import {
  AbsoluteCenter,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
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

export const Contact = (props: ContactProps) => {
  const { contactForm, setContactForm } = props;

  const {
    name,
    email,
    message,
    instagram,
    extras = [],
    preferredPackage,
    preferredContactMethod,
  } = contactForm;

  const toast = useToast();
  const [brand200] = useToken("colors", ["brand.200"]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [emailError, setEmailError] = React.useState<string | null>(null);
  const [messageError, setMessageError] = React.useState<string | null>(null);

  const sendEmail = (e: React.SyntheticEvent) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    if (email === undefined || message === undefined) {
      email === undefined &&
        setEmailError("Enter the email you'd like to me to contact you on.");

      message === undefined &&
        setMessageError(
          "Enter a message including any questions or booking details."
        );

      return;
    }

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
          setContactForm({});
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

    setEmailError(null);
    setMessageError(null);
  };

  const editExtra = (altExtra: ExtrasEnum) => ({
    extras: extras.find((extra) => extra === altExtra)
      ? extras.filter((extra) => extra === altExtra)
      : [...extras, altExtra],
  });

  return (
    <Box bg="green.900" py="1">
      <Stack w="100%" p="10" gap="6">
        <Stack
          p="6"
          px="8"
          rounded="md"
          align="center"
          direction="row"
          backgroundBlendMode="lighten"
          border={`solid 1px ${brand200}`}
          justifyContent="space-between"
          backgroundImage="url(/noise.png)"
          backgroundColor="rgba(244,245,241,0.9)"
          divider={<StackDivider borderColor="brand.800" />}
        >
          <Heading fontFamily="Jost" fontSize="xl">
            Want to know more? Get in touch
          </Heading>
          <Flex gap="3" align="center">
            <BiLogoGmail />
            <Text>NOAH@MELBOURNEARTNATURAL.COM</Text>
          </Flex>
          <Flex gap="3" align="center">
            <BiLogoInstagram />
            <Text>@MELBOURNEARTNATURAL</Text>
          </Flex>
          <Flex gap="3" align="center">
            <BiSolidPencil />
            <Text>OR USE THE FORM BELOW...</Text>
          </Flex>
        </Stack>

        <Box>
          <Flex align="center" gap="5" pb="3">
            <Heading color="brand.100" minW="12%">
              Send an inquiry
            </Heading>
            <Divider borderColor="brand.100" />
          </Flex>

          <FormControl>
            <Stack
              py="3"
              gap="6"
              divider={<StackDivider borderColor="brand.800" />}
            >
              <Stack direction="row" gap="0" justifyContent="space-between">
                <FormLabel color="brand.100">Preferred Name</FormLabel>
                <Input
                  type="name"
                  bg="brand.100"
                  maxW="60%"
                  border="0"
                  value={name}
                  onChange={(e) =>
                    setContactForm((data: ContactForm) => ({
                      ...data,
                      name: e.target.value,
                    }))
                  }
                />
              </Stack>

              <Stack gap="5">
                <Stack gap="0" direction="row" justifyContent="space-between">
                  <FormLabel color="brand.100">
                    Preferred Contact Method
                  </FormLabel>

                  <ButtonGroup size="sm" variant="outline">
                    <FormButton
                      {...props}
                      label="Email"
                      newFormData={{ preferredContactMethod: "email" }}
                      isSelected={preferredContactMethod === "email"}
                    />
                    <FormButton
                      {...props}
                      label="Instagram"
                      newFormData={{ preferredContactMethod: "instagram" }}
                      isSelected={preferredContactMethod === "instagram"}
                    />
                  </ButtonGroup>
                </Stack>

                <Stack direction="row" gap="0" justifyContent="space-between">
                  <FormLabel color="brand.100">Instagram Username</FormLabel>
                  <Stack gap="0" minW="60%">
                    <Input
                      bg="brand.100"
                      value={instagram}
                      onChange={(e) =>
                        setContactForm((data: ContactForm) => ({
                          ...data,
                          instagram: e.target.value,
                        }))
                      }
                    />
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
                    {emailError && (
                      <FormHelperText color="brand.100">
                        {emailError}
                      </FormHelperText>
                    )}
                  </Stack>
                </Stack>
              </Stack>

              <Stack>
                <Stack direction="row" gap="0" justifyContent="space-between">
                  <FormLabel color="brand.100">Preferred Package</FormLabel>
                  <ButtonGroup size="sm" variant="outline">
                    <FormButton
                      {...props}
                      label="Digital"
                      newFormData={{ preferredPackage: PackageEnum.Digital }}
                      isSelected={preferredPackage === "digital"}
                    />
                    <FormButton
                      {...props}
                      label="Film"
                      newFormData={{ preferredPackage: PackageEnum.Film }}
                      isSelected={preferredPackage === "film"}
                    />
                    <FormButton
                      {...props}
                      label="Complete"
                      newFormData={{ preferredPackage: PackageEnum.Complete }}
                      isSelected={preferredPackage === "complete"}
                    />
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
                    {messageError && (
                      <FormHelperText color="brand.100">
                        {messageError}
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
                    <FormButton
                      {...props}
                      label="Roll of film"
                      newFormData={editExtra(ExtrasEnum.Film)}
                      isSelected={extras.includes(ExtrasEnum.Film)}
                    />
                    <FormButton
                      {...props}
                      label="30 mins extension"
                      newFormData={editExtra(ExtrasEnum.Extension)}
                      isSelected={extras.includes(ExtrasEnum.Extension)}
                    />
                    <FormButton
                      {...props}
                      label="Additional edits"
                      newFormData={editExtra(ExtrasEnum.Edits)}
                      isSelected={extras.includes(ExtrasEnum.Edits)}
                    />
                    <FormButton
                      {...props}
                      label="All RAWs"
                      newFormData={editExtra(ExtrasEnum.Raws)}
                      isSelected={extras.includes(ExtrasEnum.Raws)}
                    />
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

interface FormButtonProps extends ContactProps {
  newFormData: { [key: string]: string | string[] };
  isSelected: boolean;
  label: string;
}

const FormButton = (props: FormButtonProps) => (
  <Button
    rounded="full"
    onClick={() =>
      props.setContactForm((data) => ({
        ...data,
        ...props.newFormData,
      }))
    }
    bg={props.isSelected ? "brand.200" : "green.900"}
    color={props.isSelected ? "green.900" : "brand.200"}
    _hover={{ bg: "brand.200", color: "green.900" }}
  >
    {props.label}
  </Button>
);
