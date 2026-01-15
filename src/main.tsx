import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Detail } from "./Detail";
import { BrowserRouter, Route, Routes } from "react-router";
import { Root } from "./Root";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
       
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
