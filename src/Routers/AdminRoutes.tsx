import AddBlogs from "../Pages/Admin/AddBlogs";
import AddPackages from "../Pages/Admin/AddPackages";
import AddServices from "../Pages/Admin/AddServices";
import AllBookings from "../Pages/Admin/AllBookings";
import Dashboard from "../Pages/Admin/Dashboard";
import ManageBlogs from "../Pages/Admin/ManageBlogs";
import ManagePackages from "../Pages/Admin/ManagePackages";
import ManageServices from "../Pages/Admin/ManageServices";
import ManageUsers from "../Pages/Admin/ManageUsers";

export const AdminRoutes = [
  {
    index: true,
    element: <Dashboard />,
  },
  {
    path: "manage-services",
    element: <ManageServices />,
  },
  {
    path: "manage-packages",
    element: <ManagePackages />,
  },
  {
    path: "manage-users",
    element: <ManageUsers />,
  },
  {
    path: "manage-blogs",
    element: <ManageBlogs />,
  },
  {
    path: "add-blogs",
    element: <AddBlogs />,
  },
  {
    path: "add-services",
    element: <AddServices />,
  },
  {
    path: "add-packages",
    element: <AddPackages />,
  },
  {
    path: "all-bookings",
    element: <AllBookings />,
  },
];
