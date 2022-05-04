import React, { useEffect, useState } from 'react'
import styles from './Employee.module.scss'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import EmployeeCalle from './employeeCalle'
import EmployeeBirgitte from './employeeBirgitte'

const Employee = () => {
    const [lastYPos, setLastYPos] = useState(0)
    const [showNewEmployee, setShowNewEmployee] = useState(false)

    /*useEffect(() => {
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
         {showNewEmployee ? (
                            <EmployeeCalle />
                        ) : (
                            <EmployeeBirgitte isShown={!showNewEmployee} />
                        )}
    }, [lastYPos])*/
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
                            <EmployeeBirgitte isShown={!showNewEmployee} />
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>
            <button onClick={() => setShowNewEmployee(!showNewEmployee)}>
                test
            </button>
        </section>
    )
}

export default Employee
