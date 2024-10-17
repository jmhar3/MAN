import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Showcase } from "./pages/Showcase";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Nav } from "./components/Nav";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/gallery" element={<Showcase />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};
