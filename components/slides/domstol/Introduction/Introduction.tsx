import { motion } from 'framer-motion'
import React from 'react'
import ArrowButton, { Direction } from '../../../common/ArrowButton'
import styles from './Introduction.module.scss'

const DomstolIntroduction = () => {
    return (
        <section className={styles.container}>
            <div className={styles.overlay}>
                <div className={styles.information}>
                    <img src="/assets/domstol/weight.svg" alt="" />
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
        </section>
    )
}

export default DomstolIntroduction
