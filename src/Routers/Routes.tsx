import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import CustomerLayout from "../LayOut/CustomerLayout";
import AdminLayout from "../LayOut/AdminLayout";
import { AdminRoutes } from "./AdminRoutes";
import { CustomerRoutes } from "./CustomerRoutes";
import { PublicRoutes } from "./PublicRoutes";
import NotFound from "../Components/ReUsable/NotFound";

export const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: PublicRoutes,
    errorElement: <NotFound />,
  },
  {
    path: "/customers",
    element: <CustomerLayout />,
    children: CustomerRoutes,
    errorElement: <NotFound />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: AdminRoutes,
    errorElement: <NotFound />,
  },
]);
