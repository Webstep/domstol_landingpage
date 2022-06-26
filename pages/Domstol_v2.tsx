import { AnimatePresence } from 'framer-motion';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import DottedProgressBar from '../components/common/DottedProgressBar';
import AboutUs from '../components/slides/domstol/AboutUs';
import Collaboration from '../components/slides/domstol/Collaboration';
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

const Domstol: React.VFC = () => {
    const activeSlide = useSlideStore((state) => state.activeSlide)
    const setSlidesLength = useSlideStore((state) => state.setSlidesLength)
    const previousSlide = useSlideStore((state) => state.previousSlide)
    const nextSlide = useSlideStore((state) => state.nextSlide)
    const setActiveSlide = useSlideStore((state) => state.setActiveSlide)

    const slides = useMemo(() => [
        <Introduction key="1" allowScrolling={(value: boolean) => setPreventScrolling(!value)} />,
        <AboutUs key="2" />,
        <ConvictedPercent key="3" />,
        <HairyGoals key="4" />,
        <VideoSlideDA key="5" />,
        <ImportantCompetency key="6" />,
        <VideoSlideWebstep key="7" />,
        <NumberSlide key="8" />,
        <VideoSlideTech key="9" />,
        <Collaboration key="collaboration" />,
        <Employee key="10" />
    ], [])

    const [isMobile, setIsMobile] = useState<boolean>();

    useEffect(() => {
        setIsMobile(window.screen.width <= 1200)
    }, []);

    useEffect(() => {
        setSlidesLength(slides.length)
    }, [setSlidesLength, slides.length]);

    const [preventScrolling, setPreventScrolling] = useState<boolean>(true);

    useEffect(() => {
        setPreventScrolling(activeSlide === 0)
    }, [activeSlide]);

    const handleScroll = useCallback((direction: ScrollDirection) => {
        //disables scrolling if on mobile version or manually overwritten
        if (isMobile || preventScrolling === true) return;

        if (direction === ScrollDirection.Down) {
            nextSlide()
        } else {
            previousSlide()
        }
    }, [isMobile, preventScrolling, nextSlide, previousSlide])

    useScroll({ handleScroll, resetTime: 0.5 });


    return (
        <>

            {isMobile ? <>
                {slides}

            </> : <>
                <AnimatePresence exitBeforeEnter>
                    {slides[activeSlide]}
                </AnimatePresence>
            </>}

            <div style={{
                position: "fixed",
                right: "20px",
                top: "50vh",
                transform: "translateY(-50%)"
            }}>
                <DottedProgressBar size={slides.length} progress={activeSlide} onClick={(newSlideIndex) => setActiveSlide(newSlideIndex)} isVertical />
            </div>
        </>
    );
};

export default Domstol;
