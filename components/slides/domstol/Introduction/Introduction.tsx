import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import ArrowButton, { Direction } from '../../../common/ArrowButton'
import styles from './Introduction.module.scss'
import Weight from '../../../../public/assets/domstol/weight.svg';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import useShowHint from '../../../../hooks/showHint';
import { Text } from '../../../common/Typography'

interface IntroductionProps {
    allowScrolling: (value: boolean) => void;
}

const DomstolIntroduction: React.VFC<IntroductionProps> = ({ allowScrolling }) => {
    const { ref, inView } = useInView()

    const controls = useAnimation()

    const startAnimation = () => {
        controls.start({
            width: 0,
            transition: {
                duration: 3.5,
                ease: 'linear'
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
                        <Image src={Weight} alt="" height="41" width="48" />
                        <h1>
                            DIGITALISERING <br /> AV DOMSTOLENE
                        </h1>
                        <Text>
                            Maktfordelingsprinsippet og de norske domstolenes
                            uavhengighet er som stoffet din og min frihet er laget
                            av. I flere europeiske land er Domstolenes uavhengighet
                            truet. I Norge er uavhengigheten sterk og tilliten høy.
                            Og den øker år for år. Det skal vi være glad for. Men
                            tilliten til domstolene kommer med med et like stort
                            ansvar.
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
                        src={require('../../../../public/assets/domstol/videos/Webstep_DA_illustrasjon_v02.mp4')}
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

export default DomstolIntroduction
