import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../assets/Configs/axiosInstance";


// fetcher function
const fetchServices = async () => {
  const { data } = await axiosInstance.get("/blogs");
  return data;
};

// custom hook
export const useBlogs = () => {
  return useQuery({
    queryKey: ["blogs"], // unique key for cache
    queryFn: fetchServices,
    staleTime: 1000 * 60 * 5, // 5 min cache
  });
};
