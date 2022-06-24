import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar';
import { Router } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  return (

  <>
      <NextNProgress color="#c48ca7"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
  showOnShallow={true} />
      <Component {...pageProps} />
  </>
  )
}

export default MyApp
