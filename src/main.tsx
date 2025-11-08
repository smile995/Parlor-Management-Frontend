import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import "./navlink.css";
import { allRoutes } from "./Routers/Routes.tsx";
import { RouterProvider } from "react-router/dom";
import JerinProvider from "./Context/JerinProvider.tsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <JerinProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={allRoutes} />
      </QueryClientProvider>
    </JerinProvider>
  </StrictMode>
);
