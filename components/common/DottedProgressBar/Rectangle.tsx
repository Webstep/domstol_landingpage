import { motion } from 'framer-motion'
import React from 'react'
import styles from './ProgressBar.module.scss'
import InActiveRectangle from '../../../public/icons/rectangle.svg';
import ActiveRectangle from '../../../public/icons/highlighted_rectangle.svg';

import Image from 'next/image';

interface RectangleProps {
    highlight?: boolean
    onClick: () => void
}

const RectangleButton: React.VFC<RectangleProps> = ({ highlight = false, onClick }) => {
    return (
        <motion.button
            className={styles.rectangle}
            onClick={onClick}
            initial="start"
            animate="end"
            transition={{ duration: 0 }}
        >
            <Image src={
                highlight
                    ? ActiveRectangle
                    : InActiveRectangle
            } alt={"Rectangle"} height={10} width={10} />
        </motion.button>
    )
}

export default RectangleButton