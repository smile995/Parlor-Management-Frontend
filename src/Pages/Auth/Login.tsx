import { Chip, Divider } from "@mui/material";
import logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import SocialLogin from "../../Components/shared/SocialLogin";
import PrimaryButton from "../../Components/shared/PrimaryButton";

type TLoginForm = {
  password: string;
  email: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<TLoginForm>();
  const handleLogin = (data: TLoginForm) => {
    const { email, password } = data;
    console.log(email, password);
  };
  return (
    <div className="min-h-screen  flex items-center justify-center bg-white  text-black ">
      <div className="lg:w-1/3  md:w-2/5 w-full mx-auto p-5">
        <div className="mb-2 md:mb-5">
          <img className="w-1/2  mx-auto" src={logo} alt="logo" />
        </div>

        <div className="bg-slate-50 rounded p-5 shadow-lg">
          <div className="mb-3 md:mb-5 text-center">
            <p className="text-2xl font-semibold ">Login</p>
          </div>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div>
              <label htmlFor="Email">Email:</label>
              <input
                className="w-full bg-white border rounded-md  border-purple-100 p-3 mb-3"
                type="email"
                placeholder="Example@gmail.com"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="Password">Password:</label>
              <input
                className="w-full bg-white border rounded-md  border-purple-100 p-3 mb-3"
                type="password"
                placeholder="*********"
                {...register("password", { required: true })}
              />
            </div>
        

            <PrimaryButton type="submit" label="Login" className="w-full" />
          </form>
          <div className="my-4">
            <Divider>
              <Chip label="Social Login" size="medium" />
            </Divider>
          </div>
          <div>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
