import HeaderBanner from "../../Components/shared/HeaderBanner";

import Loading from "../../Components/ReUsable/Loading";
import ServiceCard from "../../Components/shared/ServiceCard";
import type { IPackage, IService } from "../../Types";
import HeaderTitle from "../../Components/shared/HeaderTitle";
import { useServices } from "../../Hooks/useServices";
import { usePackages } from "../../Hooks/usePackages";
import PackageCard from "../../Components/shared/PackageCard";
import Footer from "../../Components/shared/Footer";


const OurServices = () => {
  const { data, isLoading, isFetching, isSuccess, isPending } = useServices();
  const services = data?.data as IService[];
  const { data: packageData, isLoading: packageLoading } = usePackages();
  const packages = packageData?.data as IPackage[];
  if (isLoading || isFetching || !isSuccess || isPending) {
    return <Loading />;
  }
  return (
    <div>
      <HeaderBanner
        title="Explore Our Services"
        subTitle="Discover a world of beauty and wellness with our expert services."
        image="https://www.softwaresuggest.com/blog/wp-content/uploads/2019/10/salon-business-FB-1.png"
      />

      <div className="mt-7">
        <HeaderTitle BText="Our Popular" CText="Services" />
      </div>

      <div className="my-6 md:my-10 lg:my-14  px-3 md:px-5">
        {services?.length > 0 ? (
          <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-5">
            {services?.map((service: IService) => (
              <ServiceCard service={service} />
            ))}
          </div>
        ) : (
          <h2 className="text-3xl font-bold text-center my-8">
            No Services Available
          </h2>
        )}
      </div>
      <HeaderTitle BText="Our Premium" CText="Packages" />

      <div className="my-6 md:my-10 lg:my-14  px-3 md:px-5">
        {packages?.length > 0 ? (
          <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-5">
            {packages?.map((pkg: IPackage) => (
              <PackageCard comboPackage={pkg} />
            ))}
          </div>
        ) : (
          <h2 className="text-3xl font-bold text-center my-8">
            No Packages Available
          </h2>
        )}
        {packageLoading && <Loading />}
      </div>
      <Footer/>
    </div>
  );
};

export default OurServices;
