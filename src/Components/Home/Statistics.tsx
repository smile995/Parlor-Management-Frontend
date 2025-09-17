import facialModel from "../../assets/images/skin-care.png";
const Statistics = () => {
  return (
    <div className="bg-[#fff8f5] md:p-10 lg:p-10 p-5 text-black md:flex justify-evenly items-center">
      <div className="md:w-1/2 w-full">
        <img className="md:w-2/3 w-full mx-auto" src={facialModel} alt="" />
      </div>
      <div className="md:w-1/2 w-full ">
        <div className="md:w-2/3 w-full mx-auto mt-3">
          <h1 className="md:text-3xl text-2xl font-bold text-black ">
            Let us handle your <br />screen{" "}
            <span className="text-[#f63e7b]">Professionally.</span>
          </h1>
          <p className="my-3">
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general ipsum.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Purus commodo ipsum.
          </p>
          <div className="flex gap-10 items-center">
            <div className="space-y-3 text-center">
              <h1 className="text-[#f63e7b] font-bold md:text-3xl text-xl ">
                500+
              </h1>
              <p>Happy customers</p>
            </div>
            <div className="space-y-3 text-center">
              <h1 className="text-[#f63e7b] font-bold md:text-3xl text-xl ">
                50+
              </h1>
              <p>Total Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
