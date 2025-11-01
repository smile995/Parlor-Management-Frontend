import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ContactUs from "../Pages/Public/ContactUs";
import HomePage from "../Pages/Public/HomePage";

import OurServices from "../Pages/Public/OurServices";
import OurTeam from "../Pages/Public/OurTeam";
import Blogs from "../Pages/Public/Blogs";
import ServiceDetail from "../Pages/Public/ServiceDetail";
import PackageDetails from "../Pages/Public/PackageDetails";
import Bookings from "../Pages/Customer/Bookings";
import BlogDetails from "../Components/Blogs/BlogDetails";
import PackageBooking from "../Pages/Public/PackageBooking";
import ServiceBooking from "../Pages/Public/ServiceBooking";

export const PublicRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blogs/:slug",
    element: <BlogDetails />,
  },
  {
    path: "/services",
    element: <OurServices />,
  },
  {
    path: "/services/:id",
    element: <ServiceDetail />,
  },
  {
    path: "/services/:id",
    element: <ServiceDetail />,
  },
  {
    path: "/services/booking/:id",
    element: <ServiceBooking />,
  },
  {
    path: "/packages/:id",
    element: <PackageDetails />,
  },
  {
    path: "/packages/booking/:id",
    element: <PackageBooking />,
  },
  {
    path: "/our-team",
    element: <OurTeam />,
  },


  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/bookings",
    element: <Bookings />,
  },
];
