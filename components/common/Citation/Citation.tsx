import { filterProps } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-hook-inview';
import styles from './Citation.module.scss';



interface CitationProps {
    name: string;
    quote: string;
    quoteType: string;
    position: string;
}

const Citation: React.FC<CitationProps> = (props) => {
    const [type, setType] = useState<string>(props.quoteType);
    const [ref, inView] = useInView();

    useEffect(() => {
        setType(props.quoteType);
    }, [setType, inView]);

    return (
        <>
            <div ref={ref}>
                {inView &&
                    <div className={styles.container} >
                        <div className={styles.quote}>
                            <blockquote className={`${styles[type]}`}>"{props.quote}"</blockquote>
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
