import React from 'react'
import ConvictedPercent from '../components/slides/domstol/ConvictedPercent'
import Introduction from '../components/slides/domstol/Introduction'
import AboutUs from '../components/slides/domstol/AboutUs'
import HairyGoals from '../components/slides/domstol/HairyGoals'
import Employee from '../components/slides/domstol/EmployeeSlide/Employee'
import ImportantCompetency from '../components/slides/domstol/ImportantCompetency'
import NumberSlide from '../components/slides/domstol/NumberSlide'
import VideoSlideTech from '../components/slides/domstol/VideoSlideTech'
import VideoSlideWebstep from '../components/slides/domstol/VideoSlideWebstep'

const Domstol = () => {
    return (
        <>
            <Introduction />
            <AboutUs />
            <ConvictedPercent />
            <HairyGoals />
            <ImportantCompetency />
            <VideoSlideWebstep />
            <NumberSlide />
            <VideoSlideTech />
            <Employee />
        </>
    )
}

export default Domstol