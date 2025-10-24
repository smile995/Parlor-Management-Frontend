import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../assets/Configs/axiosInstance";


// fetcher function
const fetchPackages = async () => {
  const { data } = await axiosInstance.get("/packages");
  return data;
};

// custom hook
export const usePackages = () => {
  return useQuery({
    queryKey: ["packages"], // unique key for cache
    queryFn: fetchPackages,
    staleTime: 1000 * 60 * 5, // 5 min cache
  });
};
