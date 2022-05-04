import React, { useEffect, useState } from 'react'
import styles from './Employee.module.scss'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

export const EmployeeCalle: React.FC = () => {
    return (
        <div className={styles.content}>
            <div>
                <motion.div
                    className={styles.images}
                    initial={{ x: 400 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 2 }}
                >
                    <img
                        src={'/assets/Calle.jpg'}
                        width="250vw"
                        alt={'employeeCalle'}
                    />
                </motion.div>
                <motion.div
                    className={styles.moreInfo}
                    initial={{ y: 140, opacity: -1 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 3, delay: 1 }}
                >
                    Les mer om Calle
                    <Link href={'#'}>her</Link>
                </motion.div>
            </div>
            <motion.div
                className={styles.textSection}
                initial={{ x: 500 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 2 }}
            >
                <p className={styles.quote}>
                    - Det som er gøy med å jobbe med DA er at man kjenner på
                    viktigheten av det man gjør. Ikke bare for oss som jobber
                    her, men for den norske befolkningen og det norske
                    demokratiet. Det er ikke hvilket som helst prosjekt.
                </p>
                <p className={styles.name}>Carl Bøkestad</p>
                <p className={styles.title}>Systemutvikler, Webstep</p>
            </motion.div>
        </div>
    )
}

export default EmployeeCalle
