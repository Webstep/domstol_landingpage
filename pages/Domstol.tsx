import React from 'react'
import ConvictedPercent from '../components/slides/domstol/ConvictedPercent'
import Introduction from '../components/slides/domstol/Introduction'
import AboutUs from '../components/slides/domstol/AboutUs'
import HairyGoals from '../components/slides/domstol/HairyGoals'
import Employee from '../components/slides/domstol/EmployeeSlide/Employee'
import ImportantCompetency from '../components/slides/domstol/ImportantCompetency'
import NumberSlide from '../components/slides/domstol/NumberSlide'
import VideoSlideDA from '../components/slides/domstol/VideoSlideDA'
import VideoSlideTech from '../components/slides/domstol/VideoSlideTech'
import VideoSlideWebstep from '../components/slides/domstol/VideoSlideWebstep'

const Domstol = () => {
    return (
        <>
            <Introduction allowScrolling={() => { }} />
            <AboutUs />
            <ConvictedPercent />
            <HairyGoals />
            {/* <VideoSlideDA /> */}
            <ImportantCompetency />
            {/* <VideoSlideWebstep /> */}
            <NumberSlide />
            {/* <VideoSlideTech /> */}
            <Employee />
        </>
    )
}

export default Domstol