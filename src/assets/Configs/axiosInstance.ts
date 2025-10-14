import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_DeployURL, // backend url from env
  withCredentials: true, // if you use cookies/JWT
});

export default axiosInstance;
