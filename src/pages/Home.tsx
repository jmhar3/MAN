import * as React from "react";
import { Welcome } from "../components/Welcome";
import { About } from "../components/About";
import { Packages } from "../components/Packages";
import { Info } from "../components/Info";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import ScrollToAnchor from "../helpers/ScrollToAnchor";
import { Rates } from "../components/Rates";

export const Home = () => {
  ScrollToAnchor();

  return (
    <>
      <Welcome />
      <About />
      <Rates />
      <Info />
      <Testimonials />
      <Contact />
    </>
  );
};
