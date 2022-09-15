import { motion, MotionProps } from 'framer-motion';
import React from 'react';
import styles from './Typography.module.scss'

interface TitleProps extends MotionProps {
    className?: string;
}

const Title: React.FC<TitleProps> = ({ className, children, ...options }) => {
    return (
        <motion.h2
            {...options}
            className={className ? className + " " + styles.title : styles.title}
        >
            {children}
        </motion.h2>
    );
};

export default Title;
