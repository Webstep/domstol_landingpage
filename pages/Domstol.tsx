import React from 'react'
import ConvictedPercent from '../components/slides/domstol/ConvictedPercent'
import ExampleSlide from '../components/slides/domstol/ExampleSlide'
import Introduction from '../components/slides/domstol/Introduction'
import AboutUs from '../components/slides/domstol/AboutUs'
import HairyGoals from '../components/slides/domstol/HairyGoals'
import Article from '../components/slides/domstol/ArticleSlide'

const Domstol = () => {
    return (
        <>
            <Introduction />
            <Article/>
            <ConvictedPercent />
            <HairyGoals />
            <AboutUs />
        </>
    )
}

export default Domstol
