import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { useRouter } from "next/router";
import { AuthContextProvider } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

const authRequired = ['/dashboard', '/user/profile', '/user/properties']

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
      {!authRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
