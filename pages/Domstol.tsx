import React from "react";
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
			<NumberSlide></NumberSlide>
			<VideoSlideDA />
			<VideoSlideWebstep />
			<VideoSlideTech />
		</>
	);
};

export default Domstol
