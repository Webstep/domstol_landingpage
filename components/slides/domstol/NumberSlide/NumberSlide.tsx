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
        <section className={styles.section}>

            <motion.span ref={ref} className={styles.number}
                initial={{
                    color: '#ffffff',
                    opacity: 0.1
                    //fontSize: '0%',
                }}
                whileInView={{
                    color: '#F2B355',
                    opacity: 1
                    //fontSize: '100%',
                }}
                viewport={{ once: false }}
                transition={{
                    color: { duration: 2, delay: 2 },
                    opacity: { duration: 0.5 }
                }}
            >
                {number.toLocaleString('no')}
            </motion.span>

            <motion.div
                className={styles.textContainer}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3 }}
                viewport={{ once: false }}
            >
                <p className={styles.text1}>Straffede personer i 2020.</p>
                <p className={styles.text2}>Det krever å holde tunga rett i munnen. Og et system som er pålitelig.</p>
            </motion.div>
            <div className={styles.extraheight}></div>

        </section>
    );
};

export default NumberSlide;
