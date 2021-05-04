import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";

const theme = {
  text: {
    main: "#ffffff",
    active: "#72bef8",
    dull: "#ffffff40",
  },
  background: {
    main: "#181824",
    container: " #25273c",
    border: "#ffffff20",
  },
};

// const light = {
//   text: {
//     main: "",
//     active: "",
//     dull: "",
//   },
//   background: {
//     main: "",
//     container: "",
//     border: "",
//   },
// };

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
