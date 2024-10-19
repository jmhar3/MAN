import * as React from "react";
import { Welcome } from "../components/Welcome";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import ScrollToAnchor from "../helpers/ScrollToAnchor";
import { Rates } from "../components/Rates";

export enum PackageEnum {
  Digital = "digital",
  Complete = "complete",
  Film = "film",
}

export enum ExtrasEnum {
  Film = "film",
  Extension = "extension",
  Edits = "edits",
  Raws = "raws",
}

export interface ContactForm {
  name?: string;
  email: string;
  message?: string;
  instagram?: string;
  extras: ExtrasEnum[];
  preferredPackage?: PackageEnum;
  preferredContactMethod?: "instagram" | "email";
}

export const Home = () => {
  ScrollToAnchor();

  const [contactForm, setContactForm] = React.useState<ContactForm>({
    email: "",
    extras: ["edits", "film"] as ExtrasEnum[],
  });

  return (
    <>
      <Welcome />
      <About />
      <Rates setContactForm={setContactForm} />
      <Testimonials />
      <Contact contactForm={contactForm} setContactForm={setContactForm} />
    </>
  );
};
