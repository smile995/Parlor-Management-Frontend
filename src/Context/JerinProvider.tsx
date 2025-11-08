import { useState } from "react";
import { JerinContext } from "./JerinContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,GoogleAuthProvider,
  type User,
  type UserCredential,
} from "firebase/auth";
import { auth } from "../assets/Configs/firebase";
// import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
// jerinContext interface
export interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  googleLogin: () => Promise<UserCredential>;
  logout: () => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const JerinProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // local state here
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  // write functionality below
  const register = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = async () => {
    const result=await signInWithPopup(auth, provider);
    return result 
  };
  const logout = async () => {
    await signOut(auth);
  };

  //   useEffect(() => {
  //     const unSubscribe = onAuthStateChanged(auth, (user) => {
  //       setUser(user);
  //       if (user) {
  //         const userInfo = {
  //           name: user.displayName,
  //           email: user.email,
  //         };
  //         // issue a token
  //         axiosInstance.post("/jwt", userInfo).then((res) => {
  //           const token = res?.data?.token;
  //           localStorage.setItem("access-token", token);

  //           setLoading(false);
  //         });
  //       } else {
  //         // remove token
  //         setLoading(false);
  //         localStorage.removeItem("access-token");
  //       }
  //     });
  //     return unSubscribe;
  //   }, []);

  //   export global data from here
  const centralData = {
    user,
    setUser,
    loading,
    setLoading,
    login,
    register,
    logout,
    googleLogin
  };

  return (
    <JerinContext.Provider value={centralData}>
      {children}
    </JerinContext.Provider>
  );
};

export default JerinProvider;
