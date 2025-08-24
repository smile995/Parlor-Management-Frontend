import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import CustomerLayout from "../LayOut/CustomerLayout";
import AdminLayout from "../LayOut/AdminLayout";
import HomePage from "../Pages/Public/HomePage";

export const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/customers",
    element: <CustomerLayout />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
  },
]);
