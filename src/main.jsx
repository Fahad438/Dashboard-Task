import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./utility/i18n/i18n";
import { ThemeModeProvider } from "./theme/ThemeContext";
createRoot(document.getElementById("root")).render(
  <ThemeModeProvider>
    <App />
  </ThemeModeProvider>
);
