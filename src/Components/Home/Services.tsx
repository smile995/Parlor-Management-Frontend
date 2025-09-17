import { services } from "../../DummyData/Services";
import ServiceCard from "../shared/ServiceCard";

const Services = () => {
  return (
    <div className="bg-white py-5">
      <div className="my-5 ">
        <h1 className="md:text-3xl text-2xl font-bold text-black text-center">
          Our Awesome <span className="text-[#f63e7b]">Services</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto p-5 gap-5 my-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
