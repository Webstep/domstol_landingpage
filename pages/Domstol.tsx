import React from 'react'
import ScrollMenu from '../components/common/ScrollMenu'
import ExampleSlide from '../components/slides/domstol/ExampleSlide'
import scrollStyles from '../styles/Scroll.module.scss'

const listOfSlidesId = ['test0', 'test1', 'test2', 'test3', 'test4']

const Domstol = () => {
    return (
        <>
            <article className={scrollStyles.case}>
                <ScrollMenu />
                <ExampleSlide />
            </article>
        </>
    )
}

export default Domstol
