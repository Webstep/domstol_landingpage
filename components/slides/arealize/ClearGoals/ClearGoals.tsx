import { motion, Variant, Variants } from "framer-motion";
import React, { useContext } from "react";
import styles from "./ClearGoals.module.scss";
import Image from 'next/image';
import { Text, Title } from "../../../common/Typography";
import Citation from "../../../common/Citation";
import { DeviceContext } from "../../../common/Device";

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
    const { isMobile } = useContext(DeviceContext)

    const enterTransistion = {
        duration: 1,
    }

    const exitTransition = {
        duration: 0.5,
    }

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.textSection}>
                    <motion.div
                        initial={isMobile ? {} : { y: -200, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: enterTransistion }}
                        exit={{ x: 100, opacity: 0, transition: exitTransition }}
                        viewport={{ once: true }}
                    >
                        <Title className={styles.heading}>
                            <div className={styles.stickyDiv}>
                                TYDELIGE MÅL
                            </div>
                        </Title>
                    </motion.div>

                    <motion.div
                        initial={isMobile ? {} : { x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1, transition: enterTransistion }}
                        exit={{ y: 100, opacity: 0, transition: exitTransition }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.description}>
                            {isMobile ?
                                <Text><b>Målet til Arealize er klart og tydelig:</b> <br /> De ønsker å optimalisere og effektivisere planleggingingsprosessen på en måte som er både juridisk og psykososialt ansvarlig for at arbeidsmiljøet skal bli så bra som mulig.</Text>
                                :
                                <Text>Arealize vil skape de beste arealene å jobbe i - hensyn tatt til jobbopplevelse, arbeidsmiljø og lovkrav.</Text>
                            }
                            <div className={styles.quote}>
                                <Citation
                                    quote="Vi skal skape fine miljøer som folk trives i"
                                    quoteType="short"
                                    variants={item}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    className={styles.mediaLeft}
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1, transition: enterTransistion }}
                    exit={{ x: -100, opacity: 0, transition: exitTransition }}
                    viewport={{ once: true }}
                >
                    <Image
                        src={'/assets/arealize/images/clear-goal-left.png'}
                        alt=""
                        width={481}
                        height={598}
                        style={{ objectFit: 'cover' }}
                    />
                </motion.div>
                <motion.div
                    className={styles.mediaRight}
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, transition: enterTransistion }}
                    exit={{ x: 100, opacity: 1, transition: exitTransition }}
                    viewport={{ once: true }}
                >
                    <Image
                        src={'/assets/arealize/images/clear-goal-right.png'}
                        alt=""
                        width={481}
                        height={300}
                        style={{ objectFit: 'cover' }}
                    />
                </motion.div>
            </div>
        </section >
    );
};

export default ClearGoals;