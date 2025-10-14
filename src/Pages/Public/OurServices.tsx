// import Services from "../../Components/Home/Services";
import HeaderBanner from "../../Components/shared/HeaderBanner";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import Loading from "../../Components/ReUsable/Loading";
import ServiceCard from "../../Components/shared/ServiceCard";
import type { IService } from "../../Types";
import HeaderTitle from "../../Components/shared/HeaderTitle";
import { useServices } from "../../Hooks/useServices";

const OurServices = () => {

  const {data, isLoading, isFetching,isSuccess,isPending}= useServices()
  const services = data?.data;

  if (isLoading || isFetching||!isSuccess||isPending) {
    return <Loading />;
  }
  return (
    <div>
      <HeaderBanner
        title="Explore Our Services"
        subTitle="Discover a world of beauty and wellness with our expert services."
        image="https://res.cloudinary.com/jerrick/image/upload/v1757937648/68c7fff0365f6e001db46107.jpg"
      />

      <div className="mt-7">
        <HeaderTitle BText="Our Popular" CText="Services" />
      </div>

      <div className="my-6 md:my-10 lg:my-14  px-3 md:px-5">
        {services.length > 0 ? (
          <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-5">
            {services.map((service: IService) => (
              <ServiceCard service={service} />
            ))}
          </div>
        ) : (
          <h2 className="text-3xl font-bold text-center my-8">
            No Services Available
          </h2>
        )}
      </div>
    </div>
  );
};

export default OurServices;
