import { useParams } from "react-router";
import HeaderBanner from "../../Components/shared/HeaderBanner";
import axiosInstance from "../../assets/Configs/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/ReUsable/Loading";


const ServiceDetail = () => {
  const { id } = useParams();
  const fetchDetails = async () => {
    const { data } = await axiosInstance.get(`/services/${id}`);
    return data;
  };

  const { data, isLoading, isFetching, isPending, isSuccess } = useQuery({
    queryKey: ["serviceDetails", id],
    queryFn: fetchDetails,
    enabled: !!id, // only run the query if id is defined
  });
  const service = data?.data;

  if (isLoading || isFetching || isPending || !isSuccess) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col gap-6">
      {/* Banner */}
      <HeaderBanner
        title={service?.name}
        subTitle={service?.description}
        image={service?.image}
      />

      {/* Service Info */}
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{service?.name}</h2>

        {/* Basic Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Category:</span> {service?.category}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Duration:</span> {service?.duration}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Price:</span> ${service?.price}{" "}
              {service?.discount ? (
                <span className="text-green-600">(-{service?.discount}%)</span>
              ) : (
                ""
              )}
            </p>
          </div>

          <div>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Rating:</span> ⭐ {service?.rating}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Total Orders:</span> {service?.totalOrder}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Preparation:</span> {service?.preparation}
            </p>
          </div>
        </div>

        {/* Products */}
        {service?.products && service?.products.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Products Used
            </h3>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              {service?.products.map((product: string, idx: number) => (
                <li key={idx}>{product}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Benefits */}
        {service?.benefits && service?.benefits.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Benefits</h3>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              {service?.benefits.map((benefit: string, idx: number) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Staff */}
        {service?.availableStaff && service?.availableStaff.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Available Staff
            </h3>
            <div className="flex gap-2 mt-2 flex-wrap">
              {service?.availableStaff.map((staff:string, idx:number) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {staff}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
