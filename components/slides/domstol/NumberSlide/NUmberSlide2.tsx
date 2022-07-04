import { animate, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Number.module.scss';

const NumberSlide2 = () => {
    const [from, setFrom] = useState<number>(0);
    const [to, setTo] = useState<number>(100);
    const [number, setNumber] = useState<number>(0);
    const [width, setWidth] = useState<number>(500);
    const [ref, inView] = useInView();

    interface counterProps {
        from: number;
        to: number;
    }


    const Counter = (counterProps: { from: number; to: number; }) => {
        const nodeRef = useRef<HTMLParagraphElement>(null);

        useEffect(() => {
            const node = nodeRef.current;

            const controls = animate(counterProps.from, counterProps.to, {
                duration: 3,
                onUpdate(value) {
                    node!.textContent = value.toFixed(2);
                }
            });
            return () => controls.stop();

        }, [from, to]);

        return <p ref={nodeRef} />;
    }


    return (
        <section ref={ref} className={styles.section}>
            {inView &&
                <div className={styles.container}>
                    <motion.div
                        className={styles.number}
                        initial={{ x: width }}
                        animate={{ x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 2 }}
                    >
                        <motion.span
                            initial={{
                                color: '#ffffff',
                                fontSize: '2rem'
                            }}
                            whileInView={{
                                color: '#F2B355',
                                fontSize: '14rem'
                            }}
                            viewport={{ once: false }}
                            transition={{
                                duration: 2,
                                delay: 2
                            }}
                        >
                            {number.toLocaleString('no')}
                            <Counter from={0} to={237586} />
                        </motion.span>
                    </motion.div>
                    <motion.div
                        className={styles.textContainer}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 4 }}
                        viewport={{ once: false }}
                    >
                        <p className={styles.text}>Straffede personer i 2020.</p>
                        <p className={styles.text}>Det krever å holde tunga rett i munnen. Og et system som er pålitelig.</p>
                    </motion.div>

                </div>
            }
        </section>
    );
};

export default NumberSlide2;
