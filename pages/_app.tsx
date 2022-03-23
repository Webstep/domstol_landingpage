import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../components/navbar'
import scrollStyles from "../styles/Scroll.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Webstep</title>
                <meta name="Webstep historier" content="Lorem ipsum" />
                <link rel="icon" href="/favicon.ico" />
            </Head><article className={scrollStyles.case}>
				<Navbar></Navbar>
				<Component {...pageProps} />
			</article>

        </>
    )
}

export default MyApp
