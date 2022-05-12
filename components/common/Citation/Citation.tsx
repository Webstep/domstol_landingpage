import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Citation.module.scss';



interface CitationProps {
    name: string;
    quote: string;
    quoteType: string;
    position: string;
}

const Citation: React.FC<CitationProps> = (props) => {
    const [ref, inView] = useInView();

    return (
        <>
            <div ref={ref}>
                {inView &&
                    <div className={styles.container} >
                        <div className={styles.quote}>
                            <blockquote className={`${styles[props.quoteType]}`}>&quot;{props.quote}&quot;</blockquote>
                        </div>
                        <div className={styles.origin}>
                            <p className={styles.name}>{props.name}</p>
                            <p className={styles.occupation}>{props.position}</p>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default Citation;
