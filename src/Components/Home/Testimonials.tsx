import { clientReviews } from "../../DummyData/reviews";
import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";
import HeaderTitle from "../shared/HeaderTitle";

const Testimonials = () => {
  return (
    <div className="bg-white py-10">
      <HeaderTitle BText="What Our" CText="Clients Say" />
     
      <div className="mt-5">
        <Marquee  pauseOnHover={true} speed={50}>
          {clientReviews.map((review) => (
            <ReviewCard key={review._id} review={review}/>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonials;
