import MyBooking from "../Pages/Customer/MyBooking";
import Profile from "../Pages/Customer/Profile";

export const CustomerRoutes = [
  {
    // path: "/",
    index:true,
    element: <Profile/>,
  },
  {
    path: "my-bookings",
   
    element: <MyBooking/>,
  },
];
