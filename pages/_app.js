import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
      <>
      <Component {...pageProps}>
        <Head>
            <title>Pokedex</title>
        </Head>
    </Component>

    </>

      )
}

export default MyApp