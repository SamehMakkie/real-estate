import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxaNccXn7taJaeFekNFAxXc2XJZ0EWVF0",
  authDomain: "real-estate-3eba4.firebaseapp.com",
  projectId: "real-estate-3eba4",
  storageBucket: "real-estate-3eba4.appspot.com",
  messagingSenderId: "303054034438",
  appId: "1:303054034438:web:aa80ad288639e185381587",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
