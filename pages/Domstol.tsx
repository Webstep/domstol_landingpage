import React from "react";
import ExampleSlide from "../components/slides/domstol/ExampleSlide";
import scrollStyles from "../styles/Scroll.module.scss";

const Domstol = () => {
	return (
		<>
			<article className={scrollStyles.case}>
				<ExampleSlide />
			</article>
		</>
	);
};

export default Domstol;
