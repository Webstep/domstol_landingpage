import { motion, Variant, Variants } from "framer-motion";
import React from "react";
import styles from "./ClearGoals.module.scss";
import Image from 'next/image';
import { Text, Title } from "../../../common/Typography";
import Citation from "../../../common/Citation";

interface AnimationStages extends Variants {
    hidden: Variant;
    show: Variant;
    leave: Variant
}

const item: AnimationStages = {
    hidden: {
        x: 200,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: [0, 0, 0.3, 0.6, 1],
        transition: {
            duration: 1
        }
    },
    leave: {}
}


const ClearGoals: React.FC = () => {
    const enterTransistion = {
        duration: 1.5,
    }

    const exitTransition = {
        duration: 1,
    }

    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.mediaLeft}
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: enterTransistion }}
                        exit={{ x: 0, opacity: 0, transition: exitTransition }}
                    >
                        <Image
                            src={'/assets/arealize/images/clear-goal-left.png'}
                            alt=""
                            width={481}
                            height={598}
                            objectFit={'cover'}
                        />
                    </motion.div>
                    <motion.div
                        className={styles.mediaRight}
                        initial={{ x: 0, opacity: 1 }}
                        animate={{ y: 0, opacity: 1, transition: enterTransistion }}
                        exit={{ x: 0, opacity: 1, transition: exitTransition }}
                    >
                        <Image
                            src={'/assets/arealize/images/clear-goal-right.png'}
                            alt=""
                            width={481}
                            height={300}
                            objectFit={'cover'}
                        />
                    </motion.div>
                    <div className={styles.textSection}>
                        <motion.div
                            initial={{ y: -200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1, transition: enterTransistion }}
                            exit={{ x: 100, opacity: 0, transition: exitTransition }}
                        >
                            <Title className={styles.heading}>
                                <div className={styles.stickyDiv}>
                                    TYDELIGE MÅL
                                </div>
                            </Title>
                        </motion.div>

                        <motion.div
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1, transition: enterTransistion }}
                            exit={{ y: 100, opacity: 0, transition: exitTransition }}
                        >
                            <div className={styles.description}>
                                <Text isOverlay>
                                    Målet er klart og tydelig: Arealize vil optimalisere og effektivisere planleggingingsprosessen på en måte som er både juridisk og psykososialt ansvarlig for at arbeidsmiljøet skal bli så bra som mulig.
                                </Text>
                                <div className={styles.quote}>
                                    <Citation
                                        quote="Slik skaper vi arbeidsmiljø som man kan trives i, samtidig som det ser fint ut."
                                        quoteType="short"
                                        variants={item}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ClearGoals;