import AddReviews from "../Pages/Customer/AddReviews";
import MyBooking from "../Pages/Customer/MyBooking";
import PaymentHistory from "../Pages/Customer/PaymentHistory";
import Profile from "../Pages/Customer/Profile";
import Settings from "../Pages/Customer/Settings";
import Supports from "../Pages/Customer/Supports";

export const CustomerRoutes = [
  {
    path:"dashboard",
    element: <Profile />,
    name: "Dashboard",
    
  },
  {
    path: "my-bookings",
    name: "Bookings",
    element: <MyBooking />,
  },
  {
    path: "settings",
    name: "Settings",
    element: <Settings />,
  },
  {
    path: "payment-history",
    name: "Payment History",
    element: <PaymentHistory />,
  },
  {
    path: "supports",
    name: "Support",
    element: <Supports />,
  },
  {
    path: "add-reviews",
    name: "Reviews ",
    element: <AddReviews />,
  },
];
