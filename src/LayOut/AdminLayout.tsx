
import { AdminRoutes } from "../Routers/AdminRoutes";
import DashboardLayout from "./DashboardLayout";

const AdminLayout = () => {
  return (
   <DashboardLayout routes={AdminRoutes}/>
  );
};

export default AdminLayout;
