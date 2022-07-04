import React from 'react';
import styles from './Text.module.scss'

interface TextProps {
    isOverlay?: boolean
}

const Text: React.FC<TextProps> = ({ children, isOverlay, ...options }) => {
    return (
        <div className={styles.container}>
            <p className={styles.text + (isOverlay ? " " + styles.overlay : "")} {...options}>
                {children}
            </p>
        </div>
    );
};

export default Text;
