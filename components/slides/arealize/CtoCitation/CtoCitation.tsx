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
            <motion.div
                className={styles.textSection}
                initial={{}}
                animate={isMobile && inView ? { background: 'rgb(0, 0, 0, 0.5)', transition: { duration: 1 } } : {}}
                exit={{}}
                ref={ref}
            >
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={isMobile ? { y: -200, opacity: 1, transition: { duration: 1 } } : { y: 0, opacity: 1, transition: { duration: 1 } }}
                    exit={{ y: 100, opacity: 0, transition: { duration: 1 } }}
                >
                    <Citation
                        quote="Vi fokuserer på å gjenbruke så mye som mulig innad i bygget, men samtidig tilpasse det til den nye leietakeren"
                        name="Yanislav Zagorov"
                        occupation="CTO i Arealize"
                        quoteType="short"
                    />
                </motion.div>
            </motion.div>
        </section>

    );
};

export default CtoCitation;