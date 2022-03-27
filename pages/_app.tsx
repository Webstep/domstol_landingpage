import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import scrollStyles from '../styles/Scroll.module.scss'
import ScrollMenu from '../components/common/ScrollMenu'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Webstep</title>
                <meta name="Webstep historier" content="Lorem ipsum" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <article className={scrollStyles.case}>
                <ScrollMenu />
                <Navbar />
                <Component {...pageProps} />
            </article>
        </>
    )
}

export default MyApp
