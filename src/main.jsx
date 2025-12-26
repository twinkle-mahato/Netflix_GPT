import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // for Tailwind CSS
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
