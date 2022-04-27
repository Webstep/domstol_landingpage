import styles from './AboutUs.module.scss'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const AboutUs = () => {
    return (
        <section>
            <AnimatePresence>
                <motion.div
                    className={styles.container}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 100 }}
                    transition={{ duration: 30 }}
                >
                    <div className={styles.images}>
                        <div className={styles.weaponShield}>
                            <Image
                                src={'/assets/weapon_shield.svg'}
                                layout="fixed"
                                width="200vw"
                                height="300vw"
                                alt={'weaponShield'}
                            />
                        </div>
                        <div className={styles.bookStack}>
                            <Image
                                src={'/assets/book_stack.svg'}
                                layout="fixed"
                                width="200vw"
                                height="300vw"
                                alt={'bookStack'}
                            />
                        </div>
                    </div>
                    <div className={styles.textSection}>
                        <h1 className={styles.title}>
                            DOMSTOL-
                            <br />
                            ADMINISTRASJONEN
                        </h1>
                        <div className={styles.section}>
                            <p>
                                Domstoladministrasjonen, DA, bygger systemene
                                som samler, sikrer og deler informasjonen. De
                                forvalter tilliten, sikrer uavhengigheten, møter
                                kravene og innfrir forventningene. På våre vegne
                                - alle oss i Norge.
                            </p>
                            <p>
                                Å jobbe for DA betyr oppgaver med mening. Mange
                                oppgaver. For tjenester som betyr noe.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    )
}

export default AboutUs
