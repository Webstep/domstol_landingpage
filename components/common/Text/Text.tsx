import React from 'react';
import styles from './Text.module.scss'

interface TextProps {
    isOverlay?: boolean
}

const Text: React.FC<TextProps> = ({ children, isOverlay, ...options }) => {
    return (
        <div className={styles.container + (isOverlay ? " " + styles.overlay : "")}>
            <p className={styles.text} {...options}>
                {children}
            </p>
        </div>
    );
};

export default Text;
