import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Number.module.scss';

const NumberSlide = () => {
    const [number, setNumber] = useState<number>(0);
    const [ref, inView] = useInView();

    useEffect(() => {

        if (inView) {
            const incrementNumber = () => {
                if (number < 261974) {
                    setNumber(number + 297);
                } else {
                    setNumber(261974);
                    clearInterval(interval);
                }
            }
            const interval = setInterval(incrementNumber, 1)
            return () => {
                clearInterval(interval)
            }
        }
        else {
            setNumber(0);
        }
    }, [inView, number])

    return (
        <motion.section className={styles.section}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}  >
            <div className={styles.extraheight}></div>
            <div className={styles.extraheight}></div>
            <motion.span ref={ref} className={styles.number}
                initial={{
                    color: '#ffffff',
                }}
                whileInView={{
                    color: '#F2B355',
                }}
                viewport={{ once: false }}
                transition={{
                    color: { duration: 2, delay: 2 },
                }}
            >
                {number.toLocaleString('no')}
            </motion.span>
            <div className={styles.extraheight}></div>
            <span>
                <p className={styles.text1}>Straffede personer i Norge i 2020.</p>
            </span>
            <div className={styles.extraheight}></div>
            <span>
                <p className={styles.text2}>Det krever å holde tunga rett i munnen. Og et system som er pålitelig.</p>
            </span>
            <div className={styles.extraheight}></div>
        </motion.section>
    );
};

export default NumberSlide;
