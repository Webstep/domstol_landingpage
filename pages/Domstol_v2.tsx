import { AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';
import AboutUs from '../components/slides/domstol/AboutUs';
import ConvictedPercent from '../components/slides/domstol/ConvictedPercent';
import Employee from '../components/slides/domstol/EmployeeSlide';
import HairyGoals from '../components/slides/domstol/HairyGoals';
import ImportantCompetency from '../components/slides/domstol/ImportantCompetency';
import Introduction from '../components/slides/domstol/Introduction';
import NumberSlide from '../components/slides/domstol/NumberSlide';
import VideoSlideDA from '../components/slides/domstol/VideoSlideDA';
import VideoSlideTech from '../components/slides/domstol/VideoSlideTech';
import VideoSlideWebstep from '../components/slides/domstol/VideoSlideWebstep';
import useScroll, { ScrollDirection } from '../hooks/scroll';
import { useSlideStore } from '../stores/activeSlide';



const Test = () => {
    const activeSlide = useSlideStore((state) => state.activeSlide)
    const setSlidesLength = useSlideStore((state) => state.setSlidesLength)
    const previousSlide = useSlideStore((state) => state.previousSlide)
    const nextSlide = useSlideStore((state) => state.nextSlide)

    const scrollThreshold = 50
    const resetScrollAfterSeconds = 1
    const scroll = useScroll(scrollThreshold, resetScrollAfterSeconds);

    useEffect(() => {
        if (!scroll) return;

        if (scroll === ScrollDirection.Down) {
            nextSlide()
        } else {
            previousSlide()
        }
    }, [nextSlide, previousSlide, scroll]);

    useEffect(() => {
        setSlidesLength(slides.length)
    }, [setSlidesLength]);

    console.log(activeSlide);


    return (
        <AnimatePresence exitBeforeEnter>
            {slides[activeSlide]}
        </AnimatePresence>
    );
};

export default Test;

const slides = [
    // <Introduction key="1" />,
    <AboutUs key="2" />,
    <ConvictedPercent key="3" />,
    <HairyGoals key="4" />,
    <VideoSlideDA key="5" />,
    <ImportantCompetency key="6" />,
    <VideoSlideWebstep key="7" />,
    <NumberSlide key="8" />,
    <VideoSlideTech key="9" />,
    <Employee key="10" />
]