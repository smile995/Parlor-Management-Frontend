import HeaderBanner from "../../Components/shared/HeaderBanner"
import HeaderTitle from "../../Components/shared/HeaderTitle"
import TeammateCard from "../../Components/Teammates/TeammateCard"
import { teammates } from "../../DummyData/teammates"


const OurTeam = () => {
  return (
    <div className=" text-black bg-white ">
      <HeaderBanner
      image="https://images.squarespace-cdn.com/content/v1/5655208ae4b0acafe0fb51af/1598406793296-NXL97FXEXTNCB6IA40DE/The+Beauty+Project"
      title="Meet With Our Expert"
      subTitle="Our team of skilled professionals is dedicated to providing you with exceptional beauty and wellness services."
      />
     <div className="my-8">
       <HeaderTitle BText="Our Team Professional" CText="Teammates" />
     </div>
      <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16">
        {
          teammates?.map((teammate,index)=><TeammateCard key={index} teammate={teammate}/>)
        }
      </div>
    </div>
  )
}

export default OurTeam