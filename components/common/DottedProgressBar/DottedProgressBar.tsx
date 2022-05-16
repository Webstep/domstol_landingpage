import React from 'react'
import styles from './ProgressBar.module.scss'
import RectangleButton from './Rectangle'


export enum Direction {
    Vertical = 'vertical',
    Horizontal = 'horizontal',
}

interface DottedProgressBarprops {
    direction: Direction,
    size: number,
    progress: number,
    onClick: (value: number) => void
}

const DottedProgressBar: React.FC<DottedProgressBarprops> = ({
    direction,
    size,
    progress,
    onClick
}) => {
    const numberOfDots = [...new Array(size)]
    return (
        <div className={direction === Direction.Horizontal ? styles.horizontal : styles.Vertical}>
            {numberOfDots.map((_, index) => (
                <RectangleButton key={index} highlight={index === progress} onClick={() => { onClick(index) }} />
            ))}
        </div >
    )
}

export default DottedProgressBar
