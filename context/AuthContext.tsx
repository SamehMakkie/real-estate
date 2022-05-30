import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { Spinner, VStack } from "@chakra-ui/react";

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("TEST");
        console.log(user);
        console.log("TEST");
        
        
      } else {
        setUser(undefined);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (displayName: string, photoURL: string) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });
    }
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, updateUserProfile }}>
      {loading ? (
        <VStack w="100vw" h="100vh" justifyContent="center" alignItems="center">
          <Spinner size="xl" />
        </VStack>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
