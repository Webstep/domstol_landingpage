import React, { useEffect, useState } from 'react'
import styles from './Employee.module.scss'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

const EmployeeBirgitte: React.FC = () => {
    return (
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
                    - Noe av det beste med å være en del av dette prosjektet, er
                    alt det nye jeg har lært, innsikten i hvordan rettsvesenet i
                    Norge fungerer.
                </p>
                <p className={styles.name}>Birgitte Bright</p>
                <p className={styles.title}>Systemutvikler, Webstep</p>
            </motion.div>
        </div>
    )
}

export default EmployeeBirgitte
