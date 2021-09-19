import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useQueryClient } from "react-query";
import styles from "../styles/Home.module.css";
import {
  CSR_PREFETCH_CONTACTS_KEY,
  CSR_PREFETCH_USER_KEY,
} from "../src/utils/constants";
import { getContacts, getUser } from "../src/utils/contacts";
import headshot from "../public/mat.dupont.headshot.jpg";
import { Page, Card } from "../src/components";

const Header = styled.header`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  min-height: 110px;
`;

const HeadshotWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset: 3px 4px 5px #fff;
`;

const GithubLink = styled.a`
  font-size: 2rem;
  font-weight: 600;
`;

const WaitingIcon = styled(motion.div)`
  height: 100px;
  width: 100px;
  font-size: 6rem;
  line-height: 1;
`;

export default function Home() {
  const queryClient = useQueryClient();
  const [isWaiting, setIsWaiting] = React.useState(false);

  async function onLinkHover() {
    queryClient.prefetchQuery(CSR_PREFETCH_CONTACTS_KEY, getContacts);
  }

  return (
    <Page>
      <Header>
        <GithubLink href="https://github.com/matldupont/next-react-query">
          @matldupont
        </GithubLink>

        <HeadshotWrapper>
          <AnimatePresence>
            {isWaiting ? (
              <WaitingIcon>🤬</WaitingIcon>
            ) : (
              <Link href="/me">
                <a>
                  <Image
                    src={headshot}
                    alt="Vercel Logo"
                    height={100}
                    width={100}
                    quality={100}
                  />
                </a>
              </Link>
            )}
          </AnimatePresence>
        </HeadshotWrapper>
      </Header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <div>Fine-tuning your UX</div>
          <div>with the right fetching strategy</div>
        </h1>

        <div className={styles.grid}>
          <Card
            href="/1-client-side-rendering"
            color="red"
            onClick={() => setIsWaiting(true)}
          >
            <h2>Client-side Rendering &rarr;</h2>
            <p>A traditional, client-only Single-Page Application.</p>
          </Card>

          <Card
            href="/2-csr-react-query"
            color="blue"
            onClick={() => setIsWaiting(true)}
          >
            <h2>CSR with React Query &rarr;</h2>
            <p>Prefetch on hover to preload react-query cache</p>
          </Card>

          <Card
            href="/3-server-side-rendering"
            color="orange"
            onClick={() => setIsWaiting(true)}
          >
            <h2>Server-side Rendering &rarr;</h2>
            <p>
              Completely rendered from the server and hydrated on the client.
            </p>
          </Card>

          <Card
            href="/4-ssr-prefetching"
            color="purple"
            onClick={() => setIsWaiting(true)}
          >
            <h2>SSR Prefetching with React Query &rarr;</h2>
            <p>Prefetch on the server to preload react-query cache</p>
          </Card>

          <Card
            href="/5-csr-prefetching"
            onMouseEnter={onLinkHover}
            color="green"
            onClick={() => setIsWaiting(true)}
          >
            <h2>CSR Prefetching with React Query &rarr;</h2>
            <p>Prefetch on hover to preload react-query cache</p>
          </Card>

          <a
            href="https://github.com/matldupont/next-react-query"
            className={styles.card}
          >
            <h2>matldupont/next-react-query &rarr;</h2>
            <p>The code repository for this demo application</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Page>
  );
}
