import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import CustomerLayout from "../LayOut/CustomerLayout";
import AdminLayout from "../LayOut/AdminLayout";
import { AdminRoutes } from "./AdminRoutes";
import { CustomerRoutes } from "./CustomerRoutes";
import { PublicRoutes } from "./PublicRoutes";
import NotFound from "../Components/ReUsable/NotFound";
import StaffLayout from "../LayOut/StaffLayout";
import { StaffRoutes } from "./StaffRoutes";

export const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: PublicRoutes,
    errorElement: <NotFound />,
  },
  {
    path: "/customer",
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
  {
    path: "/staff",
    element: <StaffLayout />,
    children: StaffRoutes,
    errorElement: <NotFound />,
  },
]);
