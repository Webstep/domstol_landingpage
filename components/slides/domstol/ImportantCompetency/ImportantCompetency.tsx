import { motion } from 'framer-motion';
import React from 'react';
import styles from './ImportantCompetency.module.scss';
import Image from 'next/image';
import SamfunnsAnsvar from '../../../../public/assets/domstol/images/important-competency.jpg';
import { Text, Title } from '../../../common/Typography'
import Citation from '../../../common/Citation';

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
                <div className={styles.media}>
                    <motion.div
                        className={styles.image}
                        initial={{ y: -200, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: enterTransistion }}
                        exit={{ x: -100, opacity: 0, transition: exitTransition }}
                        viewport={{ once: true }}
                    >
                        <Image src={SamfunnsAnsvar} alt="" width={358} height={467} />
                    </motion.div>
                </div>
                <div className={styles.textSection}>
                    <motion.div
                        initial={{ y: -200, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: enterTransistion }}
                        exit={{ x: 100, opacity: 0, transition: exitTransition }}
                        viewport={{ once: true }}
                    >
                        <Title className={styles.heading}>
                            <div className={styles.stickyDiv}>
                                TRENGER VIKTIG KOMPETANSE FRA WEBSTEP
                            </div>
                        </Title>
                    </motion.div>

                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: enterTransistion }}
                        exit={{ y: 100, opacity: 0, transition: exitTransition }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.description}>
                            <div>
                                <Text isOverlay>
                                    Dagens DA-løsning er en hybridløsning, dels systemstøtte, dels manuelle operasjoner.
                                </Text>
                                <Text isOverlay>
                                    Ting tar tid fra beslutning til resultat. Men hvordan skulle de løse de teknologiske problemene? Herman har svaret:
                                </Text>

                                <Citation quote="Vi trengte bred digital kompetanse, og vi hadde behov for de beste. Webstep har vist oss at de både har kompetansen og kapasiteten til å hjelpe oss på denne veien.
                            " />
                            </div>
                            <div>
                                <Text isOverlay>
                                    Dette er en stor og spennende oppgave, og Webstep bygger sterke software-team for å nå hårete DA-mål. Som nå er blitt våre.
                                </Text>
                                <Citation name={'Herman Seip'} quote={'Alle som kommer inn døra her ønsker å levere på samfunns- oppdraget vårt.'} occupation={'Arkitekt hos DA'} />
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div >
        </section >
    );
};

export default ImportantCompetency
