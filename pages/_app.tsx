import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { RouteChangeHandler } from "../components/RouteChangeHandler";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <RouteChangeHandler>
        <Component {...pageProps} />
      </RouteChangeHandler>
    </ChakraProvider>
  );
}

export default MyApp;
