import AddReviews from "../Pages/Customer/AddReviews";
import MyBooking from "../Pages/Customer/MyBooking";
import PaymentHistory from "../Pages/Customer/PaymentHistory";
import Profile from "../Pages/Customer/Profile";
import Settings from "../Pages/Customer/Settings";
import Supports from "../Pages/Customer/Supports";

export const CustomerRoutes = [
  {
    index: true,
    element: <Profile />,
  },
  {
    path: "my-bookings",

    element: <MyBooking />,
  },
  {
    path: "settings",

    element: <Settings />,
  },
  {
    path: "payment-history",

    element: <PaymentHistory />,
  },
  {
    path: "supports",

    element: <Supports />,
  },
  {
    path: "add-reviews",

    element: <AddReviews />,
  },
];
