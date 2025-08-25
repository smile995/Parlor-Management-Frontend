import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import CustomerLayout from "../LayOut/CustomerLayout";
import AdminLayout from "../LayOut/AdminLayout";
import { AdminRoutes } from "./AdminRoutes";
import { CustomerRoutes } from "./CustomerRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: PublicRoutes
  },
  {
    path: "/customers",
    element: <CustomerLayout />,
    children:CustomerRoutes
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children:AdminRoutes
  },
]);
