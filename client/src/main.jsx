import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./context/ThemeContext";
import App from "./App";
import "./index.css";

import AuthProvider from "./context/AuthContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <AuthProvider>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</AuthProvider>
);