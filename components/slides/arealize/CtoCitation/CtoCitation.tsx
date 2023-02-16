import { motion } from "framer-motion";
import React, { useContext } from "react";
import Citation from "../../../common/Citation";
import styles from "./CtoCitation.module.scss";
import { DeviceContext } from "../../../common/Device";
import { useInView } from "react-intersection-observer";

const CtoCitation = () => {

    const { isMobile } = useContext(DeviceContext)

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <section className={styles.section}>
            <div className={styles.media}>
                <motion.div
                    initial={isMobile ? {} : { x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    exit={{ y: -400, opacity: 0 }}
                    transition={{
                        duration: 1,
                    }}
                    viewport={{ once: true }}
                >
                    <video
                        autoPlay
                        loop
                        muted
                        src="/assets/arealize/videos/Arealize_loop1.mov"
                    />
                </motion.div>
            </div>
            <div
                className={styles.textSection}
                ref={ref}
            >
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={isMobile ? { y: -200, opacity: 1 } : { y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    viewport={{ once: true }}
                >
                    <Citation
                        quote="Vi fokuserer på gjenbruk - og personlig tilpasning til nye leietakere"
                        name="Yanislav Zagorov"
                        occupation="Arealize CTO"
                        quoteType="short"
                    />
                </motion.div>
            </div>
        </section>

    );
};

export default CtoCitation;