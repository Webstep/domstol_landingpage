import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import ArrowButton, { Direction } from '../../../common/ArrowButton'
import styles from './Introduction.module.scss'
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import useShowHint from '../../../../hooks/showHint';
import { Text } from '../../../common/Typography'

interface IntroductionProps {
    allowScrolling: (value: boolean) => void;
}

const ArealizeIntroduction: React.VFC<IntroductionProps> = ({ allowScrolling }) => {
    const { ref, inView } = useInView()

    const controls = useAnimation()

    const startAnimation = () => {
        controls.start({
            width: 0,
            transition: {
                duration: 3.5,
                ease: 'linear',
                delay: 1,
            },
        })
    }

    useEffect(() => {
        allowScrolling(inView)
    }, [allowScrolling, inView]);

    useShowHint({ delay: 3.5, disable: !inView })

    return (
        <>
            <section className={styles.container}>
                <div className={styles.overlay}>
                    <div className={styles.information}>
                        <Image src={'/assets/arealize/logo.svg'} alt="" height="60" width="60" />
                        <h1>
                            REISEN MED <br /> AREALIZE
                        </h1>
                        <Text>
                            Arealize er en oppstartsabedrift fra NTNU som utvikler
                            programvare for AI-drevne plantegninger. Arealize skal
                            gjøre det lettere for eiendomssjefer å anskaffe nye
                            leietakere for byggene sine. Ved hjelp av en automatisk
                            plantegninsgenerator kan brukere uten teknisk bakgrunn
                            også involvere seg i prosessen. Med fokus på kontorbygg,
                            har Arealize som ambisjon å være det ledende verktøyet
                            for å skape gode og effektive arbeidsområder.
                        </Text>
                        <div className={styles.scrollDown}>
                            <span>Scroll</span>
                            <motion.div
                                animate={{
                                    y: [0, 8, 0]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5
                                }}>

                                <ArrowButton
                                    direction={Direction.Down}
                                    onClick={() => { }}
                                    alt='pil ned'
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <motion.div className={styles.tintedBackground}
                    initial={{
                        width: '100vw'
                    }}
                    animate={controls}
                />
                <motion.div className={styles.videoContainer} initial={{ height: '100vh' }} exit={{ height: 0, marginTop: 'auto', transition: { duration: 1 } }}>
                    <video
                        src={'/assets/arealize/videos/Arealize_Illustrasjonsfilm_v01.mov'}
                        autoPlay
                        muted
                        loop
                        onLoadedData={startAnimation}
                    />
                </motion.div>
            </section>
            <div className={styles.breakpoint} ref={ref}></div>
        </>
    )
}

export default ArealizeIntroduction
