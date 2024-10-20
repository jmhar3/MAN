import * as React from "react";
import { Button } from "@chakra-ui/react";
import { ContactFormProps } from "./ContactForm";

interface FormButtonProps extends ContactFormProps {
  newFormData: { [key: string]: string | string[] };
  isSelected: boolean;
  label: string;
}

export const FormButton = (props: FormButtonProps) => (
  <Button
    rounded="full"
    onClick={() =>
      props.setContactForm((data) => ({
        ...data,
        ...props.newFormData,
      }))
    }
    bg={props.isSelected ? "brand.200" : "none"}
    color={props.isSelected ? "green.900" : "brand.200"}
    _hover={{ bg: "brand.800", color: "green.900" }}
  >
    {props.label}
  </Button>
);
