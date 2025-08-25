import { Outlet } from "react-router";
import Navber from "../Components/shared/Navber";

const MainLayOut = () => {
  return (
    <div>
      <Navber />
      <Outlet />
    </div>
  );
};

export default MainLayOut;
