import type { AppProps } from "next/app";
import { GeneralStyle } from "@/styles/generalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GeneralStyle />
      <Component {...pageProps} />
    </>
  );
}
