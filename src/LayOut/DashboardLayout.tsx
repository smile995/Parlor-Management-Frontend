import { NavLink, Outlet } from "react-router";

import "../navlink.css";
import { IoPencil } from "react-icons/io5";
import { FaBell, FaMessage } from "react-icons/fa6";
import type { ReactNode } from "react";
interface IRoute {
  name: string;
  path: string;
  element?: ReactNode;
}
const DashboardLayout = ({ routes }: { routes: IRoute[] }) => {
  return (
    <div>
      <div className="grid md:grid-cols-5 borde grid-cols-1 lg:gap-5 md:gap-2 lg:p-5 p-2  md:min-h-[100vh] h-auto ">
        <div className="md:col-span-1 border border-purple-100 p-2 shadow-2xl w-full rounded md:rounded-xl ">
          <div className=" my-3 flex justify-center">
            <div>
              <img
                className="rounded-full w-[65px] h-[65px] mx-auto p-1 border-2 border-purple-500"
                src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
                alt="profile"
              />
              <p className="font-semibold text-xl">Your Name</p>
              <div className="flex justify-center items-center gap-2 mt-2">
                <button className="bg-white shadow text-purple-500 p-2 rounded-full">
                  <IoPencil />
                </button>
                <button className="bg-white shadow text-purple-500 p-2 rounded-full">
                  <FaMessage />
                </button>
                <button className="bg-white shadow text-purple-500 p-2 rounded-full">
                  <FaBell />
                </button>
              </div>
            </div>
          </div>

          <div>
            {routes.map((route: IRoute) => (
              <NavLink to={`${route.path}`}>
                <button className="md:w-full p-1 md:mb-2 sm:mr-2 font-semibold bg-purple-600 rounded ">
                  {route.name}
                </button>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="md:col-span-4 lg:p-5 p-2  rounded md:rounded-xl ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
