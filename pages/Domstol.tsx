import React from 'react'
import ConvictedPercent from '../components/slides/domstol/ConvictedPercent'
import ExampleSlide from '../components/slides/domstol/ExampleSlide'
import Introduction from '../components/slides/domstol/Introduction'
import AboutUs from '../components/slides/domstol/AboutUs'
import HairyGoals from '../components/slides/domstol/HairyGoals'
import ArticleSlide from '../components/slides/domstol/ArticleSlide'
import NumberSlide from '../components/slides/domstol/NumberSlide'
import VideoSlideDA from '../components/slides/domstol/VideoSlideDA'
import VideoSlideTech from '../components/slides/domstol/VideoSlideTech'
import VideoSlideWebstep from '../components/slides/domstol/VideoSlideWebstep'

const Domstol = () => {
    return (
        <>
            <Introduction />
            <ConvictedPercent />
            <HairyGoals />
            <AboutUs />
            <NumberSlide/>
			<VideoSlideDA/>
			<ArticleSlide/>
			<VideoSlideWebstep/>
			<VideoSlideDA />
			<VideoSlideTech/>
        </>
    )
}

export default Domstol
