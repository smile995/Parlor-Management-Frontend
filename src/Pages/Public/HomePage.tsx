import Banner from "../../Components/Home/Banner"
import ContactForm from "../../Components/Home/ContactForm"
import Services from "../../Components/Home/Services"
import Statistics from "../../Components/Home/Statistics"
import Testimonials from "../../Components/Home/Testimonials"


const HomePage = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <Statistics/>
      <Testimonials/>
      <ContactForm/>
    </div>
  )
}

export default HomePage