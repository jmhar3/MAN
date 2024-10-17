import * as React from "react";
import { Welcome } from "../components/Welcome";
import { About } from "../components/About";
import { Packages } from "../components/Packages";
import { Info } from "../components/Info";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import ScrollToAnchor from "../helpers/ScrollToAnchor";

export const Home = () => {
  ScrollToAnchor();

  return (
    <>
      <Welcome />
      <About />
      <Packages />
      <Info />
      <Testimonials />
      <Contact />
    </>
  );
};
