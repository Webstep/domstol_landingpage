import React, { useState, useEffect } from 'react';
import styles from './TechDetails.module.scss';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image'

/*interface TechDetailsProps {
    : string;
}*/

const TechDetails: React.FC = ({ }) => {

    const [showVideo, setShowVideo] = useState<boolean>(false);

    useEffect(() => {
        setShowVideo(!showVideo);
    }, []);

    const descriptionContainer: Variants = {
        hidden: {},
        show: {
            opacity: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.25
            }
        },
        leave: {
            y: 400,
            opacity: 0,
            transition: {
                duration: 1.5,
                delay: 0.5
            }
        }
    }

    const item = {
        hidden: {
            opacity: 0,
            x: 200
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1
            }
        }
    }

    return (
        <section className={styles.background}>
            <div className={styles.kotlin}>KOTLIN</div>
            <div className={styles.react}>REACT</div>
            <div className={styles.java}>JAVA</div>
            <div className={styles.section}>
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ y: -400, opacity: 0 }}
                transition={{
                    delay: 0.5,
                    duration: 1.5,
                }}
            >
                    <Image
                        src="/assets/carl_bokestad.jpg"
                        alt="bilde av Carl Fredrik Bøkestad"
                        width={358}
                        height={464.58}
                        objectFit="cover"
                    ></Image>
                <motion.p className={styles.moreInfo}>
                    Ønsker du mer teknisk info? <strong>Se Carl forklare i videoen over</strong>
                </motion.p>
            </motion.div>
            <motion.div
                className={styles.description}
                variants={descriptionContainer}
                initial="hidden"
                animate="show"
                exit="leave"
            >

                <motion.q variants={item} className={styles.quote}>
                    Vi har fått lov til å være med å utvikle den teknologien som kommer til å ligge foran oss i mange år
                </motion.q>
                <motion.span variants={item} className={styles.signature}>
                    <span>
                        Carl Fredrik Bøkestad
                    </span>
                    Systemutvikler, Webstep
                </motion.span>
                <motion.p variants={item}>
                    – Webstep kom inn i prosjektet på et helt nytt fagfelt for alle
                    involverte. DA har lagt godt til rette for oss og var klare over
                    at vi ikke kunne så mye fra før. Det gode samarbeidet mellom DA og
                    Webstep har vært avgjørende for dette prosjektet.
                </motion.p>
                <motion.p variants={item}>
                    Oppdraget har blitt langt mer enn timeleveranser dag for dag, for
                    en og en konsulent, uke inn og uke ut. Dette er fellesskap, samarbeid
                    og nybrottsarbeid.
                </motion.p>
                <motion.p variants={item}>
                    – Og dette er ikke et hvilket som helst prosjekt. Vi har tatt med oss
                    en kultur og et mindset, åpent for nye løsninger, innovativ tenkning
                    og fravær av fastlåste tanker og forhåndsdefinerte svar.
                </motion.p>
                <motion.p variants={item} className={styles.hashtag}>
                    #kotlin #react #java <br /> #tjukkllient
                </motion.p>
            </motion.div>
            </div>
        </section>
    );
};

export default TechDetails;
