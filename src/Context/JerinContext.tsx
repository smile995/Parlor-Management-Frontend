import { createContext } from "react";
import type { UserContextType } from "./JerinProvider";


export const JerinContext = createContext<UserContextType | null>(null);
