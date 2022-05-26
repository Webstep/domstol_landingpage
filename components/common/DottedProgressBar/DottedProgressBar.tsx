import React from 'react'
import styles from './ProgressBar.module.scss'
import RectangleButton from './Rectangle'
interface DottedProgressBarprops {
    isVertical?: boolean,
    size: number,
    progress: number,
    onClick: (value: number) => void
}

const DottedProgressBar: React.FC<DottedProgressBarprops> = ({
    isVertical = false,
    size,
    progress,
    onClick
}) => {
    const numberOfDots = [...new Array(size)]
    return (
        <div className={isVertical ? styles.Vertical : styles.horizontal}>
            {numberOfDots.map((_, index) => (
                <RectangleButton key={index} highlight={index === progress} onClick={() => { onClick(index) }} />
            ))}
        </div >
    )
}

export default DottedProgressBar
