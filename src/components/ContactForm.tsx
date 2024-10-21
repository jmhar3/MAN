import * as React from "react";
import emailjs from "@emailjs/browser";
import { EmailIcon } from "@chakra-ui/icons";
import { ContactFormType, ExtrasEnum, PackageEnum } from "../pages/Home";
import { FormButton } from "./FormButton";

import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  StackDivider,
  Textarea,
  useToast,
} from "@chakra-ui/react";

export interface ContactFormProps {
  contactForm: ContactFormType;
  setContactForm: React.Dispatch<React.SetStateAction<ContactFormType>>;
}

export const ContactForm = (props: ContactFormProps) => {
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
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [emailError, setEmailError] = React.useState<string | null>(null);
  const [messageError, setMessageError] = React.useState<string | null>(null);
  const [instagramError, setInstagramError] = React.useState<string | null>(
    null
  );

  const instagramIsRequired =
    preferredContactMethod === "instagram" && instagram === undefined;

  const sendEmail = (e: React.SyntheticEvent) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    console.log(contactForm);

    if (email === undefined || message === undefined || instagramIsRequired) {
      instagramIsRequired &&
        setInstagramError(
          "Enter the Instagram username you'd like to me to contact you at"
        );

      email === undefined &&
        setEmailError(
          preferredContactMethod === "instagram"
            ? "Email is required regardless of preferred contact method"
            : "Enter the email you'd like to me to contact you on"
        );

      message === undefined &&
        setMessageError(
          "Please include any and all queries you might have. No such thing as a dumb question!"
        );

      setIsSubmitting(false);
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
            title: "Failed to send",
            description: "Please try emailing or DMing me",
            status: "error",
            duration: 5000,
          });
          setIsSubmitting(false);
        }
      );
  };

  const editExtra = (altExtra: ExtrasEnum) => ({
    extras: extras.find((extra) => extra === altExtra)
      ? extras.filter((extra) => extra !== altExtra)
      : [...extras, altExtra],
  });

  return (
    <FormControl>
      <Stack
        py="3"
        gap="6"
        divider={<StackDivider borderColor="brand.babyGreen" />}
      >
        <Stack direction="row" gap="0" justifyContent="space-between">
          <FormLabel color="brand.white">Preferred Name</FormLabel>
          <Input
            type="name"
            bg="brand.white"
            maxW="60%"
            value={name}
            onChange={(e) =>
              setContactForm((data: ContactFormType) => ({
                ...data,
                name: e.target.value,
              }))
            }
          />
        </Stack>

        <Stack gap="5">
          <Stack gap="0" direction="row" justifyContent="space-between">
            <FormLabel color="brand.white">Preferred Contact Method</FormLabel>

            <Box w="60%">
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
            </Box>
          </Stack>

          <Stack direction="row" gap="0" justifyContent="space-between">
            <FormLabel color="brand.white">
              Instagram Username{preferredContactMethod === "instagram" && " *"}
            </FormLabel>
            <Stack gap="0" minW="60%">
              <Input
                bg="brand.white"
                value={instagram}
                onChange={(e) =>
                  setContactForm((data: ContactFormType) => ({
                    ...data,
                    instagram: e.target.value,
                  }))
                }
              />
              {instagramError && (
                <FormHelperText color="brand.white">
                  {instagramError}
                </FormHelperText>
              )}
            </Stack>
          </Stack>

          <Stack direction="row" gap="0" justifyContent="space-between">
            <FormLabel color="brand.white">Email *</FormLabel>
            <Stack gap="0" minW="60%">
              <Input
                bg="brand.white"
                type="email"
                value={email}
                onChange={(e) =>
                  setContactForm((data: ContactFormType) => ({
                    ...data,
                    email: e.target.value,
                  }))
                }
              />
              {emailError && (
                <FormHelperText color="brand.white">
                  {emailError}
                </FormHelperText>
              )}
            </Stack>
          </Stack>
        </Stack>

        <Stack>
          <Stack pb="3" gap="0" direction="row" justifyContent="space-between">
            <FormLabel color="brand.white">Preferred Package</FormLabel>

            <Box w="60%">
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
            </Box>
          </Stack>

          <Stack direction="row" gap="0" justifyContent="space-between">
            <FormLabel color="brand.white">Message *</FormLabel>

            <Stack gap="0" minW="60%">
              <Textarea
                bg="brand.white"
                value={message}
                onChange={(e) =>
                  setContactForm((data: ContactFormType) => ({
                    ...data,
                    message: e.target.value,
                  }))
                }
              />

              {messageError && (
                <FormHelperText color="brand.white">
                  {messageError}
                </FormHelperText>
              )}
            </Stack>
          </Stack>

          <Stack py="3" gap="0" direction="row" justifyContent="space-between">
            <FormLabel color="brand.white">Interested in extras</FormLabel>

            <Box w="60%">
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
            </Box>
          </Stack>
        </Stack>
      </Stack>

      <Flex align="center" gap="5">
        <Divider borderColor="brand.white" />
        <Button
          type="submit"
          bg="brand.white"
          onClick={sendEmail}
          isLoading={isSubmitting}
          loadingText="Submitting"
          leftIcon={<EmailIcon />}
          _hover={{ bg: "brand.babyBlue" }}
        >
          Send Message
        </Button>
      </Flex>
    </FormControl>
  );
};
