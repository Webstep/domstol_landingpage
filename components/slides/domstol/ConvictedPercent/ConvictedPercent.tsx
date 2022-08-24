import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import PixelatedMan from '../../../common/PixelatedMan'
import styles from './ConvictedPercent.module.scss'
import Text from '../../../common/Text'
import { useInView } from 'react-intersection-observer'

const ConvictedPercent: React.VFC = () => {
    const exitAnimationTransition = { duration: 1.5, times: [0, 0.4, 1] }

    const [ref, inView] = useInView({ threshold: 1 });
    const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

    useEffect(() => {
        if (!isHighlighted && inView) {
            setIsHighlighted(true)
        }
    }, [inView, isHighlighted]);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {[...new Array(6)].map((_, index) => (
                    <motion.div
                        key={index}
                        exit={{ opacity: [1, index === 2 ? 1 : 0, 0] }}
                        transition={exitAnimationTransition}
                        style={{ width: 'fit-content', margin: '0 auto' }}
                    >

                        <PixelatedMan key={index + 3} highlight={index === 2 && isHighlighted} className={styles.pixelMan} />
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{ duration: 2, delay: 0.5 }}
                className={styles.textSection}
            >
                <motion.h2
                    exit={{
                        color: ['#FFFFFF', '#F2B355', '#F2B355'],
                        opacity: [1, 1, 0]
                    }}
                    transition={exitAnimationTransition}
                    ref={ref}
                >
                    <span>
                        1/6
                    </span>
                    <span>
                        av Norges befolkning har blitt domfelt.
                    </span>
                </motion.h2>
                <Text
                    isOverlay
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Dette kan skyldes alt fra en trafikkbot
                    til en langvarig fengselsstraff. Flere
                    du kjenner, eller kanskje også deg selv,
                    har med andre ord vært i kontakt med
                    domstoladministrasjonen på et eller
                    annet vis i løpet av livet.
                </Text>
            </motion.div>
        </section>
    )
}

export default ConvictedPercent
