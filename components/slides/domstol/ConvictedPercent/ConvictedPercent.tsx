import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import PixelatedMan from '../../../common/PixelatedMan'
import styles from './ConvictedPercent.module.scss'
import { useInView } from 'react-intersection-observer'

const ConvictedPercent = () => {
    const { ref, inView } = useInView()

    //animation delay in seconds
    const delay = 4

    const [isHighlighted, setIsHighlighted] = useState<boolean>(false)

    useEffect(() => {}, [])

    useEffect(() => {
        if (inView) setTimeout(() => setIsHighlighted(true), delay * 1000 * 0.5)
        else setIsHighlighted(false)
    }, [inView])

    return (
        <section ref={ref} style={{ height: '100vh' }}>
            <AnimatePresence>
                {inView && (
                    <>
                        <div className={styles.container}>
                            {[...new Array(3)].map((_, index) => (
                                <PixelatedMan key={index} />
                            ))}
                            <motion.div
                                className={styles.popup}
                                initial={{
                                    translateY: 0,
                                }}
                                animate={{ translateY: -100 }}
                                transition={{ delay }}
                            >
                                <PixelatedMan
                                    key="3"
                                    highlight={isHighlighted}
                                />

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        height: 0,
                                    }}
                                    animate={{
                                        opacity: 100,
                                        height: 'auto',
                                        marginTop: '2rem',
                                    }}
                                    transition={{ delay }}
                                >
                                    <h2>
                                        1/6 av Norges befolkning har blitt
                                        domfelt.
                                    </h2>
                                    <p>
                                        Dette kan skyldes alt fra en trafikkbot
                                        til en langvarig fengselsstraff. Flere
                                        du kjenner, eller kanskje også deg selv,
                                        har med andre ord vært i kontakt med
                                        domstoladministrasjonen på et eller
                                        annet vis i løpet av livet.
                                    </p>
                                </motion.div>
                            </motion.div>
                            {[...new Array(2)].map((_, index) => (
                                <PixelatedMan key={index + 3} />
                            ))}
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    )
}

export default ConvictedPercent
