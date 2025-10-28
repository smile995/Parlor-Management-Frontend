
import ContactForm from "../../Components/Home/ContactForm";
import FAQ from "../../Components/Home/FAQ";
import Quality from "../../Components/Home/Quality";
import Services from "../../Components/Home/Services";
import ServicesCategory from "../../Components/Home/ServicesCategory";
import Slider from "../../Components/Home/Slider";
import Statistics from "../../Components/Home/Statistics";
import Testimonials from "../../Components/Home/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <Quality />
      <ServicesCategory />
      <Services />
      <Statistics />
      <Testimonials />
      <ContactForm />
      <FAQ />
    </div>
  );
};

export default HomePage;
