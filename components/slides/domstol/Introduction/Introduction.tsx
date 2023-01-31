import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import ArrowButton, { Direction } from '../../../common/ArrowButton'
import styles from './Introduction.module.scss'
import Gavel from '../../../../public/assets/domstol/gavel.svg';
import Image from 'next/image';
import { Text } from '../../../common/Typography'


const DomstolIntroduction: React.VFC = () => {

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
            <div className={styles.overlay}>
                <div className={styles.information}>
                    <Image src={Gavel} alt="" height="60" width="60" />
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
    )
}

export default DomstolIntroduction
