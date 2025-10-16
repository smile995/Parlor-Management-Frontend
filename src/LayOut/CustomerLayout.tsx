
import { CustomerRoutes } from "../Routers/CustomerRoutes";
import DashboardLayout from "./DashboardLayout";

const CustomerLayout = () => {
  return <DashboardLayout routes={CustomerRoutes} />;
};

export default CustomerLayout;
