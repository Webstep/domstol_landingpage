import { motion, Variant, Variants } from 'framer-motion'
import React from 'react'
import styles from './HairyGoals.module.scss'
import Image from 'next/image'
import { Text, Title } from '../../../common/Typography'
import Citation from '../../../common/Citation'

interface AnimationStages extends Variants {
    hidden: Variant;
    show: Variant;
    leave: Variant
}

const descriptionContainer: AnimationStages = {
    hidden: {},
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.25
        }
    },
    leave: {
        y: 400,
        opacity: 0,
        transition: {
            duration: 1.5,
        }
    }
}

const item: AnimationStages = {
    hidden: {
        x: 200,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    },
    leave: {}
}

const HairyGoals = () => {

    return (
        <section className={styles.section}>
            <div className={styles.media}>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ y: -400, opacity: 0 }}
                    transition={{
                        duration: 1.5,
                    }}
                >
                    <Image className={styles.hermanImage}
                        src="/assets/domstol/images/herman_seip.jpg"
                        alt="bilde av Herman Seip"
                        width={435}
                        height={580}
                        objectFit={'cover'}
                    />
                </motion.div>
            </div>
            <motion.div
                variants={descriptionContainer}
                initial="hidden"
                animate="show"
                exit="leave"
                className={styles.description}
            >
                <div className={styles.intro}>
                    <div className={styles.stickyDiv}>
                        <Title variants={item}>HÅRETE MÅL</Title>
                        <Text variants={item} >
                            Det digitale skiftet er kommet til Domstolene.
                            DA har tro på teknologi og de har en klar
                            ambisjon:
                        </Text>
                    </div>
                </div>

                <Citation name="Herman Seip" occupation="Arkitekt hos DA" quote="Vi skal være best i verden!" quoteType="short" variants={item} />

                <div>
                    <Text isOverlay variants={item}>
                        DA har ambisjon om å la norske borgere
                        kommunisere digitalt med Domstolene. Når Norge
                        digitaliseres må Domstolene henge med.
                    </Text>
                    <Text isOverlay variants={item}> Dette handler om ryggraden av det norske samfunnet, om
                        systemer for effektiv samhandling rundt
                        strafferett, sivilrett og tvister.
                    </Text>
                    <Text isOverlay variants={item}>
                        DA er en offensiv oppdragsgiver med tro på ny
                        teknologi. De drømmer om verdens beste løsninger
                        og vi skal være med og gi dem det.
                    </Text>
                    <Text isOverlay variants={item}>Oppdraget for Domstoladministrasjon har skapt et drømmemiljø
                        for softwareutviklere på jakt etter oppgaver som
                        virkelig betyr noe.
                    </Text>
                </div>
            </motion.div>
        </section>
    )
}

export default HairyGoals
