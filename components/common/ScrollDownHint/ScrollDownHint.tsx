import { motion } from 'framer-motion';
import React from 'react';
import { useSlideStore } from '../../../stores/activeSlide';
import ArrowButton, { Direction } from '../ArrowButton';
import styles from './ScrollDownHint.module.scss';

interface ScrollDownHintProps {
    onClick: () => void;
}

const ScrollDownHint: React.FC<ScrollDownHintProps> = ({ onClick }) => {
    const showHint = useSlideStore((state) => state.showHint)

    return showHint ? (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            className={styles.scrollDown}
        >
            {/* <span>Scroll</span> */}
            <motion.div
                animate={{
                    y: [0, 8, 0]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5
                }}>

                <ArrowButton
                    direction={Direction.Down}
                    onClick={onClick}
                    alt='pil ned'
                />
            </motion.div>
        </motion.div>
    ) : <></>;
};

export default ScrollDownHint;
