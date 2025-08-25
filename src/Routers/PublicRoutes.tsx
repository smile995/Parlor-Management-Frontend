import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ContactUs from "../Pages/Public/ContactUs";
import HomePage from "../Pages/Public/HomePage";
import OurPortfolio from "../Pages/Public/OurPortfolio";
import OurTeam from "../Pages/Public/OurTeam";

export const PublicRoutes = [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/our-portfolio",
        element: <OurPortfolio />,
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
    ]