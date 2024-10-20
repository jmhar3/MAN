import * as React from "react";
import "@fontsource/jost";
import "@fontsource/imperial-script";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Gallery } from "./pages/Gallery";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Nav } from "./components/Nav";
import { GalleryView } from "./pages/GalleryView";
import { AdditionalInfo } from "./pages/AdditionalInfo";

export const App = () => {
  const theme = extendTheme({
    components: {
      Button: {
        baseStyle: {
          fontFamily: "Jost",
        },
      },
      ButtonGroup: {
        baseStyle: {
          fontFamily: "Jost",
        },
      },
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
      body: `'Jost', sans-serif`,
      heading: `'Imperial Script', handwriting`,
    },
    styles: {
      global: {
        body: {
          backgroundImage: "url(/noise.png)",
          backgroundColor: "rgba(244,245,241,0.9)",
          backgroundBlendMode: "lighten",
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
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Routes>
          <Route path="/gallery/:set" element={<GalleryView />} />
        </Routes>
        <Routes>
          <Route path="/info" element={<AdditionalInfo />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};
