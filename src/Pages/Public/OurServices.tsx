import Services from "../../Components/Home/Services";
import HeaderBanner from "../../Components/shared/HeaderBanner";

const OurServices = () => {
  return (
    <div >
      <HeaderBanner 
      title="Explore Our Services"
      subTitle="Discover a world of beauty and wellness with our expert services."
      image="https://res.cloudinary.com/jerrick/image/upload/v1757937648/68c7fff0365f6e001db46107.jpg"
      />
      <Services />
    </div>
  );
};

export default OurServices;
