import NavBar from "@/components/shared/NavBar";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rick And Morty</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
