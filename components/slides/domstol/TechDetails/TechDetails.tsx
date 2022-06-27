import React, { useState, useEffect, useRef } from 'react';
import styles from './TechDetails.module.scss';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image'
import PopupVideo from '../../../common/PopupVideo';

/*interface TechDetailsProps {
    : string;
}*/

const TechDetails: React.FC = ({ }) => {

    const [showVideo, setShowVideo] = useState<boolean>(false);
    const node = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    const handleClick = (e: { target: any; }) => {
        console.log("inside handle click")
        if (node?.current?.contains(e.target as Node) ) {
            console.log("inside if")
            return;
        } 
        else {
            setShowVideo(false);
        }
};


    const descriptionContainer: Variants = {
        hidden: {},
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.25
            }
        },
        leave: {
            y: 400,
            opacity: 0,
            transition: {
                duration: 1,
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
        <section className={styles.background} >
            <div className={styles.section} ref={node}>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ y: -400, opacity: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 1,
                    }}
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setShowVideo(!showVideo)}
                        className={styles.imageButton}
                        >

                    <Image
                        src="/assets/carl_bokestad.jpg"
                        alt="bilde av Carl Fredrik Bøkestad"
                        width={358}
                        height={464.58}
                        objectFit="cover"
                    ></Image>

                        </motion.button>
                    <motion.p className={styles.moreInfo}>
                        Ønsker du mer teknisk info? <br />
                        <strong>Se Carl forklare i videoen over</strong>
                    </motion.p>
                    <motion.p className={styles.hashtags}>
                        <a href="https://www.webstep.no/?s=kotlin" className={styles.hashtag} >#kotlin </a>
                        <a href="https://www.webstep.no/?s=react" className={styles.hashtag}> #react</a> 
                        <a href="https://www.webstep.no/?s=java" className={styles.hashtag}> #java</a> 
                        <a href="https://www.webstep.no/?s=swing+klient" className={styles.hashtag}> #swingklient</a>
                    </motion.p>
                </motion.div >
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
                </motion.div>
            </div >
            {showVideo &&
                <PopupVideo src={require('../../../../public/videos/Webstep_DA_intervju_teknisk_1208x1920_v02_1.mp4')}></PopupVideo>}
        </section >
    );
};

export default TechDetails;
