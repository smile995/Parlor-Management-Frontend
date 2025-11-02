import { Link, useParams } from "react-router";
import { usePackages } from "../../Hooks/usePackages";
import type { IPackage } from "../../Types";
import Loading from "../../Components/ReUsable/Loading";

const PackageBooking = () => {
  const { id } = useParams();
  const { data, isLoading } = usePackages();
  const allPackages = data?.data as IPackage[];
  const service = allPackages?.find((service) => service._id === id);
  const { name, availableStaff, totalPrice: price } = service || {};
  console.log(availableStaff);

  if (isLoading && !service) return <Loading />;
  return (
    <div className="max-w-3xl mx-auto p-6 md:p-10 bg-white shadow-md rounded-2xl mt-15">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Book Your Appointment
      </h2>

      <form className="space-y-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Service Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Package Name
          </label>
          <input
            type="text"
            value={name || ""}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none"
          />
        </div>

        {/* Appointment Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Date
          </label>
          <input
            type="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Price
          </label>
          <input
            type="text"
            value={price || ""}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none"
          />
        </div>

        {/* Time Slot */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Time Slot
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none">
            <option value="">Select a time</option>
            <option value="morning">Morning (9 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
            <option value="evening">Evening (4 PM - 8 PM)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Available Staff
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none">
            <option value="">Select a staff</option>
            {availableStaff?.map((staff, idx) => (
              <option key={idx} value={staff}>
                {staff}
              </option>
            ))}
          </select>
        </div>

        {/* Additional Notes */}
        <div className="md:col-span-2 col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Notes
          </label>
          <textarea
            rows={4}
            placeholder="Any special requests?"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className=" col-span-1 md:col-span-2">
          <Link to="/payment">
            <button
              type="submit"
              className="w-full  bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2.5 rounded-lg transition-all duration-200"
            >
              Confirm Booking
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default PackageBooking;
