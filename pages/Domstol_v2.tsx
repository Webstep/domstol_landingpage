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
        <Introduction key="Intro" allowScrolling={(value: boolean) => setPreventScrolling(!value)} />,
        <AboutUs key="Domstoladministrasjonen" />,
        <ConvictedPercent key="1 av 6 personer" />,
        <HairyGoals key="Hårete mål" />,
        <ImportantCompetency key="Viktig kompetanse" />,
        <VideoSlideWebstep key="Hva gjør Webstep?" />,
        <NumberSlide key="Straffereaksjoner" />,
        <VideoSlideTech key="Carl forklarer" />,
        <Collaboration key="Webstep og domstolene" />,
        <Employee key="Les mer" />
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
                            right: "4px",
                            top: "50vh",
                            transform: "translateY(-50%)"
                        }}>
                            <DottedProgressBar size={slides.length} progress={activeSlide} onClick={(newSlideIndex) => setActiveSlide(newSlideIndex)} isVertical titles={slides.map(item => item.key as string)} />
                        </div>
                    </>
                )
            }
        </Device>
    );
};

export default Domstol;
