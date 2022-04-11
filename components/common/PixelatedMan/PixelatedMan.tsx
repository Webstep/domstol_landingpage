import React from 'react'
import { motion } from 'framer-motion'

interface PixelatedManProps {
    highlight?: boolean
}

const PixelatedMan: React.VFC<PixelatedManProps> = ({ highlight = false }) => {
    return (
        <>
            <motion.img
                variants={imgVariants}
                initial="start"
                animate="end"
                transition={{
                    opacity: { duration: 18 },
                    scale: { duration: 1 },
                }}
                src={
                    highlight
                        ? '/pixelated_man_yellow.svg'
                        : '/pixelated_man_white.svg'
                }
                alt="Figure"
            ></motion.img>
        </>
    )
}

export default PixelatedMan

const imgVariants = {
    start: {
        opacity: 0,
        scale: 0.9,
    },
    end: {
        opacity: 100,
        scale: 1,
    },
}
