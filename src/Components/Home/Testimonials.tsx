import { clientReviews } from "../../DummyData/reviews";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  return (
    <div>
      <div>
        <h1>Testimonials</h1>
      </div>
      <div>
        <Marquee>
          {clientReviews.map((review) => (
            <div>Hello from reviews </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonials;
