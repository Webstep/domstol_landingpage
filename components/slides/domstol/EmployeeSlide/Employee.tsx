import React, { useEffect, useState } from 'react'
import styles from './Employee.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import EmployeeCalle from './employeeCalle'
import EmployeeBirgitte from './employeeBirgitte'
import { useInView } from 'react-intersection-observer'

const Employee = () => {
    const [lastYPos, setLastYPos] = useState(0)
    const [showNewEmployee, setShowNewEmployee] = useState(false)
    const [ref, inView] = useInView()
    const employees = [EmployeeBirgitte, EmployeeCalle]

    useEffect(() => {
        setShowNewEmployee(inView)
    }, [inView])

    return (
        <section className={styles.section}>
            <div className={styles.stickydiv}>
                <div>
                    <div className={styles.container}>
                        <motion.div>
                            <h1>MØT VÅRE WEBSTEPPERE</h1>
                        </motion.div>
                        <div>
                            <div className={styles.employees}>
                                <AnimatePresence initial={false} exitBeforeEnter>
                                    {showNewEmployee ? (
                                        <motion.div
                                            key="calle"
                                            initial={{ x: 400 }}
                                            animate={{ x: 0 }}
                                            transition={{ duration: 1 }}
                                            exit={{
                                                x: -600,
                                                opacity: 0,
                                                transition: {
                                                    duration: 1,
                                                },
                                            }}
                                        >
                                            <EmployeeCalle />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="brigitte"
                                            exit={{
                                                x: -600,
                                                opacity: 0,
                                                transition: {
                                                    duration: 1,
                                                },
                                            }}
                                        >
                                            <EmployeeBirgitte />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.breakpoint} ref={ref}></div>
        </section>
    )
}

export default Employee
