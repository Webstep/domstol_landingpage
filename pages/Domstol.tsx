import React from 'react'
import ConvictedPercent from '../components/slides/domstol/ConvictedPercent'
import Introduction from '../components/slides/domstol/Introduction'
import AboutUs from '../components/slides/domstol/AboutUs'
import HairyGoals from '../components/slides/domstol/HairyGoals'
import ImportantCompetency from '../components/slides/domstol/ImportantCompetency'

const Domstol = () => {
    return (
        <>
            <Introduction />
            <ImportantCompetency/>
            <ConvictedPercent />
            <HairyGoals />
            <AboutUs />
        </>
    )
}

export default Domstol
