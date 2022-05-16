import { AnimatePresence } from 'framer-motion';
import React, { useCallback, useEffect } from 'react';
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

const slides = [
    <Introduction key="1" />,
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

const Domstol = () => {
    const activeSlide = useSlideStore((state) => state.activeSlide)
    const setSlidesLength = useSlideStore((state) => state.setSlidesLength)
    const previousSlide = useSlideStore((state) => state.previousSlide)
    const nextSlide = useSlideStore((state) => state.nextSlide)

    const handleScroll = useCallback((direction: ScrollDirection) => {
        if (direction === ScrollDirection.Down) {
            nextSlide()
        } else {
            previousSlide()
        }
    }, [nextSlide, previousSlide])

    useScroll({ handleScroll });

    useEffect(() => {
        setSlidesLength(slides.length)
    }, [setSlidesLength]);

    return (
        <AnimatePresence exitBeforeEnter>
            {slides[activeSlide]}
        </AnimatePresence>
    );
};

export default Domstol;
