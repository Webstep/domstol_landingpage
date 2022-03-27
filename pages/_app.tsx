import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import scrollStyles from '../styles/Scroll.module.scss'
import ScrollMenu from '../components/common/ScrollMenu'

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
                <Component {...pageProps} />
            </article>
        </>
    )
}

export default MyApp
