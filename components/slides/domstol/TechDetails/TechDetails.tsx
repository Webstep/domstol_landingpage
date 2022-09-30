import React from 'react';
import styles from './TechDetails.module.scss';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image'
import { Text } from '../../../common/Typography';
import Citation from '../../../common/Citation';

interface TechnologyProps {
    label: string;
    searchTerm?: string;
}

const Technology: React.FC<TechnologyProps> = ({ searchTerm, label }) => {
    return (
        <a href={`https://www.webstep.no/?s=${searchTerm || label}`} className={styles.hashtag} target="_blank" rel="tag noreferrer">
            #{label}
        </a>
    );
};

const TechDetails: React.FC = () => {
    return (
        <section className={styles.section} >
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ y: -400, opacity: 0 }}
                transition={{
                    duration: 1,
                }}
                className={styles.media}
            >
                <Image
                    src="/assets/carl_bokestad.jpg"
                    alt="bilde av Carl Fredrik Bøkestad"
                    width={358}
                    height={464.58}
                    objectFit="cover"
                />
                <p className={styles.moreInfo}>
                    Ønsker du mer teknisk info? <br />
                    <strong>Se Carl forklare i videoen under</strong>
                </p>
                <div className={styles.hashtags}>
                    <Technology label="kotlin" />
                    <Technology label="react" />
                    <Technology label="java" />
                    <Technology label="swingklient" searchTerm="swing+klient" />
                </div>
            </motion.div>
            <motion.div
                className={styles.description}
                variants={descriptionContainer}
                initial="hidden"
                animate="show"
                exit="leave"
            >
                <Citation quote="Vi har fått lov til å være med å utvikle den teknologien som kommer til å ligge foran oss i mange år"
                    name="Carl Fredrik Bøkestad"
                    occupation="Systemutvikler, Webstep" variants={item} />
                <Citation variants={item} quote="
                        Webstep kom inn i prosjektet på et helt nytt fagfelt for alle involverte. DA har lagt godt til rette for oss og var klare over at vi ikke kunne så mye fra før. Det gode samarbeidet mellom DA og Webstep har vært avgjørende for dette prosjektet."
                />
                <Text variants={item} isOverlay>
                    Oppdraget har blitt langt mer enn timeleveranser dag for dag, for
                    en og en konsulent, uke inn og uke ut. Dette er fellesskap, samarbeid
                    og nybrottsarbeid.
                </Text>
                <Citation variants={item}
                    quote="Og dette er ikke et hvilket som helst prosjekt. Vi har tatt med oss en kultur og et mindset, åpent for nye løsninger, innovativ tenkning og fravær av fastlåste tanker og forhåndsdefinerte svar" />
            </motion.div>
        </section >
    );
};

const descriptionContainer: Variants = {
    hidden: {},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25
        }
    },
    leave: {
        y: 400,
        opacity: 0,
        transition: {
            duration: 1,
        }
    }
}

const item = {
    hidden: {
        opacity: 0,
        x: 200
    },
    show: {
        opacity: [0, 0, 0.3, 0.6, 1],
        x: 0,
        transition: {
            duration: 1
        }
    }
}
export default TechDetails;
