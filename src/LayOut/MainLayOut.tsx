import { Outlet, useLocation } from "react-router";
import Navber from "../Components/shared/Navber";


const MainLayOut = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {!(pathname === "/login" || pathname === "/register") && <Navber />}
      
        <Outlet />

    </div>
  );
};

export default MainLayOut;
