import { clientReviews } from "../../DummyData/reviews";
import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";

const Testimonials = () => {
  return (
    <div className="bg-white py-10">
      <div>
        <h1 className="pb-4 text-black text-center md:text-3xl text-2xl font-bold">Testimonials</h1>
      </div>
      <div>
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
