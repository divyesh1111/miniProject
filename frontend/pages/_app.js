import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Provider} from "react-redux";
import Jordan from "@/components/Jordan";
import {SessionProvider} from "next-auth/react";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "../store/store";

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Main Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/MM.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <PersistGate loading={"loading"} persistor={persistor}>
            <Jordan />
            <Header />
            <Component {...pageProps} />
            <Footer />
          </PersistGate>
        </Provider>
      </SessionProvider>
    </>
  );
}
