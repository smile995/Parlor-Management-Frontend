import HeaderBanner from "../../Components/shared/HeaderBanner"
import HeaderTitle from "../../Components/shared/HeaderTitle"


const Offers = () => {
  return (
    <div>
      <HeaderBanner title="Black Friday Offers" subTitle="" image="https://hayamakeover.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-15-at-6.43.21-PM.jpeg"/>
      <div className="my-8">
        <HeaderTitle BText="Explore Today's Best" CText="Offers"/>
      </div>
      <div>
        Offers are coming soon...
      </div>
    </div>
  )
}

export default Offers