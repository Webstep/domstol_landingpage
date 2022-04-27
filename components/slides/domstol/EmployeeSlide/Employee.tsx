import React, { useEffect, useState } from 'react'
import styles from './Employee.module.scss'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import EmployeeCalle from './employeeCalle'
import EmployeeBirgitte from './employeeBirgitte'

const Employee = () => {
    //const { scrollYProgress } = useViewportScroll()
    const [lastYPos, setLastYPos] = useState(0)
    const [showNewEmployee, setShowNewEmployee] = useState(false)

    useEffect(() => {
        function handleScroll() {
            const yPos = window.scrollY
            const isScrollingDown = yPos > lastYPos
            console.log('scrolled')
            console.log(yPos)

            setShowNewEmployee(isScrollingDown)
            setLastYPos(yPos)
        }
        window.addEventListener('scroll', handleScroll, false)

        return () => {
            window.removeEventListener('scroll', handleScroll, false)
        }
    }, [lastYPos])
    return (
        <section className={styles.section}>
            <AnimatePresence>
                <motion.div>
                    <div className={styles.container}>
                        <motion.div animate={{ position: 'sticky' }}>
                            <h1>MØT VÅRE WEBSTEPPERE</h1>
                        </motion.div>
                        {showNewEmployee ? (
                            <EmployeeCalle />
                        ) : (
                            <EmployeeBirgitte />
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    )
}

function Actions() {
    const [lastYPos, setLastYPos] = useState(0)
    const [showNewEmployee, setShowNewEmployee] = useState(false)

    useEffect(() => {
        function handleScroll() {
            const yPos = window.scrollY
            const isScrollingDown = yPos > lastYPos
            console.log('scrolled')

            setShowNewEmployee(isScrollingDown)
            setLastYPos(yPos)
        }
        window.addEventListener('scroll', handleScroll, false)

        return () => {
            window.removeEventListener('scroll', handleScroll, false)
        }
    }, [lastYPos])
    return (
        <motion.div
            className="actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: showNewEmployee ? 1 : 0 }}
            transition={{ opacity: { duration: 0.2 } }}
        >
            <div className={styles.content}>
                <div>
                    <motion.div
                        className={styles.images}
                        initial={{ y: 200 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            src={'/assets/employeeCalle.svg'}
                            layout="fixed"
                            width="250vw"
                            height="350vw"
                            alt={'employeeCalle'}
                        />
                    </motion.div>
                    <motion.div
                        className={styles.moreInfo}
                        initial={{ y: 125 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 2 }}
                    >
                        Les mer om Calle
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
                        - Noe av det beste med å være en del av dette
                        prosjektet, er alt det nye jeg har lært, innsikten i
                        hvordan rettsvesenet i Norge fungerer.
                    </p>
                    <p className={styles.name}>Birgitte Bright</p>
                    <p className={styles.title}>Systemutvikler, Webstep</p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Employee
