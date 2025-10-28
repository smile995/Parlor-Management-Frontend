import { useParams } from "react-router";
import axiosInstance from "../../assets/Configs/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { FaCheck, FaClock, FaStar, FaTag, FaUsers } from "react-icons/fa6";
import type { IPackage } from "../../Types";
import type { ReactNode } from "react";
import Loading from "../../Components/ReUsable/Loading";

const PackageDetails = () => {
  const { id } = useParams();

  const fetchDetails = async () => {
    const { data } = await axiosInstance.get(`/packages/${id}`);
    return data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["packageDetails", id],
    queryFn: fetchDetails,
  });

  if (isLoading) {
    return <Loading />;
  }
  if (isError)
    return (
      <div className="py-20 text-center text-red-500">
        Failed to load package details.
      </div>
    );

  const pkg = data.data as IPackage;
  const {
    description,
    duration,
    image,
    name,
    servicesNames,
    totalPrice,
    availableStaff,
    benefits,
    discount,
    preparation,
    products,
    rating,
    totalBookings,
    status,
  } = pkg || {};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-[350px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold">{name}</h1>
          <p className="mt-2 max-w-lg text-gray-200">{description}</p>
          {status && (
            <span
              className={`mt-3 inline-block rounded-full px-4 py-1 text-sm font-semibold ${
                status === "Active"
                  ? "bg-green-500/90"
                  : status === "Coming Soon"
                  ? "bg-yellow-500/90"
                  : "bg-gray-400/90"
              }`}
            >
              {status}
            </span>
          )}
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-5xl mx-auto p-6">
        {/* Top Info */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <InfoCard icon={<FaClock />} label="Duration" value={duration} />
          <InfoCard
            icon={<FaTag />}
            label="Total Price"
            value={
              <span>
                ৳{totalPrice}{" "}
                {discount && (
                  <span className="ml-1 text-sm text-green-600">
                    (-{discount}% off)
                  </span>
                )}
              </span>
            }
          />
          <InfoCard icon={<FaStar />} label="Rating" value={rating ?? "N/A"} />
          <InfoCard
            icon={<FaUsers />}
            label="Bookings"
            value={totalBookings ?? 0}
          />
        </div>

        {/* Description */}
        <Section title="About This Package">
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </Section>

        {/* Preparation */}
        {pkg.preparation && (
          <Section title="Preparation Tips">
            <p className="text-gray-700">{preparation}</p>
          </Section>
        )}

        {/* Services */}
        {servicesNames?.length > 0 && (
          <Section title="Included Services">
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              {servicesNames.map((service: string, i: number) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </Section>
        )}

        {/* Benefits */}
        {(products?.length ?? 0) > 0 && (
          <Section title="Products">
            <div className="grid sm:grid-cols-2 gap-3">
              {products!.map((b: string, i: number) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm"
                >
                  <FaCheck className="text-pink-500 w-5 h-5" />
                  <span className="text-gray-800">{b}</span>
                </div>
              ))}
            </div>
          </Section>
        )}

        {(benefits?.length ?? 0) > 0 && (
          <Section title="Benefits">
            <div className="grid sm:grid-cols-2 gap-3">
              {benefits!.map((b: string, i: number) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm"
                >
                  <FaCheck className="text-pink-500 w-5 h-5" />
                  <span className="text-gray-800">{b}</span>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Staff */}
        {Array.isArray(availableStaff) && availableStaff.length > 0 && (
          <Section title="Available Staff">
            <div className="flex flex-wrap gap-3">
              {availableStaff.map((staff: string, i: number) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-white shadow-sm rounded-full text-gray-800"
                >
                  {staff}
                </div>
              ))}
            </div>
          </Section>
        )}
      </div>

      {/* Sticky Booking Button */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 flex justify-between items-center shadow-lg">
        <div>
          <p className="text-gray-700 text-sm">Total Price</p>
          <p className="text-xl font-bold text-pink-600">৳{totalPrice}</p>
        </div>
        <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-all">
          Book Now
        </button>
      </div>
    </div>
  );
};

const InfoCard = ({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: number | string | ReactNode;
}) => (
  <div className="flex flex-col items-start bg-white p-4 rounded-xl shadow-sm">
    <div className="flex items-center gap-2 mb-1 text-gray-500 text-sm font-medium">
      {icon}
      <span>{label}</span>
    </div>
    <p className="text-gray-900 font-semibold">{value}</p>
  </div>
);

const Section = ({ title, children }: {title:string,children:ReactNode}) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-3 text-gray-800">{title}</h2>
    {children}
  </div>
);

export default PackageDetails;
