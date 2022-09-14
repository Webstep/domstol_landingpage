import React from 'react';
import styles from './Collaboration.module.scss';
import Image from 'next/image'
import BrigittAndHerman from '../../../../public/assets/domstol/images/BrigittAndHerman_horizontal.jpg';
import Text from '../../../common/Text';
import Citation from '../../../common/Citation';
import { motion, Variants } from 'framer-motion';

const Collaboration: React.VFC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.imageContainer}>
                <motion.div {...imageVariants}>
                    <Image
                        src={BrigittAndHerman}
                        width={463}
                        height={309}
                        alt="Brigitt og Herman i dialog"
                    />
                </motion.div>
                <motion.video width={574} height={327} loop muted autoPlay {...videoVariants}>
                    <source src="/assets/domstol/videos/Courtroom_loop_16x9.mp4" type="video/mp4" />
                </motion.video>
            </div>
            <motion.div className={styles.description} {...containerVariants}>
                <div>
                    <h2>webstep og domstolene</h2>
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

export default Collaboration;   
