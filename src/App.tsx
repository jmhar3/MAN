import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Welcome } from "./components/Welcome";
import { About } from "./components/About";
import { Packages } from "./components/Packages";
import { Info } from "./components/Info";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Showcase } from "./components/Showcase";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Welcome />
      <About />
      <Packages />
      <Info />
      <Testimonials />
      <Contact />

      <Showcase/>
    </ChakraProvider>
  );
};
