import { motion } from "framer-motion";
import React from "react";
import Citation from "../../../common/Citation";
import styles from "./CtoCitation.module.scss";
import { Text } from "../../../common/Typography";

const CtoCitation = () => {
    return (
        <section className={styles.section}>
            <div className={styles.media}>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ y: -400, opacity: 0 }}
                    transition={{
                        duration: 1,
                    }}
                >
                    <video
                        autoPlay
                        loop
                        muted
                        src="/assets/arealize/videos/Arealize_loop1.mov"
                    />
                </motion.div>
            </div>
            <div className={styles.textSection}>
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                    exit={{ y: 100, opacity: 0, transition: { duration: 1 } }}
                >
                    <Citation
                        quote="Vi fokuserer på å gjenbruke så mye som mulig innad i bygget, men samtidig tilpasse det til den nye leietakeren"
                        name="Yanislav Zagorov"
                        occupation="CTO i Arealize"
                        quoteType="short"
                    />
                </motion.div>
            </div>
        </section>

    );
};

export default CtoCitation;