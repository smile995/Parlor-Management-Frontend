
import ContactForm from "../../Components/Home/ContactForm";
import FAQ from "../../Components/Home/FAQ";
import Quality from "../../Components/Home/Quality";
import Services from "../../Components/Home/Services";
import ServicesCategory from "../../Components/Home/ServicesCategory";
import Slider from "../../Components/Home/Slider";
import Statistics from "../../Components/Home/Statistics";
import Testimonials from "../../Components/Home/Testimonials";
import Footer from "../../Components/shared/Footer";

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
      <Footer/>
    </div>
  );
};

export default HomePage;
