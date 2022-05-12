import React, { useEffect, useState } from 'react'
import styles from './Employee.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const EmployeeCalle: React.FC = () => {
    return (
        <div className={styles.content}>
            <div>
                <div className={styles.images}>
                    <img
                        src={'/assets/Calle.jpg'}
                        width="250vw"
                        alt={'employeeCalle'}
                    />
                </div>
                <div className={styles.moreInfo}>
                    Les mer om Calle
                    <Link href={'https://www.webstep.no/carl-fredrik-bokestad/'}>her</Link>
                </div>
            </div>
            <div className={styles.textSection}>
                <p className={styles.quote}>
                    - Det som er gøy med å jobbe med DA er at man kjenner på
                    viktigheten av det man gjør. Ikke bare for oss som jobber
                    her, men for den norske befolkningen og det norske
                    demokratiet. Det er ikke hvilket som helst prosjekt.
                </p>
                <p className={styles.name}>Carl Bøkestad</p>
                <p className={styles.title}>Systemutvikler, Webstep</p>
            </div>
        </div>
    )
}

export default EmployeeCalle
