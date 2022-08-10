import { AppProps } from 'next/app'
import Head from 'next/head'
import { BrowserRouter } from 'react-router-dom'
import '../../styles/global.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Basketly</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <script src="../path/to/flowbite/dist/flowbite.js"></script>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
          crossOrigin=""
        />
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
