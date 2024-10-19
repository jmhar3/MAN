import * as React from "react";
import "@fontsource/jost";
import "@fontsource/imperial-script";
import {
  border,
  ChakraProvider,
  extendTheme,
  Textarea,
} from "@chakra-ui/react";
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
          color: "green.900",
        },
      },
      Text: {
        baseStyle: {
          color: "green.900",
        },
      },
      Input: {
        baseStyle: {
          borderColor: "brand.200",
          bg: "brand.200",
        },
      },
      Textarea: {
        baseStyle: {
          borderColor: "brand.200",
          bg: "brand.200",
        },
      },
    },
    fonts: {
      heading: `'Imperial Script', handwriting`,
      body: `'Jost', sans-serif`,
    },
    styles: {
      global: {
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
        400: "#e7f3f3",
        500: "#d6e7e6",
        // ...
        800: "#d8e8e1",
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
