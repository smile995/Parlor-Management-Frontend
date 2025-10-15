import { useParams } from "react-router";
import HeaderBanner from "../../Components/shared/HeaderBanner";
import axiosInstance from "../../assets/Configs/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/ReUsable/Loading";
import { useCategories } from "../../Hooks/useCategories";
import type { ICategory, IService } from "../../Types";
import { useServices } from "../../Hooks/useServices";
import ServiceCard from "../../Components/shared/ServiceCard";

const ServiceDetail = () => {
  const { id } = useParams();
  const { data: categories } = useCategories();
  const { data: fetchData } = useServices();
  const allServices = fetchData?.data as IService[];
  const categoryData = categories?.data;

  const fetchDetails = async () => {
    const { data } = await axiosInstance.get(`/services/${id}`);
    return data;
  };

  const {
    data: serviceDetails,
    isLoading,
    isFetching,
    isPending,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ["serviceDetails", id],
    queryFn: fetchDetails,
    enabled: !!id, // only run the query if id is defined
  });
  const service = serviceDetails?.data as IService;
  const SimilarServices = allServices.filter(
    (service: IService) => service?.name == service?.name
  );

  if (isLoading || isFetching || isPending || !isSuccess || isError) {
    return <Loading />;
  }
  const handleCategoryClick = (name: string) => {
    console.log(name);
  };
  return (
    <div>
      {service ? (
        <div>
          <HeaderBanner
            title={service?.name}
            subTitle={service?.description}
            image={service?.image}
          />

          <div className="  grid md:grid-cols-5 grid-cols-1 gap-5 md:p-6 p-3">
            <div className=" p-6  shadow-lg rounded-2xl md:col-span-4 ">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {service?.name}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Category:</span>{" "}
                    {service?.category}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Duration:</span>{" "}
                    {service?.duration}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Price:</span> $
                    {service?.price}{" "}
                    {service?.discount ? (
                      <span className="text-green-600">
                        (-{service?.discount}%)
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                </div>

                <div>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Rating:</span> ⭐{" "}
                    {service?.rating}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Total Orders:</span>{" "}
                    {service?.totalOrder}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Preparation:</span>{" "}
                    {service?.preparation}
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
                  <h3 className="text-lg font-semibold text-gray-800">
                    Benefits
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    {service?.benefits.map((benefit: string, idx: number) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Staff */}
              {service?.availableStaff &&
                service?.availableStaff.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Available Staff
                    </h3>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {service?.availableStaff.map(
                        (staff: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {staff}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}
            </div>
            <div className="col-span-1  shadow-lg rounded-2xl px-2 py-3  ">
              <div>
                <p className="text-center text-blue-600 text-lg font-semibold rounded bg-blue-100 mb-2">
                  Our Category
                </p>
              </div>
              {categoryData?.map((category: ICategory) => (
                <button
                  onClick={() => handleCategoryClick(category?.name)}
                  className="bg-green-50 hover:bg-green-100 mb-2 hover:text-green-600 font-semibold w-full rounded "
                >
                  {category?.name?.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}

      <div className="md:p-6 p-3 shadow-2xl mb-3 md:mb-6 md:mx-5 mx-2 rounded-2xl">
        <p className="font-semibold text-xl ">
          Total Similar Service: <span>{SimilarServices?.length}</span>
        </p>
        <div>
          {SimilarServices?.map((SimilarService,inx) => (
            <ServiceCard key={inx} service={SimilarService} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
