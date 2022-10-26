import React from "react";
import ReactDom from "react-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({});

ReactDom.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,

  document.getElementById("root")
);
