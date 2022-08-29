import { AnimatePresence } from 'framer-motion';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Device from '../components/common/Device/Device';
import DottedProgressBar from '../components/common/DottedProgressBar';
import AboutUs from '../components/slides/domstol/AboutUs';
import Collaboration from '../components/slides/domstol/Collaboration';
import ConvictedPercent from '../components/slides/domstol/ConvictedPercent';
import Employee from '../components/slides/domstol/EmployeeSlide';
import HairyGoals from '../components/slides/domstol/HairyGoals';
import ImportantCompetency from '../components/slides/domstol/ImportantCompetency';
import Introduction from '../components/slides/domstol/Introduction';
import NumberSlide from '../components/slides/domstol/NumberSlide';
import VideoSlideTech from '../components/slides/domstol/VideoSlideTech';
import VideoSlideWebstep from '../components/slides/domstol/VideoSlideWebstep';
import useScreenWidth from '../hooks/isMobile';
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
        <ImportantCompetency key="6" />,
        <VideoSlideWebstep key="7" />,
        <NumberSlide key="8" />,
        <VideoSlideTech key="9" />,
        <Collaboration key="collaboration" />,
        <Employee key="10" />
    ], [])

    const isScreenSmall = useScreenWidth();

    useEffect(() => {
        setSlidesLength(slides.length)
    }, [setSlidesLength, slides.length]);

    const [preventScrolling, setPreventScrolling] = useState<boolean>(true);

    useEffect(() => {
        setPreventScrolling(activeSlide === 0)
    }, [activeSlide]);

    const handleScroll = useCallback((direction: ScrollDirection) => {
        if (preventScrolling === true) return;

        if (direction === ScrollDirection.Down) {
            nextSlide()
        } else {
            previousSlide()
        }
    }, [preventScrolling, nextSlide, previousSlide])

    useScroll({ handleScroll, resetTime: 0.5 });
    const mobileSlides = slides.filter((_, index) => index !== 0)

    return (
        <Device>
            {({ isMobile }) =>
                isMobile || isScreenSmall ? (
                    mobileSlides
                ) : (
                    <>

                        <AnimatePresence exitBeforeEnter>
                            {slides[activeSlide]}
                        </AnimatePresence>
                        <div style={{
                            position: "fixed",
                            right: "20px",
                            top: "50vh",
                            transform: "translateY(-50%)"
                        }}>
                            <DottedProgressBar size={slides.length} progress={activeSlide} onClick={(newSlideIndex) => setActiveSlide(newSlideIndex)} isVertical />
                        </div>
                    </>
                )
            }
        </Device>
    );
};

export default Domstol;
