import React, { useState } from 'react'
import styles from './Employee.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import EmployeeCalle from './employeeCalle'
import EmployeeBirgitte from './employeeBirgitte'
import ProgressBar from '../../../common/DottedProgressBar'

const Employees = [EmployeeBirgitte, EmployeeCalle].map((Employee, index) => <Employee key={index} />)

const Employee = () => {
    const [currentEmployee, setCurrentEmployee] = useState<number>(0);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div>
                    <h1>MØT VÅRE WEBSTEPPERE</h1>
                </motion.div>
                <div>
                    <div className={styles.employees}>
                        <AnimatePresence initial={false} exitBeforeEnter>
                            {Employees[currentEmployee]}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <ProgressBar progress={currentEmployee} size={Employees.length} onClick={(value) => setCurrentEmployee(value)} />
        </section>
    )
}

export default Employee
