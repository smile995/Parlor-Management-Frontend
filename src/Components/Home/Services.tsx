import { Link } from "react-router";
import { services } from "../../DummyData/Services";
import ServiceCard from "../shared/ServiceCard";
import SharedBtn from "../shared/SharedBtn";
import HeaderTitle from "../shared/HeaderTitle";

const Services = () => {

  return (
    <div className="bg-white py-5">
      <div className="my-5 ">
        <HeaderTitle BText="Our Tranding" CText="Services" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto p-5 gap-5 my-3">
        {services.map((service) => (
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
