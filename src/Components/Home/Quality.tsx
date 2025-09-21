import HeaderTitle from "../shared/HeaderTitle";
import { FaHome } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { IoDiamondSharp } from "react-icons/io5";
const Quality = () => {
  return (
    <div className="bg-white text-black  p-5">
      <div className=" mb-10">
        <HeaderTitle BText="The Future of" CText="Beauty" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <FaHome className="lg:text-6xl text-4xl  mx-auto " />
          <h4 className="text-center font-semibold text-md lg:text-xl">
            Ultimate Convenience
          </h4>
          <p className="text-gray-500 text-center">
            Book effortlessly within 5 minutes, skip the salon visits and avoid
            traffic
          </p>
        </div>
        <div>
          <HiUserGroup className="lg:text-6xl text-4xl  mx-auto " />
          <h4 className="text-center font-semibold text-md lg:text-xl">
            Accessible Luxury
          </h4>
          <p className="text-gray-500 text-center">
            Enjoy top-tier services at affordable prices, provided by
            beauticians with 10+ years of expertise.
          </p>
        </div>
        <div>
          <IoDiamondSharp className="lg:text-6xl text-4xl  mx-auto " />
          <h4 className="text-center font-semibold text-md lg:text-xl">
            Premium Quality & Hygiene
          </h4>
          <p className="text-gray-500 text-center">
            Experience high-quality services with exclusive, single-use branded
            products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quality;
