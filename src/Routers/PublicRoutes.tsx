import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ContactUs from "../Pages/Public/ContactUs";
import HomePage from "../Pages/Public/HomePage";

import OurServices from "../Pages/Public/OurServices";
import OurTeam from "../Pages/Public/OurTeam";
import Blogs from "../Pages/Public/Blogs";
import Offers from "../Pages/Public/Offers";
import ServiceDetail from "../Pages/Public/ServiceDetail";

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
        path: "/services",
        element: <OurServices />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetail />,
      },
      {
        path: "/our-team",
        element: <OurTeam />,
      },
      
      {
        path: "/offers",
        element: <Offers />,
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
    ]