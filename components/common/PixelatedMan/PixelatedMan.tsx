import React from 'react'
import { motion } from 'framer-motion'

interface PixelatedManProps {
    className?: string,
    highlight?: boolean
}

const PixelatedMan: React.VFC<PixelatedManProps> = ({ className, highlight = false }) => {
    const imgVariants = {
        start: {
            opacity: 0,
            scale: 0.9,
        },
        end: {
            opacity: highlight ? 1 : 0.5,
            scale: 1,
        },
    }

    return (
        <motion.img
            variants={imgVariants}
            initial="start"
            animate="end"
            className={className}
            transition={{
                scale: { duration: 1 },
            }}
            src={
                highlight
                    ? '/pixelated_man_yellow.svg'
                    : '/pixelated_man_white.svg'
            }
            alt=""
        />
    )
}

export default PixelatedMan

