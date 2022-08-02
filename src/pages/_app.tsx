import { AppProps } from 'next/app'
import Head from 'next/head'
import '../../styles/global.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Basketly</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />

        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
