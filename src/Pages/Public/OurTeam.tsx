import TeammateCard from "../../Components/Teammates/TeammateCard"
import { teammates } from "../../DummyData/teammates"


const OurTeam = () => {
  return (
    <div className="mt-16 py-10 text-black bg-white ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16">
        {
          teammates?.map((teammate,index)=><TeammateCard key={index} teammate={teammate}/>)
        }
      </div>
    </div>
  )
}

export default OurTeam