import { filterProps } from 'framer-motion';
import React from 'react';
import styles from '../../../styles/Citation.module.scss';


interface CitationProps {
    title: string;
    name: string;
    quote: string;
}

const Citation: React.FC<CitationProps> = (props) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.border}>
                    <p className={styles.title}>{props.title}</p>
                    <div className={styles.line}/>
                </div>
                <div>
                    <blockquote className={styles.quote}>"{props.quote}"</blockquote>
                </div>
                <div className={styles.border}>
                    <div className={styles.line}/>
                    <p className={styles.name}>{props.name}</p>
                </div>

            </div>
        </>
    );
};

export default Citation;
