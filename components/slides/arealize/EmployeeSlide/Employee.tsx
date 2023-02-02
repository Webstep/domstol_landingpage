import React, { useEffect, useState } from 'react'
import styles from './Employee.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import ProgressBar from '../../../common/DottedProgressBar'
import Image from 'next/image'
import { EmployeeData } from './EmployeeData'
import useHorizontalScroll, { HorizontalScrollDirection } from '../../../../hooks/horizontalScroll'
import { Title } from '../../../common/Typography'

// const Employees = [EmployeeBirgitte, EmployeeCalle].map((Employee, index) => <Employee key={index} />)

const RotatingElement: React.FC<any> = ({ className, children, ...options }) => {
    const perspective = 500
    return (
        <motion.span
            initial={{
                perspective,
                rotateX: -90,
                display: 'block'
            }}
            animate={{
                perspective,
                rotateX: 0
            }}
            exit={{
                perspective,
                rotateX: 90
            }}
            transition={{
                duration: 0.5,
                ease: 'linear'
            }}
            className={className}
            {...options}
        >
            {children}
        </motion.span>
    )
}

const Employee = () => {
    const [currentEmployee, setCurrentEmployee] = useState<number>(0);

    const handleScroll = (value: HorizontalScrollDirection) => {
        if (value === HorizontalScrollDirection.Left && currentEmployee > 0) {
            setCurrentEmployee(currentEmployee - 1)
        } else if (value === HorizontalScrollDirection.Right && currentEmployee < EmployeeData.length - 1) {
            setCurrentEmployee(currentEmployee + 1)
        }
    }

    useHorizontalScroll({ handleScroll })

    //Empty divs are used to create a smoother enter animation, as content will not
    const [img, setImg] = useState<JSX.Element>(
        <div style={{ height: 305, width: 305 }} />
    )
    // const [firstName, setFirstName] = useState<JSX.Element>();
    // const [link, setLink] = useState<string>("");
    const [fullName, setFullName] = useState<JSX.Element>(<div style={{ height: 16 * 3.125, width: 250 }} />);
    const [quote, setQuote] = useState<JSX.Element>(
        <div style={{ height: 200, width: 250 }} />
    );
    const [role, setRole] = useState<JSX.Element>();


    useEffect(() => {
        const delay = 321
        const currentEmployeeData = EmployeeData[currentEmployee]

        const imgTimeout = setTimeout(() => {
            setImg(
                <RotatingElement className={styles.images} key={"img" + currentEmployee}>
                    <Image src={currentEmployeeData.img} alt=""
                        width={305}
                        height={305}
                    />
                </RotatingElement>
            )
        }, delay)
        // const linkTimeout = setTimeout(() => {
        //     setLink(currentEmployeeData.url)
        //     setFirstName(
        //         <RotatingElement key={"employee" + currentEmployee} className={styles.name}>
        //             {currentEmployeeData.firstname}
        //         </RotatingElement>
        //     )
        // }, 2 * delay)
        const quoteTimeout = setTimeout(() => {
            setQuote(
                <RotatingElement className={styles.quote} key={"quote" + currentEmployee}>
                    <p>
                        {currentEmployeeData.quote}
                    </p>
                </RotatingElement>
            )

        }, 2 * delay)

        const fullnameTimeout = setTimeout(() => {
            setFullName(
                <RotatingElement className={styles.name} key={"name" + currentEmployee}>
                    <p>
                        {currentEmployeeData.firstname + " " + currentEmployeeData.lastname}
                    </p>
                </RotatingElement>
            )
        }, 3 * delay)

        const roleTimeout = setTimeout(() => {
            setRole(
                <RotatingElement key={"role" + currentEmployee}>
                    <span>{currentEmployeeData.role}</span>
                </RotatingElement>
            )
        }, 4 * delay)

        return () => {
            clearTimeout(imgTimeout)
            // clearTimeout(linkTimeout)
            clearTimeout(fullnameTimeout)
            clearTimeout(quoteTimeout)
            clearTimeout(roleTimeout)
        }

    }, [currentEmployee]);

    return (
        <section className={styles.section}>
            <Title>MØT VÅRE WEBSTEPPERE</Title>
            <div className={styles.container}>
                <div className={styles.employees}>
                    <AnimatePresence exitBeforeEnter>
                        {img}
                    </AnimatePresence>

                    {/* <div className={styles.moreInfo}>
                        Les mer om{" "}
                        <AnimatePresence exitBeforeEnter>
                            {firstName}
                        </AnimatePresence>
                        <Link href={link}>her</Link>
                    </div> */}
                </div>
                <div className={styles.textSection}>
                    <AnimatePresence exitBeforeEnter>
                        {fullName}
                    </AnimatePresence>
                    <p className={styles.title}>
                        <AnimatePresence exitBeforeEnter>
                            {role}
                        </AnimatePresence>
                        <motion.span
                            initial={{ rotateX: -90 }}
                            animate={{ rotateX: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: 'linear',
                                delay: 0.321 * 4 //to line up with initial role animation
                            }}
                        >
                            , Webstep
                        </motion.span>
                    </p>
                    <AnimatePresence exitBeforeEnter>
                        {quote}
                    </AnimatePresence>
                </div>
            </div>
            <ProgressBar progress={currentEmployee} size={EmployeeData.length} onClick={(value) => setCurrentEmployee(value)} />
        </section>
    )
}

export default Employee