import * as React from "react";
import { Welcome } from "../components/Welcome";
import { About } from "../components/About";
import { Packages } from "../components/Packages";
import { Info } from "../components/Info";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  const { hash, pathname, search } = location;
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
