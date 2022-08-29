import React from 'react'
import styles from './AboutUs.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Text from '../../../common/Text'

const AboutUs = () => {
    return (
        <section className={styles.section} >
            <div className={styles.media}>
                <motion.div
                    className={styles.weaponShield}
                    initial={{ x: -550 }}
                    animate={{ x: 0, z: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src={'/assets/weapon-shield.jpg'}
                        layout="fixed"
                        width="250vw"
                        height="350vw"
                        alt={'weaponShield'}
                    />
                </motion.div>
                <motion.div
                    className={styles.bookStack}
                    initial={{ x: -650 }}
                    animate={{ x: 0, z: 1 }}
                    transition={{ duration: 1 }}
                >
                    <video
                        width="250px"
                        height="350px"
                        autoPlay
                        muted
                        loop
                        title='bookStack'
                    >
                        <source src={require('../../../../public/videos/Webstap_DA_loop_1_1208x1920.mp4')} />
                    </video>

                </motion.div>
            </div>
            <div className={styles.textSection}>
                <motion.h1
                    className={styles.title}
                    initial={{ x: 420, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    DOMSTOL-
                    <br />
                    ADMINISTRASJONEN
                </motion.h1>
                <motion.div
                    className={styles.description}
                    initial={{ x: 420, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.25, ease: 'easeOut' }}
                >
                    <Text isOverlay>
                        Domstoladministrasjonen, DA, bygger systemene
                        som samler, sikrer og deler informasjonen. De
                        forvalter tilliten, sikrer uavhengigheten, møter
                        kravene og innfrir forventningene. På våre vegne
                        - alle oss i Norge.
                    </Text>
                    <Text isOverlay>
                        Å jobbe for DA betyr oppgaver med
                        mening. Mange oppgaver. For tjenester som betyr
                        noe.
                    </Text>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutUs
