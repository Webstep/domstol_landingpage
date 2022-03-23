import type { NextPage } from "next";
import Head from "next/head";
import ExampleSlide from "../components/slides/domstol/ExampleSlide";
import scrollStyles from "../styles/Scroll.module.scss";

const Domstol: NextPage = () => {
	return (
		<article className={scrollStyles.case}>
			<Head>
				<title>Webstep</title>
				<meta name="Webstep historier" content="Lorem ipsum" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ExampleSlide />
		</article>
	);
};

export default Domstol;
