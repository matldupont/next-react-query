import * as React from "react";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import MDXProvider from "../src/components/slides/MDXProvider";
import { AnimatePresence } from "framer-motion";
import { CurrentSlideProvider } from "../src/context/CurrentSlideContext";
import { ModeProvider } from "../src/context/ModeContext";
import TransitionPage from "../src/components/slides/TransitionPage";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function MyApp({ Component, pageProps }) {
  const queryClientRef = React.useRef<any>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  console.log("APP");

  return (
    <MDXProvider>
      <ThemeProvider theme={theme}>
        <CurrentSlideProvider>
          <ModeProvider>
            <AnimatePresence exitBeforeEnter>
              <TransitionPage>
                <Head>
                  <title>
                    Fine-tuning your UX with the right fetching strategy
                  </title>
                  <meta
                    name="Fine-tuning your UX with the right fetching strategy"
                    content="A demo and slides for React Query and client-side fetching strategies"
                  />
                  <link rel="icon" href="/favicon.ico" />
                </Head>

                <QueryClientProvider client={queryClientRef.current}>
                  <Hydrate state={pageProps.dehydratedState}>
                    <Component {...pageProps} />
                  </Hydrate>
                </QueryClientProvider>
              </TransitionPage>
            </AnimatePresence>
          </ModeProvider>
        </CurrentSlideProvider>
      </ThemeProvider>
    </MDXProvider>
  );
}

export default MyApp;
