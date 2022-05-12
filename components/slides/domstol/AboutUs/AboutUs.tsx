import React, { useState } from 'react'
import styles from './AboutUs.module.scss'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AboutUs = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    })
    return (
        <section className={styles.section} ref={ref}>
            <AnimatePresence>
                <div className={styles.container}>
                    <div className={styles.images}>
                        <motion.div
                            className={styles.weaponShield}
                            initial={{ x: -550 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 3 }}
                        >
                            <Image
                                src={'/assets/weapon_shield.svg'}
                                layout="fixed"
                                width="250vw"
                                height="350vw"
                                alt={'weaponShield'}
                            />
                        </motion.div>
                        <motion.div
                            className={styles.bookStack}
                            initial={{ x: -650, opacity: 1 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 2 }}
                        >
                            <Image
                                src={'/assets/book_stack.svg'}
                                layout="fixed"
                                width="250vw"
                                height="350vw"
                                alt={'bookStack'}
                            />
                        </motion.div>
                    </div>
                    <div className={styles.textSection}>
                        <motion.h1
                            className={styles.title}
                            initial={{ x: 780 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 2 }}
                        >
                            DOMSTOL-
                            <br />
                            ADMINISTRASJONEN
                        </motion.h1>
                        <motion.div
                            className={styles.description}
                            initial={{ x: 780 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 3 }}
                        >
                            <p>
                                Domstoladministrasjonen, DA, bygger systemene
                                som samler, sikrer og deler informasjonen. De
                                forvalter tilliten, sikrer uavhengigheten, møter
                                kravene og innfrir forventningene. På våre vegne
                                - alle oss i Norge.
                                <br></br>
                                <br></br>Å jobbe for DA betyr oppgaver med
                                mening. Mange oppgaver. For tjenester som betyr
                                noe.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </AnimatePresence>
        </section>
    )
}

export default AboutUs
