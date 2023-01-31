import React, { useContext } from 'react';
import styles from './Collaboration.module.scss';
import Image from 'next/image'
import BrigittAndHerman from '../../../../public/assets/domstol/images/BrigittAndHerman_horizontal.jpg';
import { Text, Title } from '../../../common/Typography';
import Citation from '../../../common/Citation';
import { motion, Variants } from 'framer-motion';
import { DeviceContext } from '../../../common/Device/';

const containerVariants: Variants = {
    initial: { x: 100, y: 50, opacity: 0 },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
        }
    },
    exit: {
        x: 100,
        y: 50,
        opacity: 0,
        transition: {
            duration: 1,
        }
    }
}

const videoVariants: Variants = {
    initial: {
        y: 100,
        x: -50,
        opacity: 0,
    },
    animate: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    },
    exit: {
        y: 100, x: -50, opacity: 0,
        transition: { duration: 1 }
    }
}

const imageVariants: Variants = {
    initial: {
        y: -100,
        x: 50,
        opacity: 0,
        zIndex: 999
    },
    animate: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    },
    exit: {
        y: -100, x: 50, opacity: 0,
        transition: { duration: 1 }
    }
}

const Collaboration: React.VFC = () => {
    const { isMobile } = useContext(DeviceContext)

    return (
        <section className={styles.section}>
            <div className={styles.imageContainer}>
                <motion.div
                    initial={isMobile ? {} : { y: -100, x: 50, opacity: 0, zIndex: 999 }}
                    whileInView={isMobile ? {} : { y: 0, x: 0, opacity: 1 }}
                    exit={isMobile ? {} : { y: -100, x: 50, opacity: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src={BrigittAndHerman}
                        width={463}
                        height={309}
                        alt="Brigitt og Herman i dialog"
                    />
                </motion.div>
                <motion.video
                    width={574}
                    height={327}
                    loop
                    muted
                    autoPlay
                    initial={isMobile ? {} : { y: 100, x: -50, opacity: 0 }}
                    whileInView={isMobile ? {} : { y: 0, x: 0, opacity: 1 }}
                    exit={isMobile ? {} : { y: 100, x: -50, opacity: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <source src="/assets/domstol/videos/Courtroom_loop_16x9.mp4" type="video/mp4" />
                </motion.video>
            </div>
            <motion.div
                className={styles.description}
                initial={isMobile ? {} : { x: 100, y: 50, opacity: 0 }}
                whileInView={isMobile ? {} : { x: 0, y: 0, opacity: 1 }}
                exit={isMobile ? {} : { x: 100, y: 50, opacity: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div>
                    <Title>webstep og domstolene</Title>
                    <Text>
                        DA drømmer om de beste løsningene for brukerne sine. Vi leverer team for å lage disse løsningene. Samarbeidet er tett og godt.
                    </Text>
                </div>

                <Citation name="Brigitt Bright" quote="Nytteverdien til løsningen er en mer effektiv arbeidsdag og arbeidsflyt for alle de som bruker systemet i hverdagen. Det er alt fra advokater og saksbehandlere, til oss utviklere som jobber med å forbedre koden." occupation="Systemutvikler, Webstep" />

                <Text isOverlay>
                    Domstolene er en massiv konfliktløser i det norske samfunnet. En strøm av skyld og uskyld, rett og galt strømmer gjennom.  Det gir mening å bygge så viktige systemer for en stolt og offensiv oppdragsgiver som domstoladministrasjonen. Da blir jobben som å bygge en katedral, i motsetning til å hugge stein.
                </Text>
            </motion.div>

        </section>
    );
};

export default Collaboration;   
