import { motion } from 'framer-motion'
import React, { useMemo } from 'react'
import styles from './ScrollButton.module.scss'

export enum Direction {
    Up,
    Down,
    Left,
    Right,
}

export enum Size {
    Large,
    Small,
}

interface ScrollButtonProps {
    direction: Direction
    onClick: () => void
    size?: Size
}

const ScrollButton: React.FC<ScrollButtonProps> = ({
    direction,
    onClick,
    size = Size.Small,
}) => {
    const variant = getVariant(direction)

    const className = [
        styles.arrowButton,
        size === Size.Large ? styles.large : styles.small,
    ].join(' ')

    return (
        <motion.button
            onClick={onClick}
            className={className}
            initial={{
                rotate: variant.rotate,
            }}
            whileHover={{
                scale: 1.2,
                type: 'tween',
                transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
        >
            <img src="/pixelated_arrow.svg" alt="pil" />
        </motion.button>
    )
}

export default ScrollButton

const getVariant = (direction: Direction) => {
    switch (direction) {
        case Direction.Up:
            return { rotate: -90 }
        case Direction.Down:
            return { rotate: 90 }
        case Direction.Left:
            return { rotate: 180 }
        default:
            return { rotate: 0 }
    }
}
