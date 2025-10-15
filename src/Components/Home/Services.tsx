import { Link } from "react-router";

import ServiceCard from "../shared/ServiceCard";
import SharedBtn from "../shared/SharedBtn";
import HeaderTitle from "../shared/HeaderTitle";
import { useServices } from "../../Hooks/useServices";
import Loading from "../ReUsable/Loading";
import type { IService } from "../../Types";

const Services = () => {
  const { data, isLoading, isPending, isSuccess, isFetching } = useServices();
  if (isFetching || isLoading || isPending || !isSuccess) {
    return <Loading></Loading>;
  }

  const services = data.data as IService[];
  const featuredServices = services?.filter(
    (service: IService) =>
      (service?.rating ?? 0) >= 4 && (service?.totalOrder ?? 0) >= 50
  );
  

  return (
    <div className="bg-white py-5">
      <div className="my-5 ">
        <HeaderTitle BText="Our Tranding" CText="Services" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto p-5 gap-5 my-3">
        {featuredServices?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="flex justify-center my-5">
        <Link to="/services">
          <SharedBtn label="More Services" />
        </Link>
      </div>
    </div>
  );
};

export default Services;
