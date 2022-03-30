import React from 'react'
import { motion } from 'framer-motion'

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

const PixelatedMan = () => {
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
                src="/pixelated_man_white.svg"
                alt="Figure"
            ></motion.img>
        </>
    )
}

export default PixelatedMan
