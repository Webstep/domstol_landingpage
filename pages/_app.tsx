import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import scrollStyles from '../styles/Scroll.module.scss'
import Navbar from '../components/Navbar'
import DeviceProvider from '../components/common/Device'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Webstep</title>
                <meta name="Webstep historier" content="Lorem ipsum" />
                <link rel="icon" href="/meta/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/meta/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/meta/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/meta/favicon-16x16.png" />
                <link rel="manifest" href="/meta/site.webmanifest" />
                <link rel="mask-icon" href="/meta/safari-pinned-tab.svg" color="#1c1e4e" />
                <link rel="shortcut icon" href="/meta/favicon.ico" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="msapplication-config" content="/meta/browserconfig.xml" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <DeviceProvider>
                <article className={scrollStyles.case}>
                    <Navbar />
                    <Component {...pageProps} />
                </article>
            </DeviceProvider>
        </>
    )
}

export default MyApp
