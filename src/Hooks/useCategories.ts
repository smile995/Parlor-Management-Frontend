import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../assets/Configs/axiosInstance";


// fetcher function
const fetchServices = async () => {
  const { data } = await axiosInstance.get("/categories");
  return data;
};

// custom hook
export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"], // unique key for cache
    queryFn: fetchServices,
    staleTime: 1000 * 60 * 5, // 5 min cache
  });
};
