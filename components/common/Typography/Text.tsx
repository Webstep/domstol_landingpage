import { motion, MotionProps } from 'framer-motion';
import React from 'react';
import styles from './Typography.module.scss'

interface TextProps extends MotionProps {
    isOverlay?: boolean
}

const Text: React.FC<TextProps> = ({ children, isOverlay, ...options }) => {
    return (
        <div className={styles.container + (isOverlay ? " " + styles.overlay : "")}>
            <motion.p className={styles.text} {...options}>
                {children}
            </motion.p>
        </div>
    );
};

export default Text;
