import styles from './Employee.module.scss'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

const Employee = () => {
    return (
        <section>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 30 }}
                    transition={{ duration: 10 }}
                >
                    <div className={styles.container}>
                        <motion.div animate={{ position: 'sticky' }}>
                            <h1>MØT VÅRE WEBSTEPPERE</h1>
                        </motion.div>
                        <div className={styles.section}>
                            <div>
                                <div className={styles.images}>
                                    <Image
                                        src={'/assets/employeeBirgitte.svg'}
                                        layout="fixed"
                                        width="250vw"
                                        height="350vw"
                                        alt={'employeeBirgitte'}
                                    />
                                </div>
                                <div className={styles.moreInfo}>
                                    Les mer om Birgitte
                                    <Link href={'#'}>her</Link>
                                </div>
                            </div>
                            <div className={styles.textSection}>
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
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    )
}

export default Employee
