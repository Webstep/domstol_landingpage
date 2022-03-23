import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import '../styles/variables.module.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
