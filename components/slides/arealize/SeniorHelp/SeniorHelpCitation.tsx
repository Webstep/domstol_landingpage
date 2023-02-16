import { motion } from 'framer-motion';
import styles from './SeniorHelp.module.scss';

export const SeniorHelpCitation = () => {
    return (
        <div className={styles.citation}>
            <motion.blockquote
                className={styles.blockquote}
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                viewport={{ once: true }}
            >
                <motion.q
                    className={styles.qoute}
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 200 }}
                    viewport={{ once: true }}
                >
                    Webstep har satt oss i kontakt med verdifulle personer og vært med på å bygge Arealize-kulturen som et sted å vokse og lære                </motion.q>
                <motion.footer
                    className={styles.signature}
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 200 }}
                    viewport={{ once: true }}
                >
                    <span className={styles.name}>Yanislav Zagorov,</span>
                    <span>Arealize CTO</span>
                </motion.footer>
            </motion.blockquote>
        </div>
    );
};