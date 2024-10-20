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
    bg={props.isSelected ? "brand.white" : "none"}
    color={props.isSelected ? "green.900" : "brand.white"}
    _hover={{ bg: "brand.babyGreen", color: "green.900" }}
  >
    {props.label}
  </Button>
);
