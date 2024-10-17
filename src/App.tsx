import * as React from "react";
import "@fontsource/jost";
import "@fontsource/imperial-script";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Showcase } from "./pages/Showcase";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Nav } from "./components/Nav";

export const App = () => {
  const theme = extendTheme({
    components: {
      Heading: {
        baseStyle: {
          fontWeight: "regular",
        },
      },
    },
    fonts: {
      heading: `'Imperial Script', handwriting`,
      body: `'Jost', sans-serif`,
    },
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: "#f4f5f1",
        },
      },
    },
    colors: {
      brand: {
        100: "#f4f5f1",
        200: "#f6f8f1",
        // ...
      },
    },
  });

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
