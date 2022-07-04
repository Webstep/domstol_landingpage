import { motion, Variants } from 'framer-motion'
import React from 'react'
import styles from './HairyGoals.module.scss'
import Image from 'next/image'
const HairyGoals = () => {

    const descriptionContainer: Variants = {
        hidden: {},
        show: {
            opacity: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.25
            }
        },
        leave: {
            y: 400,
            opacity: 0,
            transition: {
                duration: 1.5,
                delay: 0.5
            }
        }
    }

    const item = {
        hidden: {
            opacity: 0,
            x: 200
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1
            }
        }
    }

    return (
        <section className={styles.section}>
            <div style={{ position: "sticky", top: 0, backgroundColor: 'blue', height: '20px', width: '20px' }}></div>
            <motion.div className={styles.image}
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ y: -400, opacity: 0 }}
                transition={{
                    delay: 0.5,
                    duration: 1.5,
                }}
            >
                <Image
                    src="/assets/herman_seip.jpg"
                    alt="bilde av Herman Seip"
                    width={435}
                    height={500}
                    objectFit="cover"
                ></Image>
            </motion.div>
            <motion.div
                className={styles.description}
                variants={descriptionContainer}
                initial="hidden"
                animate="show"
                exit="leave"
            >
                <motion.h2 variants={item}>HÅRETE MÅL</motion.h2>
                <motion.p variants={item}>
                    Det digitale skiftet er kommet til Domstolene.
                    DA har tro på teknologi og de har en klar
                    ambisjon:
                </motion.p>
                <motion.q variants={item} className={styles.quote}>
                    Vi skal være best i verden!
                </motion.q>
                <motion.span variants={item} className={styles.signature}>
                    <span>
                        Herman Seip,
                    </span>
                    Arkitekt hos DA
                </motion.span>
                <motion.p variants={item}>
                    DA har ambisjon om å la norske borgere
                    kommunisere digitalt med Domstolene. Når Norge
                    digitaliseres må Domstolene henge med. Dette
                    handler om ryggraden av det norske samfunnet, om
                    systemer for effektiv samhandling rundt
                    strafferett, sivilrett og tvister.
                </motion.p>
                <motion.p variants={item}>
                    DA er en offensiv oppdragsgiver med tro på ny
                    teknologi. De drømmer om verdens beste løsninger
                    og vi skal være med og gi dem det. Oppdraget for
                    Domstoladministrasjon har skapt et drømmemiljø
                    for softwareutviklere på jakt etter oppgaver som
                    virkelig betyr noe.
                </motion.p>
            </motion.div>
        </section>
    )
}

export default HairyGoals
