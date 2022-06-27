import { motion } from 'framer-motion';
import React from 'react';
import styles from './ImportantCompetency.module.scss';
import Image from 'next/image';
import SamfunnsAnsvar from '../../../../public/assets/important-competency.jpg';

const ImportantCompetency: React.FC = () => {

    const enterTransistion = {
        duration: 1.5,
    }

    const exitTransition = {
        duration: 1,
    }


    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.image}
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: enterTransistion }}
                    exit={{ x: -100, opacity: 0, transition: exitTransition }}
                >
                    <Image src={SamfunnsAnsvar} alt="" width="358px" height="467px" />
                </motion.div>
                <div className={styles.text}>
                    <motion.div
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: enterTransistion }}
                        exit={{ x: 100, opacity: 0, transition: exitTransition }}
                    >
                        <h1 className={styles.heading}>
                            TRENGER VIKTIG KOMPETANSE FRA WEBSTEP
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: enterTransistion }}
                        exit={{ y: 100, opacity: 0, transition: exitTransition }}
                    >
                        <div className={styles.description}>
                            <p>Dagens DA-løsning er en hybridløsning, dels systemstøtte, dels manuelle operasjoner. Ting tar tid fra beslutning til resultat. Men hvordan skulle de løse de teknologiske problemene? Herman har svaret:
                                <br />
                                <br />
                                -  Vi trengte bred digital kompetanse, og vi hadde behov for de beste. Webstep har vist oss at de både har kompetansen og kapasiteten til å hjelpe oss på denne veien.
                            </p>
                            <p>
                                Dette er en stor og spennende oppgave, og Webstep bygger sterke software-team for å nå hårete DA-mål. Som nå er blitt våre.
                                <br />
                                <br />
                                -  Alle som kommer inn døra her ønsker å levere på samfunns- oppdraget vårt.
                            </p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default ImportantCompetency
