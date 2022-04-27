import { motion, MotionConfig } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styles from './Number.module.scss';

const NumberSlide = () => {
    const [number, setNumber] = useState<number>(0);
    const [width, setWidth] = useState<number>(1000);

    useEffect(() => {
        setWidth(window.innerWidth);
        const incrementNumber = () => {
            if (number < 261974) {
                setNumber(number + 397);
            } else {
                setNumber(261974);
                clearInterval(interval);
            }
        }
        const interval = setInterval(incrementNumber, 1)

        return () => {
            clearInterval(interval)
        }
    })

    return (
        <section>
            <div className={styles.container}>
                <motion.div
                    className={styles.number}
                    initial={{ x: width }}
                    animate={{ x: 0 }}
                    //viewport={{ once: false }}
                    transition={{ duration: 2 }}
                >
                    <motion.span
                        initial={{
                            color: '#ffffff',
                            fontSize: '2rem'
                        }}
                        animate={{
                            color: '#F2B355',
                            fontSize: '14rem'
                        }}
                        //viewport={{ once: false }}
                        transition={{
                            duration: 2,
                            delay: 2
                        }}
                    >
                        {number.toLocaleString('no')}
                    </motion.span>
                </motion.div>
                <motion.div
                    className={styles.textContainer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 4 }}
                    //viewport={{ once: false }}
                    >
                    <p className={styles.text}>Straffede personer i 2020.</p>
                    <p className={styles.text}>Det krever å holde tunga rett i munnen. Og et system som er pålitelig.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default NumberSlide;
