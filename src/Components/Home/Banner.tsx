import model from "../../assets/images/model.png"
import PrimaryButton from "../shared/PrimaryButton";
const Banner = () => {
  return (
    <div className="hero mt-12 lg:mt-2 bg-[#fff8f5] text-black min-h-screen">
      <div className="hero-content grid grid-cols-1 justify-between items-center md:grid-cols-2 ">
        <div>
          <h1 className="md:text-5xl text-3xl md:text-start text-center font-bold">BEAUTY SALON FOR EVERY WOMEN</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton label="Get an Appointment"/>
        </div>
        <div className="flex justify-center">
          <img
            src={model}
            className="w-full md:w-2/3 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
