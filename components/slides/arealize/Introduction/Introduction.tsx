import { motion, useAnimation } from 'framer-motion'
import React, { useContext } from 'react'
import ArrowButton, { Direction } from '../../../common/ArrowButton'
import styles from './Introduction.module.scss'
import Image from 'next/image';
import { Text } from '../../../common/Typography'
import { DeviceContext } from '../../../common/Device'
import Link from 'next/link';


const ArealizeIntroduction: React.VFC = () => {
    const { isMobile } = useContext(DeviceContext)

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

    const scrollDown = () => {
        document.querySelectorAll("section")[0].scrollIntoView({ behavior: 'smooth', block: 'end' })
    }

    return (
        <section className={styles.container}>
            <div className={styles.caseLink}>
                <Link href={'/Arealize'}>Arealize</Link>
                <div className={styles.rectangle}></div>
                <Link href={'/Domstol'}>Domstol</Link>
            </div>
            {isMobile ?
                <div className={styles.imageContainer}>
                    <Image
                        src={'/assets/arealize/images/arealize-intro-mobile.png'}
                        fill
                        style={{ objectFit: 'cover' }}
                        alt="Arealize intro"
                    />
                </div>
                :
                <motion.div className={styles.videoContainer} initial={{ height: '100vh' }} exit={{ height: 0, marginTop: 'auto', transition: { duration: 1 } }}>
                    <video
                        src={'/assets/arealize/videos/Arealize_Illustrasjonsfilm_v01.mov'}
                        autoPlay
                        muted
                        loop
                        onLoadedData={startAnimation}
                    />
                </motion.div>}
            <div className={styles.overlay}>
                <div className={styles.information}>
                    {!isMobile && <Image src={'/assets/arealize/logo.svg'} alt="" height="60" width="60" />}
                    <h1>
                        REISEN MED <br /> AREALIZE
                    </h1>
                    {isMobile ?
                        <div style={{ width: '100vw' }}>
                            <Text isOverlay>
                                Arealize er en oppstartsabedrift som utvikler programvare
                                for AI-drevne plantegninger. De skal gjøre det lettere
                                for eiendomssjefer å anskaffe nye leietakere for byggene
                                sine med fokus på kontorbygg.
                            </Text>
                        </div>
                        :
                        <>
                            <Text>
                                NTNU-oppstartsbedriften Arealize utvikler programvare for AI-drevne plantegninger. Selskapet skal gjøre det enklere for eiendomssjefer å skaffe nye leietakere i byggene sine.
                            </Text>
                            <Text>
                                Helt uten tekniske forkunnskaper kan kunder og brukere delta i avansert modellering av arealer, på jakt etter de beste og mest effektive løsningene. Arealize sikter mot å bli bransjeledende.
                            </Text>
                        </>
                    }
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
                                onClick={scrollDown}
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
        </section>
    )
}

export default ArealizeIntroduction
