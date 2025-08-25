import { Outlet, useLocation } from "react-router";
import Navber from "../Components/shared/Navber";
import Footer from "../Components/shared/Footer";

const MainLayOut = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {!(pathname === "/login" || pathname === "/register") && <Navber />}
      <Outlet />
       {!(pathname === "/login" || pathname === "/register") && <Footer />}
    </div>
  );
};

export default MainLayOut;
