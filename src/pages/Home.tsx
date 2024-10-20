import * as React from "react";
import { Welcome } from "../components/Welcome";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import ScrollToAnchor from "../helpers/ScrollToAnchor";
import { Rates } from "../components/Rates";
import { Bumper } from "../components/Bumper";

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

export interface ContactFormType {
  name?: string;
  email?: string;
  message?: string;
  instagram?: string;
  extras?: ExtrasEnum[];
  preferredPackage?: PackageEnum;
  preferredContactMethod?: "instagram" | "email";
}

export const Home = () => {
  ScrollToAnchor();
  const [contactForm, setContactForm] = React.useState<ContactFormType>({});

  return (
    <>
      <Welcome />
      <Bumper id="about" />
      <About />
      <Bumper id="packages" />
      <Rates setContactForm={setContactForm} />
      <Bumper id="testimonials" />
      <Testimonials />
      <Bumper id="contact" />
      <Contact contactForm={contactForm} setContactForm={setContactForm} />
    </>
  );
};
