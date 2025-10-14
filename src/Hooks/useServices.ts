import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../assets/Configs/axiosInstance";


// fetcher function
const fetchServices = async () => {
  const { data } = await axiosInstance.get("/services");
  return data;
};

// custom hook
export const useServices = () => {
  return useQuery({
    queryKey: ["services"], // unique key for cache
    queryFn: fetchServices,
    staleTime: 1000 * 60 * 5, // 5 min cache
  });
};
