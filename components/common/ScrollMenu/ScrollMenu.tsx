import React, { useEffect, useState } from 'react'
import ScrollButton, { Direction } from '../ScrollButton'
import styles from './Scrollmenu.module.scss'

const listOfSlidesIds = ['test0', 'test1', 'test2', 'test3', 'test4']

const ScrollMenu: React.VFC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const scrollToNext = () => {
        setCurrentIndex(currentIndex + 1)
    }

    const scrollToPrev = () => {
        setCurrentIndex(currentIndex - 1)
    }

    useEffect(() => {
        var el = document.getElementById(listOfSlidesIds[currentIndex])
        el?.scrollIntoView({ behavior: 'smooth' })
    }, [currentIndex])

    return (
        <>
            <div className={styles.stack}>
                <ScrollButton direction={Direction.Up} onClick={scrollToPrev} />

                <ScrollButton
                    direction={Direction.Down}
                    onClick={scrollToNext}
                />
            </div>
        </>
    )
}

export default ScrollMenu
