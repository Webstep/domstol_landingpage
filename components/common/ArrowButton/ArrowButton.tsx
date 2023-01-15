import { motion } from 'framer-motion'
import React from 'react'
import styles from './ArrowButton.module.scss'
import ArrowIcon from '../../../public/icons/arrow.svg';
import Image from 'next/image';

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

interface ArrowButtonProps {
    direction: Direction
    onClick: () => void
    alt: string
    size?: Size
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
    direction,
    onClick,
    alt,
    size = Size.Small,
}) => {
    const variant = getVariant(direction)
    const dimentions = getDimentions(size === Size.Large ? 2 : 1)

    return (
        <motion.button
            onClick={onClick}
            className={styles.arrowButton}
            initial={{
                rotate: variant.rotate,
            }}
            whileHover={{
                scale: 1.2,
                type: 'tween',
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0 }}
        >
            <Image src={ArrowIcon} height={dimentions.h} width={dimentions.w} alt={alt} />
        </motion.button>
    )
}

export default ArrowButton

const getVariant = (direction: Direction) => {
    switch (direction) {
        case Direction.Right:
            return { rotate: -90 }
        case Direction.Left:
            return { rotate: 90 }
        case Direction.Up:
            return { rotate: 180 }
        default:
            return { rotate: 0 }
    }
}

const getDimentions = (scale = 1) => {
    return { w: 35 * scale, h: 33 * scale }
}
