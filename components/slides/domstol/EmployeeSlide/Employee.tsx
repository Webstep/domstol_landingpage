import React, { useRef } from 'react'
import styles from './Employee.module.scss'
import Image from 'next/image'
import {
    AnimatePresence,
    motion,
    useElementScroll,
    useViewportScroll,
} from 'framer-motion'
import Link from 'next/link'

const Employee = () => {
    //const { scrollYProgress } = useViewportScroll()
    return (
        <section className={styles.section}>
            <AnimatePresence>
                <motion.div
                //style={{ scaleX: scrollYProgress }}
                >
                    <div className={styles.container}>
                        <motion.div animate={{ position: 'sticky' }}>
                            <h1>MØT VÅRE WEBSTEPPERE</h1>
                        </motion.div>
                        <div className={styles.content}>
                            <div>
                                <motion.div
                                    className={styles.images}
                                    initial={{ y: 200 }}
                                    whileInView={{ y: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    <Image
                                        src={'/assets/employeeBirgitte.svg'}
                                        layout="fixed"
                                        width="250vw"
                                        height="350vw"
                                        alt={'employeeBirgitte'}
                                    />
                                </motion.div>
                                <motion.div
                                    className={styles.moreInfo}
                                    initial={{ y: 125 }}
                                    whileInView={{ y: 0 }}
                                    transition={{ duration: 2 }}
                                >
                                    Les mer om Birgitte
                                    <Link href={'#'}>her</Link>
                                </motion.div>
                            </div>
                            <motion.div
                                className={styles.textSection}
                                initial={{ y: 200 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <p className={styles.quote}>
                                    - Noe av det beste med å være en del av
                                    dette prosjektet, er alt det nye jeg har
                                    lært, innsikten i hvordan rettsvesenet i
                                    Norge fungerer.
                                </p>
                                <p className={styles.name}>Birgitte Bright</p>
                                <p className={styles.title}>
                                    Systemutvikler, Webstep
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    )
}

export default Employee
