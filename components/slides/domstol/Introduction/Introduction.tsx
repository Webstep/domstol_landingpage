import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import ArrowButton, { Direction } from '../../../common/ArrowButton'
import styles from './Introduction.module.scss'
import Weight from '../../../../public/assets/domstol/weight.svg';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface IntroductionProps {
    allowScrolling: (value: boolean) => void;
}

const DomstolIntroduction: React.VFC<IntroductionProps> = ({ allowScrolling }) => {
    const { ref, inView } = useInView()

    useEffect(() => {
        allowScrolling(inView)
    }, [allowScrolling, inView]);

    return (
        <section className={styles.container}>
            <div className={styles.overlay}>
                <div className={styles.information}>
                    <Image src={Weight} alt="" height="41" width="48" />
                    <h1>
                        DIGITALISERING <br /> AV DOMSTOLENE
                    </h1>
                    <p>
                        Maktfordelingsprinsippet og de norske domstolenes
                        uavhengighet er som stoffet din og min frihet er laget
                        av. I flere europeiske land er Domstolenes uavhengighet
                        truet. I Norge er uavhengigheten sterk og tilliten høy.
                        Og den øker år for år. Det skal vi være glad for. Men
                        tilliten til domstolene kommer med med et like stort
                        ansvar.
                    </p>
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
            <div className={styles.tintedBackground} />
            <div className={styles.videoContainer}>
                <video
                    src={require('../../../../public/assets/domstol/videos/Webstep_DA_illustrasjon_v02.mp4')}
                    autoPlay
                    muted
                    loop
                ></video>
            </div>
            <div className={styles.breakpoint} ref={ref}></div>
        </section>
    )
}

export default DomstolIntroduction
