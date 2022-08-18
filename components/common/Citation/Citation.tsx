import { motion, MotionProps, Variants } from 'framer-motion';
import React, { FC } from 'react';
import styles from './Citation.module.scss';

interface CitationProps {
    name: string;
    quote: string;
    occupation: string;
    quoteType?: 'short' | 'long';
    variants?: Variants;
}

const Citation: FC<CitationProps & MotionProps> = ({ name, quote, occupation, quoteType = 'long', variants, ...options }) => {

    return (
        <motion.blockquote className={styles.container} {...options}>
            {quoteType === 'long' ? (
                <motion.span className={styles.longQuote} variants={variants}>
                    – {quote}
                </motion.span>
            ) : (
                <motion.q className={styles.shortQuote} variants={variants}>
                    {quote}
                </motion.q>
            )}

            <motion.footer className={styles.signature} variants={variants}>
                <span className={styles.name}>{name},</span>
                <span>{occupation}</span>
            </motion.footer>
        </motion.blockquote>
    )
}

export default Citation