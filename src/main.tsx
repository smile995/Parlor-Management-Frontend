import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { allRoutes } from "./Routers/Routes.tsx";
import { RouterProvider } from "react-router/dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={allRoutes} />
  </StrictMode>
);
