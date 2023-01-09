import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import { BagContextProvider } from "../contexts/BagContext";
import { Header } from "../components/Header";
import { Bag } from "../components/pages/app/Bag";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BagContextProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
      <Bag />
    </BagContextProvider>
  )
}