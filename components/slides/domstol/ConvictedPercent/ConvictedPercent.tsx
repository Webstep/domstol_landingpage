import { AnimatePresence } from 'framer-motion'
import React from 'react'
import PixelatedMan from '../../../common/PixelatedMan'
import styles from './ConvictedPercent.module.scss'
import { useInView } from 'react-intersection-observer'

const ConvictedPercent = () => {
    const { ref, inView } = useInView()

    return (
        <section ref={ref} style={{ height: '100vh' }}>
            <AnimatePresence>
                {inView && (
                    <>
                        <div className={styles.container}>
                            {[...new Array(3)].map((_, index) => (
                                <PixelatedMan key={index} />
                            ))}
                            <PixelatedMan key="3" />
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
