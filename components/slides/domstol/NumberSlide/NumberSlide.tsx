import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Counter from '../../../common/Counter';
import styles from './Number.module.scss';


const NumberSlide = () => {
    const [inViewRef, inView] = useInView();

    return (
        <motion.section className={styles.section}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}  >
            <div className={styles.extraheight}></div>
            <div className={styles.extraheight}></div>
            <motion.div ref={inViewRef} className={styles.number}
                initial={{
                    color: '#ffffff',
                }}
                whileInView={{
                    color: '#F2B355',
                }}
                viewport={{ once: false }}
                transition={{
                    color: { duration: 4, ease: 'easeIn' },
                }}
            >
                <Counter from={0} to={261974} shouldAnimate={inView} />
            </motion.div>
            <div className={styles.extraheight}></div>
            <p className={styles.text1}>Straffede personer i Norge i 2020.</p>
            <div className={styles.extraheight}></div>
            <p className={styles.text2}>Det krever å holde tunga rett i munnen. Og et system som er pålitelig.</p>
            <div className={styles.extraheight}></div>
        </motion.section>
    );
};

export default NumberSlide;
