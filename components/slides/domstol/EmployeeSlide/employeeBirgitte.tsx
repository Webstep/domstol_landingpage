import React, { useEffect, useState } from 'react'
import styles from './Employee.module.scss'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

interface IProps {
    isShown: boolean
}

const EmployeeBirgitte: React.FC<IProps> = ({ isShown }) => {
    return (
        <div className={styles.content}>
            <div>
                <AnimatePresence>
                    {isShown && (
                        <motion.div
                            initial={{ y: 250, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            exit={{
                                x: -600,
                                opacity: 0,
                                transition: { duration: 2 },
                            }}
                            transition={{ duration: 2, ease: 'easeInOut' }}
                            className={styles.images}
                        >
                            <img
                                src={'/assets/Birgitte.jpg'}
                                width="250vw"
                                alt={'employeeBirgitte'}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isShown && (
                        <motion.div
                            className={styles.moreInfo}
                            initial={{ y: 140, opacity: -1 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 3,
                                delay: 1,
                                ease: 'easeOut',
                            }}
                            exit={{
                                x: -600,
                                opacity: 0,
                                transition: {
                                    duration: 2,
                                },
                            }}
                        >
                            Les mer om Birgitte
                            <Link href={'#'}>her</Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <AnimatePresence>
                {isShown && (
                    <motion.div
                        className={styles.textSection}
                        initial={{ y: 250, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        exit={{
                            x: -500,
                            opacity: 0,
                            transition: { duration: 2 },
                        }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                    >
                        <p className={styles.quote}>
                            - Noe av det beste med å være en del av dette
                            prosjektet, er alt det nye jeg har lært, innsikten i
                            hvordan rettsvesenet i Norge fungerer.
                        </p>
                        <p className={styles.name}>Birgitte Bright</p>
                        <p className={styles.title}>Systemutvikler, Webstep</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default EmployeeBirgitte
