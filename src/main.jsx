import { Amplify } from "aws-amplify";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";
import App from "./App.jsx";
import awsConfig from "./aws-exports.js";
Amplify.configure(awsConfig);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
