import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
const SocialLogin = () => {
  return (
    <div>
     <div className="bg-white border mb-3 rounded-full p-2 text-center cursor-pointer hover:bg-slate-100 hover:shadow-md hover:border-blue-400">
          <button  className="flex items-center gap-2"> <FcGoogle className="text-2xl" /> Continue With Google</button>
     </div>
     <div className="bg-white border mb-3 rounded-full p-2 text-center cursor-pointer hover:bg-slate-100 hover:shadow-md hover:border-blue-400">
          <button  className="flex items-center gap-2"> <FaFacebook className="text-2xl text-blue-600" /> Continue With Facebook</button>
     </div>
    
    </div>
  )
}

export default SocialLogin