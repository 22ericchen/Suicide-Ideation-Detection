import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import theme from "./theme";
import Home from "./Pages/Home";
import Results from "./Pages/Results";
import Detect from "./Pages/Detect";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/detect" element={<Detect />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  </ChakraProvider>
);
