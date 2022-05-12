import React from 'react'
import ConvictedPercent from '../components/slides/domstol/ConvictedPercent'
import ExampleSlide from '../components/slides/domstol/ExampleSlide'
import Introduction from '../components/slides/domstol/Introduction'
import AboutUs from '../components/slides/domstol/AboutUs'
import HairyGoals from '../components/slides/domstol/HairyGoals'
import Employee from '../components/slides/domstol/EmployeeSlide/Employee'

const Domstol = () => {
    return (
        <>
            <Introduction />
            <AboutUs />
            <ConvictedPercent />
            <HairyGoals />
            <Employee/>
        </>
    )
}

export default Domstol