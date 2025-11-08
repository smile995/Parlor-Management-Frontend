import { useContext } from "react";
import { JerinContext } from "../Context/JerinContext";

export const useJerinProvider = () => {
  const context = useContext(JerinContext);
  if (!context) throw new Error("useUserContext must be used inside UserProvider");
  return context;
};