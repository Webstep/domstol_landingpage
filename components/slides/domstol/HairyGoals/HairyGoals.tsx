import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './HairyGoals.module.scss'
import Image from 'next/image'

const HairyGoals = () => {
    const { ref, inView } = useInView()

    return (
        <section ref={ref} className={styles.section}>
            <AnimatePresence>
                {inView && (
                    <LayoutGroup>
                        <motion.div
                            initial={{ x: -200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.5,
                                duration: 1.5,
                                ease: 'backInOut',
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
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            <h2>HÅRETE MÅL</h2>
                            <p>
                                Det digitale skiftet er kommet til Domstolene.
                                DA har tro på teknologi og de har en klar
                                ambisjon:
                            </p>
                            – <q>Vi skal være best i verden!</q>
                            <span>Herman Seip, Arkitekt hos DA</span>
                            <p>
                                DA har ambisjon om å la norske borgere
                                kommunisere digitalt med Domstolene. Når Norge
                                digitaliseres må Domstolene henge med. Dette
                                handler om ryggraden av det norske samfunnet, om
                                systemer for effektiv samhandling rundt
                                strafferett, sivilrett og tvister.
                            </p>
                            <p>
                                DA er en offensiv oppdragsgiver med tro på ny
                                teknologi. De drømmer om verdens beste løsninger
                                og vi skal være med og gi dem det. Oppdraget for
                                Domstoladministrasjon har skapt et drømmemiljø
                                for softwareutviklere på jakt etter oppgaver som
                                virkelig betyr noe.
                            </p>
                        </motion.div>
                    </LayoutGroup>
                )}
            </AnimatePresence>
        </section>
    )
}

export default HairyGoals
