
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../assets/Slider/banner1.jpg"
import slide2 from "../../assets/Slider/banner2.jpg"
import slide3 from "../../assets/Slider/banner3.jpg"
const Slider = () => {
  return (
    <div className="mt-15">
      <Carousel>
        <div className="max-h-[80vh]">
          <img src={slide3} />
        
        </div>
        <div  className="max-h-[80vh]">
          <img src={slide1} />
         
        </div>
        <div  className="max-h-[80vh]">
          <img src={slide2} />
          
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
