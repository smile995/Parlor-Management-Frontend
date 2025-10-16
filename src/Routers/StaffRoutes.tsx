import AddBlogs from "../Pages/Admin/AddBlogs";
import AddPackages from "../Pages/Admin/AddPackages";
import AddServices from "../Pages/Admin/AddServices";
import AllBookings from "../Pages/Admin/AllBookings";
import Dashboard from "../Pages/Admin/Dashboard";
import ManageBlogs from "../Pages/Admin/ManageBlogs";
import ManagePackages from "../Pages/Admin/ManagePackages";
import ManageServices from "../Pages/Admin/ManageServices";
import ManageUsers from "../Pages/Admin/ManageUsers";

export const StaffRoutes = [
  {
    path: "dashboard",
    name: "Dashboard",
    element: <Dashboard />,
  },
  {
    path: "manage-services",
    element: <ManageServices />,
    name: "Manage Services",
  },
  {
    path: "manage-packages",
    element: <ManagePackages />,
    name: "Manage Packages",
  },
  {
    path: "manage-users",
    element: <ManageUsers />,
    name: "Manage Users",
  },
  {
    path: "manage-blogs",
    element: <ManageBlogs />,
    name: "Manage Blogs",
  },
  {
    path: "add-blogs",
    element: <AddBlogs />,
    name: "Add Blog",
  },
  {
    path: "add-services",
    element: <AddServices />,
    name: "Add Service",
  },
  {
    path: "add-packages",
    element: <AddPackages />,
    name: "Add Package",
  },
  {
    path: "all-bookings",
    element: <AllBookings />,
    name: "All Bookings",
  },
];
