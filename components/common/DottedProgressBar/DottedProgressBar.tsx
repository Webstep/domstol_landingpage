import React, { useRef } from 'react'
import styles from './ProgressBar.module.scss'
import RectangleButton from './Rectangle'
interface DottedProgressBarprops {
    isVertical?: boolean,
    size: number,
    progress: number,
    onClick: (value: number) => void,
    titles?: string[]
}

const DottedProgressBar: React.FC<DottedProgressBarprops> = ({
    isVertical = false,
    size,
    progress,
    onClick,
    titles
}) => {
    const numberOfDots = [...new Array(size)]

    const items = titles || numberOfDots;

    return (
        <div className={isVertical ? styles.vertical : styles.horizontal} >
            {items.map((item, index) => (
                <RectangleButton key={index} highlight={index === progress} onClick={() => onClick(index)}>
                    {titles && (
                        <span key={index} className={styles.title}>{item}</span>
                    )}
                </RectangleButton>
            ))}
        </div>
    )
}

export default DottedProgressBar
