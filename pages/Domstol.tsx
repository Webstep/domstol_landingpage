import React from "react";
import AboutUs from "../components/slides/domstol/AboutUs";
import ArticleSlide from "../components/slides/domstol/ArticleSlide";
import ConvictedPercent from "../components/slides/domstol/ConvictedPercent";
import ExampleSlide from "../components/slides/domstol/ExampleSlide";
import NumberSlide from "../components/slides/domstol/NumberSlide";
import VideoSlide from "../components/slides/domstol/VideoSlide";
import VideoSlideDA from "../components/slides/domstol/VideoSlideDA";
import VideoSlideTech from "../components/slides/domstol/VideoSlideTech";
import VideoSlideWebstep from "../components/slides/domstol/VideoSlideWebstep";
import scrollStyles from "../styles/Scroll.module.scss";

const Domstol = () => {
	return (
		<>
			<article className={scrollStyles.case}>
				<ConvictedPercent></ConvictedPercent>
				<NumberSlide></NumberSlide>
				<AboutUs></AboutUs>
				<VideoSlideDA/>
				<ArticleSlide image={""}></ArticleSlide>
				<VideoSlideWebstep/>
				<VideoSlideTech/>
			</article>
		</>
	);
};

export default Domstol
